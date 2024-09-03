import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../styles/automation/FormSelect.module.css";

export type FormSelectType = {
  className?: string;
  text?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FormSelect: FunctionComponent<FormSelectType> = ({
  className = "",
  propMinWidth,
  text,
  propTextDecoration,
}) => {
  const formSelectStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={[styles.formSelect, className].join(" ")}
      style={formSelectStyle}
    >
      <div className={styles.form}>
        <div className={styles.form1}>
          <div className={styles.text} style={textStyle}>
            {text}
          </div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormSelect;