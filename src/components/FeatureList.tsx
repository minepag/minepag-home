import { Box, Flex, Heading, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { Container } from './Container';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export default function FeatureList() {
  const Feature: FC<PropsWithChildren> = props => {
    return (
      <Flex>
        <Icon boxSize={5} mt={1} mr={2} color="orange.500" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>

        <Text fontSize="lg" color="gray.700">
          {props.children}
        </Text>
      </Flex>
    );
  };

  return (
    <Container maxW="6xl">
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
        spacingY={{ base: 10, lg: 32 }}
        spacingX={{ base: 10, lg: 24 }}
      >
        <FadeInWhenVisible delayOrder={1}>
          <VStack direction="column" flexGrow={1} spacing={5} alignItems="start">
            <Feature>Domínio personalizado</Feature>
            <Feature>Design customizável</Feature>
            <Feature>99.9% de disponibilidade</Feature>
            <Feature>Múltiplos usuários</Feature>
            <Feature>Analytics completo (LTV, Churn)</Feature>
            <Feature>Upsell/Cross-sell automatizado</Feature>
            <Feature>Notificações em tempo real</Feature>
            <Feature>API robusta para integrações</Feature>
            <Feature>Suporte especializado</Feature>
          </VStack>
        </FadeInWhenVisible>

        <Box>
          <FadeInWhenVisible delayOrder={1}>
            <Heading
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
            >
              Tecnologia enterprise para seu negócio digital
            </Heading>
          </FadeInWhenVisible>

          <FadeInWhenVisible delayOrder={2}>
            <Text mt={4} fontSize="xl" mx={{ lg: 'auto' }} color="gray.600">
              Criamos uma plataforma completa para produtores de conteúdo, coaches, consultores e empreendedores
              digitais. Tudo que você precisa para vender online está aqui.
            </Text>
          </FadeInWhenVisible>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
