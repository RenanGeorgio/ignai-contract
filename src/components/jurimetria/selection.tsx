import React from "react";
import { Table, Tbody, Tr, Td, TableContainer, Checkbox, Box } from "@chakra-ui/react";

const Selection = () => {
  return (
    <Box boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" p={4} borderRadius="md">
      <div>
        <div>
          <div>Seleção de órgãos</div>
          <div>
            <button>SELECIONAR TODOS</button>
          </div>
          <div>
            <button>REMOVER TODOS</button>
          </div>
        </div>

        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>TRIBUNAIS SUPERIORES</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>STF</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>STJ</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer mt={4}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>JUSTIÇA FEDERAL</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>TRF3</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TRF4</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TRF1</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TRF2</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TRF5</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer mt={4}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>JUSTIÇA ESTADUAL</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>TJ - RJ</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - PR</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - SC</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - SP</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - MG</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - MS</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>TJ - BA</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - CE</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - RS</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - ES</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - PB</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - PA</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>TJ - PE</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - GO</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - AM</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - TO</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - SE</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td>TJ - RO</Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Selection;
