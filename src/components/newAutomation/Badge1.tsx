import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "@styles/automation/Badge.module.css";

export type BadgeType = {
  className?: string;
  success?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Badge1: FunctionComponent<BadgeType> = ({
  className = "",
  success,
  propColor,
  propMinWidth,
}) => {
  const successStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className={[styles.badge, className].join(" ")}>
      <div className={styles.success} style={successStyle}>
        {success}
      </div>
    </div>
  );
};

export default Badge1;