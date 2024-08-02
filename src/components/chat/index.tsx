import { Box, Input, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const emojis = {
  share: '🔗',
  edit: '✏️',
  download: '⬇️',
  reload: '🔄',
  trash: '🗑️',
};

interface Message {
  content: string;
  sender: 'user' | 'other';
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { content: 'Olá! Este é um Termo de Confidencialidade celebrado entre o SENAI-MT, SENAI-ES e uma empresa parceira. O objetivo é garantir a proteção de informações confidenciais durante a realização dos projetos conjuntos. ', sender: 'other' },
    { content: 'Gostaria de saber se o termo de confidencialidade está de acordo com os termos do art. 10 da Medida Provisória n°2.200-2', sender: 'user' },
    { content: 'Sim, o Termo de Confidencialidade está de acordo com os termos do art. 10 da Medida Provisória n°2.200-2, conforme mencionado. O acordo pode ser firmado em formato eletrônico como forma de comprovação de anuência.', sender: 'other' }
  ]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { content: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box 
        as="header" 
        p={4} 
        borderBottom="1px solid gray" 
        borderLeft="1px solid gray"
        borderColor="gray.300"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg" fontWeight="bold">Chat</Text>
        <HStack spacing={4}>
          <Box fontSize="md" mr={-2}>{emojis.share}</Box>
          <Box fontSize="md" mr={-2}>{emojis.edit}</Box>
          <Box fontSize="md" mr={-2}>{emojis.download}</Box>
          <Box fontSize="md" mr={-2}>{emojis.reload}</Box>
          <Box fontSize="md">{emojis.trash}</Box>
        </HStack>
      </Box>
      <VStack 
        flex="1" 
        overflowY="auto" 
        spacing={4} 
        p={4} 
        bg="gray.50" 
        borderLeft="1px solid gray"
        borderColor="gray.300"
        >
        {messages.map((message, index) => (
          <HStack
            key={index}
            w="full"
            justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
          >
            <Box
              bg={message.sender === 'user' ? 'blue.100' : 'gray.200'}
              p={3}
              borderRadius="md"
              maxWidth="70%"
            >
              <Text>{message.content}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>
      <Box as="footer" p={4} borderTop="1px solid" borderLeft="1px solid" borderColor="gray.300">
        <HStack>
          <Input
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button colorScheme="blue" onClick={sendMessage}>Enviar</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ChatComponent;
