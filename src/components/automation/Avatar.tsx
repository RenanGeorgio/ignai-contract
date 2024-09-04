import { FunctionComponent } from "react";
import Avatar1 from "./Avatar1";
import styles from "@styles/automation/Avatar.module.css";

export type AvatarType = {
  className?: string;
};

const Avatar: FunctionComponent<AvatarType> = ({ className = "" }) => {
  return (
    <div className={[styles.avatar, className].join(" ")}>
      <Avatar1 />
      <div className={styles.status} />
    </div>
  );
};

export default Avatar;