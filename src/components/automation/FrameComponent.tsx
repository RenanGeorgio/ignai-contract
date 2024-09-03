import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "@styles/automation/FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  contratos?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  contratos,
  propMinWidth,
  prop,
  propMinWidth1,
}) => {
  const contratosStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.cardInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src="/frame1.svg" />
            <img
              className={styles.vuesaxlinearpresentionChartIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearpresentionchart.svg"
            />
          </div>
          <a className={styles.contratos} style={contratosStyle}>
            {contratos}
          </a>
        </div>
        <div className={styles.parent}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
          <div className={styles.content}>
            <div className={styles.label}>
              <img
                className={styles.frameIcon1}
                loading="lazy"
                alt=""
                src="/frame-4.svg"
              />
              <div className={styles.div1}>0.80%</div>
            </div>
            <div className={styles.ltimoMs}>último mês</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;