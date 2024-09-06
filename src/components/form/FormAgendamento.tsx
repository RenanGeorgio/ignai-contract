import { Box, Button, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const FormularioAgendamento: FunctionComponent = () => {
  return (
    <Box p={5} border="1px solid" borderColor="gray.300" borderRadius="md">
      <Flex mb={4}>
        <Select placeholder="Unidade Administrativa" width="30%">
          <option>Todas</option>
        </Select>
        <Input placeholder="Número do Contrato" ml={2} width="30%" />
        <Input placeholder="Número do Processo" ml={2} width="30%" />
      </Flex>

      <Flex mb={4}>
        <Select placeholder="Enquadramento do Processo" width="30%">
          <option>Todas</option>
        </Select>
        <Select placeholder="Situação" ml={2} width="30%">
          <option>Todas</option>
        </Select>
        <Input placeholder="Objeto da Contratação" ml={2} width="30%" />
      </Flex>

      <Flex mb={4}>
        <Input placeholder="Fornecedor" width="30%" />
        <Input placeholder="CNPJ/CPF" ml={2} width="30%" />
        <Input placeholder="Objeto de Contratação" ml={2} width="30%" />
      </Flex>

      <Text mb={2}>Início da Vigência</Text>
      <Flex mb={4}>
        <Input placeholder="De" width="30%" />
        <Input placeholder="Até" ml={2} width="30%" />
        <Text ml={4} mb={2}>Fim da Vigência</Text>
        <Input placeholder="De" ml={2} width="30%" />
        <Input placeholder="Até" ml={2} width="30%" />
      </Flex>

      <Text mb={2}>Valor do Contrato</Text>
      <Flex mb={4}>
        <Input placeholder="De" width="30%" />
        <Input placeholder="Até" ml={2} width="30%" />
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

export default FormularioAgendamento;
