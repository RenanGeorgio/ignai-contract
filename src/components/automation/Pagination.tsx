import { FunctionComponent } from "react";
import styles from "../../styles/automation/Pagination.module.css";

export type PaginationType = {
  className?: string;
};

const Pagination: FunctionComponent<PaginationType> = ({ className = "" }) => {
  return (
    <div className={[styles.pagination, className].join(" ")}>
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

export default Pagination;