import { useCurrency } from "@/hooks/useCurrency";
import styles from "./Converter.module.scss";
import { CurrencyInput } from "@/components/CurrencyInput/CurrencyInput";
import { Footer } from "@/components/Footer/Footer";

export const Converter = () => {
  const { amount, setAmount, base, setBase, foreign, setForeign, result } =
    useCurrency();

  return (
    <div className={styles.converter}>
      <h1 className={styles.title}>Currency Converter 💸</h1>

      <CurrencyInput
        type="base"
        amount={amount}
        setAmount={setAmount}
        base={base}
        setBase={setBase}
      />
      <CurrencyInput type="foreign" foreign={foreign} setForeign={setForeign} result={result} />
      
      <Footer />
    </div>
  );
};
