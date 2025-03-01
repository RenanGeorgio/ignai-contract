import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";
import FrameComponent2 from "@components/automation/FrameComponent2";
import PDFViewer from "@components/pdf";

import styles from "@styles/Final.module.css";

export type FinalType = {
  className?: string;
  expanded: boolean;
};

const Final: FunctionComponent<FinalType> = ({ expanded }: FinalType) => {
  console.log(expanded);
  return (
    <div className={styles.containerFinal}>
      <Box
        flex="1"
        ml={expanded ? "200px" : "10px"} 
        mr="10px"
        overflowY="auto"
        transition="margin 0.3s ease"
      >
        <div className={styles.final}>
          <FrameComponent2 />
          <div className={styles.finalInner}>
            <div className={styles.image14Parent}>
              <PDFViewer />
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
      </Box>
    </div>
  );
}

export default Final;
