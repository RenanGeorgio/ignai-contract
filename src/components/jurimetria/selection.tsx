import React from "react";
import { Table, Tbody, Tr, Td, TableContainer, Checkbox, Box, Button, Select, Flex } from "@chakra-ui/react";

const Selection = () => {
  return (
    <Box>
      <Flex mb={4} justify="flex-end" gap={2}>
        <Select placeholder="De: 01/07/2024" width="200px">
          <option value="janeiro">05/07/2024</option>
          <option value="fevereiro">10/07/2024</option>
        </Select>
        <Select placeholder="Para: 06/09/2024" width="200px">
          <option value="2024">15/09/2024</option>
          <option value="2023">30/09/2024</option>
        </Select>
      </Flex>
      <Box boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" p={4} borderRadius="md">
        <Box fontWeight="bold" fontSize="lg" m={2}>Seleção de órgãos</Box>
        <Flex align="flex-start" mb={4}>
          <Flex >
          <Button
            size="sm"
            border="1px"
            borderColor="gray.300"
            variant="outline"
            p={2}
            m={1}
          >
            SELECIONAR TODOS
          </Button>
          <Button
            size="sm"
            border="1px"
            borderColor="gray.300"
            variant="outline"
            p={2}
            m={1}
          >
            REMOVER TODOS
          </Button>
          </Flex>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td p={2} lineHeight="1.2">TRIBUNAIS SUPERIORES</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td p={2} lineHeight="1.2">STF</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">STJ</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer mt={4}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td p={2} lineHeight="1.2">JUSTIÇA FEDERAL</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td p={2} lineHeight="1.2">TRF3</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TRF4</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TRF1</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TRF2</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TRF5</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer mt={4}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td p={2} lineHeight="1.2">JUSTIÇA ESTADUAL</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td p={2} lineHeight="1.2">TJ - RJ</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - PR</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - SC</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - SP</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - MG</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - MS</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td p={2} lineHeight="1.2">TJ - BA</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - CE</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - RS</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - ES</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - PB</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - PA</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td p={2} lineHeight="1.2">TJ - PE</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - GO</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - AM</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - TO</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - SE</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
                <Td p={2} lineHeight="1.2">TJ - RO</Td>
                <Td p={2} lineHeight="1.2"><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Selection;
