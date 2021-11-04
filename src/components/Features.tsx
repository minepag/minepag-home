import React from 'react';
import { Box, Stack, Text, Heading } from '@chakra-ui/react';
import { Container } from './Container';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export default function Features() {
  const Feature = (props: any) => {
    return (
      <Box>
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color="gray.900"
        >
          {props.title}
        </Heading>
        <Text mt={2} color="gray.500">
          {props.children}
        </Text>
      </Box>
    );
  };

  return (
    <Box bg="#F9FAFB" pt={20}>
      <Container maxW="6xl">
        <Box textAlign={{ lg: 'center' }}>
          <FadeInWhenVisible>
            <Text
              color="brand.600"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Recursos
            </Text>
          </FadeInWhenVisible>

          <FadeInWhenVisible delayOrder={2}>
            <Heading
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
            >
              A melhor maneira de monetizar seu servidor
            </Heading>

            <Text mt={4} fontSize="xl" mx={{ lg: 'auto' }} color="gray.500">
              Gerencie sua loja online sem complicações.
            </Text>
          </FadeInWhenVisible>
        </Box>

        <FadeInWhenVisible delayOrder={3}>
          <Stack
            mt={10}
            display={{ md: 'grid' }}
            gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
            gridColumnGap={{ md: 32 }}
            gridRowGap={{ md: 8 }}
          >
            <Feature title="Totalmente automático">
              Após as configurações da loja e do plugin, tudo irá funcionar
              sozinho. Os pagamentos e entregas são processados sem interação
              humana.
            </Feature>

            <Feature title="Suporte">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </Feature>

            <Feature title="Plugin integrado">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </Feature>

            <Feature title="Auto-Hospedado">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </Feature>
          </Stack>
        </FadeInWhenVisible>
      </Container>
    </Box>
  );
}
