import styles from "./CurrencyInput.module.scss";
import { CURRENCY_CODES, CurrencyCode } from "@/lib/currencies";

type BaseCurrencyInputProps = {
  type: "base";
  amount: string;
  setAmount: (value: string) => void;
  base: CurrencyCode;
  setBase: (value: CurrencyCode) => void;
};

type ForeignCurrencyInputProps = {
  type: "foreign";
  foreign: CurrencyCode;
  setForeign: (value: CurrencyCode) => void;
  result: number;
};

type CurrencyInputProps = BaseCurrencyInputProps | ForeignCurrencyInputProps;

export const CurrencyInput = (props: CurrencyInputProps) => {
  const number = props.type === "base" ? props.amount : props.result;
  const currency = props.type === "base" ? props.base : props.foreign;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === "base") {
      props.setAmount(e.target.value);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.type === "base") {
      props.setBase(e.target.value as CurrencyCode);
    } else {
      props.setForeign(e.target.value as CurrencyCode);
    }
  };

  return (
    <div className={styles.row}>
      <input
        type="number"
        className={styles.input}
        value={number}
        onChange={handleInputChange}
        disabled={props.type === "foreign"}
      />
      <div className={styles.divider}></div>
      <select
        className={styles.currencySelect}
        value={currency}
        onChange={handleSelectChange}
      >
        {CURRENCY_CODES.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};
