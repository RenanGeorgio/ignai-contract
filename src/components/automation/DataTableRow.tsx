import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Badge from "./Badge";
import styles from "../../styles/automation/DataTableRow.module.css";

export type DataTableRowType = {
  className?: string;
  queirozGalvo?: string;
  emptyData?: string;
  success?: string;
  propColor?: string;
  propMinWidth3?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propRowGap?: CSSProperties["rowGap"];
  propOverflowX?: CSSProperties["overflowX"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const DataTableRow: FunctionComponent<DataTableRowType> = ({
  className = "",
  propBackgroundColor,
  propRowGap,
  propOverflowX,
  propMinWidth,
  propBackgroundColor1,
  queirozGalvo,
  propMinWidth1,
  emptyData,
  propMinWidth2,
  propWidth,
  success,
  propColor,
  propMinWidth3,
}) => {
  const dataTableRowStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      rowGap: propRowGap,
      overflowX: propOverflowX,
    };
  }, [propBackgroundColor, propRowGap, propOverflowX]);

  const dataTableCellStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const queirozGalvoStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const emptyDataStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      width: propWidth,
    };
  }, [propMinWidth2, propWidth]);

  return (
    <div
      className={[styles.dataTableRow, className].join(" ")}
      style={dataTableRowStyle}
    >
      <div className={styles.dataTableCell} style={dataTableCellStyle}>
        <div className={styles.labelInitials}>
          <div className={styles.background} style={backgroundStyle} />
          <div className={styles.pi}>JK</div>
        </div>
        <div className={styles.text}>
          <div className={styles.queirozGalvo} style={queirozGalvoStyle}>
            {queirozGalvo}
          </div>
          <div className={styles.margejacobsongmailcom2799}>
            Marge.Jacobson@gmail.com 27 99882-7820
          </div>
        </div>
      </div>
      <div className={styles.dataTableCell1}>
        <div className={styles.emptyData} style={emptyDataStyle}>
          {emptyData}
        </div>
      </div>
      <div className={styles.dataTableCell2}>
        <Badge
          success={success}
          propColor={propColor}
          propMinWidth={propMinWidth3}
        />
      </div>
      <div className={styles.dataTableCell3}>
        <img className={styles.editIcon} alt="" src="/edit.svg" />
        <img
          className={styles.trashIcon}
          loading="lazy"
          alt=""
          src="/trash.svg"
        />
        <img
          className={styles.dotsVerticalIcon}
          alt=""
          src="/dotsvertical.svg"
        />
      </div>
    </div>
  );
};

export default DataTableRow;