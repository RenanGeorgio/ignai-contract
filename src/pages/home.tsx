import { Box } from '@chakra-ui/react';
import PDFViewer from '../components/pdf';
import ChatComponent from '../views/chat';

interface HomeProps {
  expanded: boolean;
}

const Home: React.FC<HomeProps> = ({ expanded }) => {
  return (
    <Box display="flex" height="100vh">
      <Box
        flex="1"
        ml={expanded ? "250px" : "80px"} 
        mr="10px"
        overflowY="auto"
        transition="margin 0.3s ease"
      >
        <PDFViewer />
      </Box>
      <Box
        flex="1"
        ml="10px" 
        borderRadius="md"
        boxShadow="md"
      >
        <ChatComponent />
      </Box>
    </Box>
  );
};

export default Home;
