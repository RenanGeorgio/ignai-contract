import { Box, Button, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import "@styles/viewsForm.css";

const FormAgendamento: FunctionComponent = () => {
  return (
    <Box className="containerViewForm" p={5} border="1px solid" borderColor="gray.300" borderRadius="md" height="100%" overflowY="auto">
      <Flex mb={4}>
        <Box width="30%">
          <Text mb={2}>Unidade Administrativa</Text>
          <Select>
            <option>Todas</option>
          </Select>
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Número do Contrato</Text>
          <Input />
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Número do Processo</Text>
          <Input />
        </Box>
      </Flex>

      <Flex mb={4}>
        <Box width="30%">
          <Text mb={2}>Enquadramento</Text>
          <Select>
            <option>Todas</option>
          </Select>
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Situação</Text>
          <Select>
            <option>Todas</option>
          </Select>
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Objeto da Contratação</Text>
          <Input />
        </Box>
      </Flex>

      <Flex mb={4}>
        <Box width="30%">
          <Text mb={2}>Fornecedor</Text>
          <Input />
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>CNPJ/CPF</Text>
          <Input />
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Objeto de Contratação</Text>
          <Input />
        </Box>
      </Flex>

      <Flex mb={4} align="center" justify="space-between">
        <Box width="23%">
          <Text mb={2}>Início da Vigência</Text>
          <Text mb={2}>De:</Text>
          <Input />
        </Box>
        <Box width="23%">
          <Text mb={2}>&nbsp;</Text>
          <Text mb={2}>Para:</Text>
          <Input />
        </Box>
        <Box width="23%">
          <Text mb={2}>Fim da Vigência</Text>
          <Text mb={2}>De:</Text>
          <Input />
        </Box>
        <Box width="23%">
          <Text mb={2}>&nbsp;</Text>
          <Text mb={2}>Para:</Text>
          <Input />
        </Box>
      </Flex>

      <Text mb={2}>Valor do Contrato</Text>
      <Flex mb={4}>
        <Box width="30%">
          <Text mb={2}>De:</Text>
          <Input />
        </Box>
        <Box width="30%" ml={2}>
          <Text mb={2}>Para:</Text>
          <Input />
        </Box>
      </Flex>

      <Text mb={2}>Busca Detalhada</Text>
      <Flex justifyContent="space-between">
        <Box>
          <Checkbox>Todos</Checkbox><br />
          <Checkbox>Órgão Superior</Checkbox><br />
          <Checkbox>Órgão Subordinado</Checkbox><br />
          <Checkbox>Unidade Administrativa</Checkbox><br />
          <Checkbox>Número do Processo</Checkbox>
        </Box>
        <Box>
          <Checkbox>Número do ICJ</Checkbox><br />
          <Checkbox>Enquadramento do Processo</Checkbox><br />
          <Checkbox>CNPJ/CPF</Checkbox>
        </Box>
        <Box>
          <Checkbox>Objeto da contratação</Checkbox><br />
          <Checkbox>Valor do Contrato</Checkbox><br />
          <Checkbox>Saldo bruto do contrato</Checkbox><br />
          <Checkbox>Saldo inativo</Checkbox>
        </Box>
        <Box>
          <Checkbox>Situação</Checkbox><br />
          <Checkbox>Número dos aditivos</Checkbox><br />
          <Checkbox>Fundamento Legal</Checkbox>
        </Box>
      </Flex>

      <Flex justifyContent="center" mt={5}>
        <Button bg="gray.300" color="black" mr={2}>Consultar</Button>
        <Button bg="gray.300" color="black">Limpar</Button>
      </Flex>
    </Box>
  );
};

export default FormAgendamento;
