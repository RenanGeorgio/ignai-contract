import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "@styles/automation/Card.module.css";

export type CardType = {
  className?: string;
  vuesaxlinearconvertshape?: string;
  modificaes?: string;
  cardTwoIcons?: string;
  frame?: string;
  cardThreeIcons?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  propLeft,
  propBackgroundColor,
  vuesaxlinearconvertshape,
  propOverflow,
  modificaes,
  propMinWidth,
  cardTwoIcons,
  propMinWidth1,
  frame,
  cardThreeIcons,
  propColor,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const cardOneIconsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const vuesaxlinearconvertshapeIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const modificaesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cardTwoIconsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const cardThreeIconsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <div className={styles.cardsRowOne}>
        <div className={styles.cardsRowTwo}>
          <div className={styles.cardOne}>
            <div className={styles.cardOneIcons} style={cardOneIconsStyle}>
              <img
                className={styles.vuesaxlinearconvertshapeIcon}
                loading="lazy"
                alt=""
                src={vuesaxlinearconvertshape}
                style={vuesaxlinearconvertshapeIconStyle}
              />
            </div>
            <a className={styles.modificaes} style={modificaesStyle}>
              {modificaes}
            </a>
          </div>
          <div className={styles.cardOneContent}>
            <div className={styles.cardTwoIcons} style={cardTwoIconsStyle}>
              {cardTwoIcons}
            </div>
            <div className={styles.content}>
              <div className={styles.label}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src={frame}
                />
                <div
                  className={styles.cardThreeIcons}
                  style={cardThreeIconsStyle}
                >
                  {cardThreeIcons}
                </div>
              </div>
              <div className={styles.ltimoMs}>último mês</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;