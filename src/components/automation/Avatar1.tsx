import { FunctionComponent } from "react";
import styles from "../../styles/automation/Avatar1.module.css";

export type Avatar1Type = {
  className?: string;
};

const Avatar1: FunctionComponent<Avatar1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.avatar, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.background1} />
        <div className={styles.overlay} />
      </div>
      <img
        className={styles.avatarIcon}
        loading="lazy"
        alt=""
        src="/avatar@2x.png"
      />
    </div>
  );
};

export default Avatar1;