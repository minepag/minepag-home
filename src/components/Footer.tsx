import { Box, Text, VStack } from '@chakra-ui/react';
import { Container } from './Container';

export default function Footer() {
  return (
    <Box bg="#F9FAFB" pt={20}>
      <Container maxW="6xl" py={12}>
        <VStack spacing={2} align="start">
          <Text fontSize="sm" color="gray.600">
            &copy; 2025 MinePag. Todos os direitos reservados.
          </Text>
          <Text fontSize="xs" color="gray.500">
            MINEPAG NEGÓCIOS DIGITAIS LTDA - CNPJ: 60.789.049/0001-05
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
