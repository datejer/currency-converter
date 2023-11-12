import { CurrencyCode } from "@/lib/currencies";
import { getRates } from "@/lib/getRates";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import NP from "number-precision";

const convert = (amount: number, rate: number) => {
  return NP.times(amount, rate);
};

export const useCurrency = () => {
  const [base, setBase] = useState<CurrencyCode>("EUR");
  const [foreign, setForeign] = useState<CurrencyCode>("PLN");
  const [amount, setAmount] = useState("1");

  const { isPending, error, data } = useQuery({
    queryKey: ["currency", base],
    queryFn: () => getRates(base),
  });

  const rate = data?.rates?.[foreign] || 1;
  const result = convert(Number(amount), rate);

  return {
    amount,
    setAmount,
    base,
    setBase,
    foreign,
    setForeign,
    result,
    isPending,
    error,
    convert,
  };
};