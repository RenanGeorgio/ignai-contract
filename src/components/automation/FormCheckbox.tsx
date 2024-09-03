import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../styles/automation/FormCheckbox.module.css";

export type FormCheckboxType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const FormCheckbox: FunctionComponent<FormCheckboxType> = ({
  className = "",
  propFlex,
}) => {
  const formCheckboxStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.formCheckbox, className].join(" ")}
      style={formCheckboxStyle}
    >
      <div className={styles.formCheckboxButton}>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
      </div>
      <div className={styles.text}>Text</div>
    </div>
  );
};

export default FormCheckbox;