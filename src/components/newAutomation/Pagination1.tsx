import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "@styles/automation/Pagination.module.css";

export type PaginationType = {
  className?: string;

  /** Style props */
  paginationFlex?: CSSProperties["flex"];
  paginationMinWidth?: CSSProperties["minWidth"];
};

const Pagination1: FunctionComponent<PaginationType> = ({
  className = "",
  paginationFlex,
  paginationMinWidth,
}) => {
  const paginationStyle: CSSProperties = useMemo(() => {
    return {
      flex: paginationFlex,
      minWidth: paginationMinWidth,
    };
  }, [paginationFlex, paginationMinWidth]);

  return (
    <div
      className={[styles.pagination, className].join(" ")}
      style={paginationStyle}
    >
      <div className={styles.paginationText}>
        <div className={styles.pageNumberLabels}>Anteiror</div>
      </div>
      <div className={styles.paginationText1}>
        <div className={styles.text}>1</div>
      </div>
      <div className={styles.paginationText2}>
        <div className={styles.text1}>2</div>
      </div>
      <div className={styles.paginationText3}>
        <div className={styles.text2}>3</div>
      </div>
      <div className={styles.paginationText4}>
        <div className={styles.text3}>4</div>
      </div>
      <div className={styles.paginationText5}>
        <div className={styles.text4}>5</div>
      </div>
      <div className={styles.paginationText6}>
        <div className={styles.text5}>Próximo</div>
      </div>
    </div>
  );
};

export default Pagination1;