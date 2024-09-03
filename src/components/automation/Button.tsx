import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../styles/automation/Button.module.css";

export type ButtonType = {
  className?: string;
  historyLabel?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propLeft?: CSSProperties["left"];
  propBottom?: CSSProperties["bottom"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  propBackgroundColor,
  propTop,
  propPadding,
  propLeft,
  propBottom,
  historyLabel,
  propColor,
  propDisplay,
  propMinWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      top: propTop,
      padding: propPadding,
      left: propLeft,
      bottom: propBottom,
    };
  }, [propBackgroundColor, propTop, propPadding, propLeft, propBottom]);

  const historyLabelStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor, propDisplay, propMinWidth]);

  return (
    <div className={[styles.button, className].join(" ")} style={buttonStyle}>
      <div className={styles.button1}>
        <div className={styles.historyLabel} style={historyLabelStyle}>
          {historyLabel}
        </div>
      </div>
    </div>
  );
};

export default Button;