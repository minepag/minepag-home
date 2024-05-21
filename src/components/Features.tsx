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
              Após as configurações da loja e do plugin, tudo irá funcionar sozinho. Os pagamentos e entregas são
              processados sem interação humana, garantindo a eficiência e a tranquilidade para você se concentrar no que
              realmente importa - seu servidor.
            </Feature>

            <Feature title="Suporte">
              Nossa equipe de suporte especializada está sempre disponível para ajudá-lo com qualquer dúvida ou
              problema. Com vasta experiência e conhecimento em Minecraft e monetização de servidores, estamos aqui para
              garantir que sua operação funcione de maneira suave e eficiente.
            </Feature>

            <Feature title="Plugin integrado">
              Nosso plugin integrado facilita a configuração e o gerenciamento de sua loja. Projetado para ser fácil de
              usar, mas incrivelmente poderoso, você pode personalizar sua loja para se adequar às suas necessidades
              específicas, garantindo que sua loja seja tão única quanto seu servidor.
            </Feature>

            <Feature title="Auto-Hospedado">
              Com a opção de auto-hospedagem, você tem total controle sobre seus dados e operações. Isso proporciona
              maior segurança e flexibilidade, permitindo que você gerencie sua loja exatamente da maneira que deseja,
              com a tranquilidade de saber que seus dados estão seguros.
            </Feature>
          </Stack>
        </FadeInWhenVisible>
      </Container>
    </Box>
  );
}
