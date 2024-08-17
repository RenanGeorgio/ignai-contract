import { Box } from "@chakra-ui/react";
import { ChatView } from "@views";

import styles from "./Container.css";

const ChatContainer = () => {
  return (
    <Box sx={{ top:'55px',position:'relative'}} >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ChatView />
        </div>
      </div>
    </Box>
  );
}

export default ChatContainer;