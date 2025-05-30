import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { Container } from './Container';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export default function Features() {
  const Feature: FC<PropsWithChildren<{ title: string }>> = props => {
    return (
      <Box>
        <Heading as="h3" fontSize="lg" fontWeight="medium" lineHeight="6" color="gray.900">
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
            <Text color="brand.600" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
              Recursos
            </Text>
          </FadeInWhenVisible>

          <FadeInWhenVisible delayOrder={2}>
            <Heading
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
            >
              A melhor maneira de monetizar seu conteúdo digital
            </Heading>

            <Text mt={4} fontSize="xl" mx={{ lg: 'auto' }} color="gray.500">
              Venda seus produtos e serviços com a tecnologia que você merece.
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
            <Feature title="Checkout Otimizado">
              Sistema de pagamento inteligente com taxa de conversão otimizada. Aceite PIX e cartão de crédito com
              processamento automático e entrega instantânea de produtos digitais.
            </Feature>

            <Feature title="Sites White Label">
              Cada cliente recebe um site personalizado com seu próprio domínio. Design profissional, responsivo e
              totalmente customizável para refletir sua marca única.
            </Feature>

            <Feature title="Gestão Completa">
              Painel administrativo completo para gerenciar produtos, vendas, clientes e métricas. Tudo centralizado em
              uma interface intuitiva e poderosa.
            </Feature>

            <Feature title="Automação Total">
              Após a configuração inicial, tudo funciona automaticamente. Vendas, entregas e acompanhamento de métricas
              sem intervenção manual.
            </Feature>
          </Stack>
        </FadeInWhenVisible>
      </Container>
    </Box>
  );
}
