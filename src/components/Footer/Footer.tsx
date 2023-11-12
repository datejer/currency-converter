import { useDateAndTime } from "@/hooks/useDateAndTime";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { date, time } = useDateAndTime();

  return (
    <div className={styles.footer}>
      <div className={styles.dateTime}>
        {/* Suppress hydration warning because timestamps will differ anyway, see:
        https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning */}
        <div suppressHydrationWarning>{date}</div>
        <div suppressHydrationWarning>{time}</div>
      </div>
      <a className={styles.attribution} href="https://www.exchangerate-api.com">
        Rates By Exchange Rate API
      </a>
      <div className={styles.attribution}>
        <a
          className={styles.attribution}
          href="https://github.com/datejer/currency-converter"
        >
          GitHub
        </a>
        {" | "}
        <a className={styles.attribution} href="https://dudek.sh">
          by Artur
        </a>
      </div>
    </div>
  );
};
