import { useState } from "react";
import { Box, Button, Input, Text, VStack, HStack } from "@chakra-ui/react";

const FileViewer: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPdf, setIsPdf] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    if (
      file.type !== 'application/pdf' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/jpg' &&
      file.type !== 'image/png'
    ) {
      setError('Apenas arquivos PDF, JPG, JPEG ou PNG são aceitos.');
      setTimeout(() => setError(null), 5000);
      return;
    }

    const objectURL = URL.createObjectURL(file);
    setFileUrl(objectURL);
    setFileName(file.name);
    setIsPdf(file.type === 'application/pdf');
  };

  const handleFileUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      handleFileChange(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleReload = () => {
    setFileUrl(null);
    setFileName(null);
    setIsPdf(false);
    setError(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="100%" width="100%">
      <VStack spacing={4} padding={4} width="100%">
        <HStack spacing={4} width="100%" alignItems="center">
          <Button as="label" htmlFor="file-upload" variant="solid" colorScheme="blue">
            Escolher Ficheiro
          </Button>
          <Input
            id="file-upload"
            type="file"
            accept="application/pdf,image/jpeg,image/jpg,image/png"
            onChange={handleFileUploadChange}
            display="none"
          />
          {fileName && (
            <HStack spacing={2} alignItems="center">
              <Text>{fileName}</Text>
              <Button
                aria-label="Recarregar arquivo"
                variant="ghost"
                colorScheme="blue"
                onClick={handleReload}
                p={0}
              >
                🔄 
              </Button>
            </HStack>
          )}
        </HStack>
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
      <Box
        width="100%"
        height="90%"
        overflow="auto"
        border="1px solid gray"
        mt={-2}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
      >
        {fileUrl ? (
          isPdf ? (
            <iframe src={fileUrl} width="100%" height="100%" />
          ) : (
            <img src={fileUrl} alt="Visualização do arquivo" style={{ width: '100%' }} />
          )
        ) : (
          <Text textAlign="center" p={4}>
            Arraste e solte um arquivo aqui ou clique no botão para escolher um arquivo.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default FileViewer;
