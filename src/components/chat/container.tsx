import React, { useEffect, useRef, useState } from "react";
import { Box, Popper, IconButton } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { ChatView } from "@views";

import styles from "./Container.css";

const ChatContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const elRef = useRef<any>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Box sx={{ top:'55px',position:'relative'}} >
        <IconButton
          ref={elRef}
          isRound={true}
          variant='solid'
          colorScheme='green'
          aria-label='Send Chat'
          icon={<ChatIcon />}
          onClick={handleClick}
        />
      <Popper open={open} placement="top-end" anchorEl={elRef.current}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <ChatView />
          </div>
        </div>
      </Popper>
      </Box>
    </>
  );
}

export default ChatContainer