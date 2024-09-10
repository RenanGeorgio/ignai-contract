import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const barData = [
  { label: 'Contrário', percentage: 39.7, color: 'red' },
  { label: 'Favorável', percentage: 28.3, color: 'green' },
  { label: 'Parcial', percentage: 17.4, color: 'yellow' },
  { label: 'Outros', percentage: 14.6, color: 'gray' },
];

const tableData = [
  { name: 'Categoria 1', number1: '17,513', percentage: '39.7%' },
  { name: 'Categoria 2', number1: '15,000', percentage: '28.3%' },
  { name: 'Categoria 3', number1: '12,000', percentage: '17.4%' },
  { name: 'Categoria 4', number1: '9,000', percentage: '14.6%' },
];

const DecisoesFinais = () => {
  return (
    <VStack spacing={4} align="stretch" style={{ height: 300, overflowY: 'auto'}}>
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Decisões Finais
        </Text>
      </Box>
      <Box>
        <Flex direction="column" align="center">
          <Flex direction="row" align="center" justify="space-between" width="100%" marginBottom="50px">
            {barData.map((item) => (
              <Box key={item.label} flex={1} textAlign="center">
                <Text>{item.label}</Text>
              </Box>
            ))}
          </Flex>
          <Box position="relative" height="30px" width="100%">
            {barData.map((item, index) => (
              <Box
                key={item.label}
                position="absolute"
                top={0}
                left={`${barData.slice(0, index).reduce((sum, segment) => sum + segment.percentage, 0)}%`}
                height="100%"
                width={`${item.percentage}%`}
                bg={item.color}
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                zIndex={1}
              >
                {item.percentage}%
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Ícone</Th>
              <Th>Descrição</Th>
              <Th isNumeric>Valor</Th>
              <Th isNumeric>Percentual</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Flex align="center">
                    <Icon as={ChevronUpIcon} color="green.500" />
                  </Flex>
                </Td>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.number1}</Td>
                <Td isNumeric>{item.percentage}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
}

export default DecisoesFinais;
