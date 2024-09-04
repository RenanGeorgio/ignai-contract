import { FunctionComponent } from "react";
import styles from "@styles/automation/HorizontalButtonGroup.module.css";

export type HorizontalButtonGroupType = {
  className?: string;
};

const HorizontalButtonGroup: FunctionComponent<HorizontalButtonGroupType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalButtonGroup, className].join(" ")}>
      <div className={styles.button}>
        <a className={styles.buttonLabels}>Mês</a>
      </div>
      <div className={styles.button1}>
        <a className={styles.text}>Semana</a>
      </div>
      <div className={styles.button2}>
        <div className={styles.text1}>Dia</div>
      </div>
      <div className={styles.button3}>
        <a className={styles.text2}>Lista</a>
      </div>
    </div>
  );
};

export default HorizontalButtonGroup;