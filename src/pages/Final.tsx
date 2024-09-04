import { FunctionComponent } from "react";
import FrameComponent2 from "@components/automation/FrameComponent2";
import styles from "@styles/automation/Final.module.css";

export type FinalType = {
  className?: string;
  expanded: boolean;
};

const Final: FunctionComponent<FinalType> = ({ className = "", expanded }) => {
  return (
    <div className={[styles.final, className].join(" ")}>
      <FrameComponent2 />
      <div className={styles.finalInner}>
        <div className={styles.image14Parent}>
          {/* img */}
          {/* img */}
        </div>
      </div>
      <div className={styles.finalChild}>
        <div className={styles.frameParent}>
          <div className={styles.image16Parent}>
            {/* img */}
            <div className={styles.image15Wrapper}>
              {/* img */}
            </div>
          </div>
          <div className={styles.image6Parent}>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
           {/* img */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;