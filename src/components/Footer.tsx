import React from 'react';
import { Box } from '@chakra-ui/react';
import { Container } from './Container';

export default function Footer() {
  return (
    <Box bg="#F9FAFB" pt={20}>
      <Container maxW="6xl" py={12}>
        <Box>© 2023 MinePag.Todos os direitos reservados.</Box>
      </Container>
    </Box>
  );
}
