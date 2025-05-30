import { Badge, Box, Heading, Image, Text } from '@chakra-ui/react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

const Hero = () => {
  return (
    <Box px={4} pt="24" mx="auto">
      <Box w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }} textAlign={{ base: 'left', md: 'center' }} mx="auto">
        <FadeInWhenVisible delayOrder="1">
          <Badge colorScheme="orange" fontSize="sm" px={3} py={1} mb={4} borderRadius="full">
            🚧 Em Desenvolvimento
          </Badge>
          <Heading
            as="h1"
            mb={3}
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight={{ base: 'bold', md: 'extrabold' }}
            color="gray.900"
            lineHeight="shorter"
          >
            Venda. Escale. Prospere.
          </Heading>
        </FadeInWhenVisible>

        <FadeInWhenVisible delayOrder="2">
          <Text mb={6} fontSize={{ base: 'lg', md: 'xl' }} color="gray.500">
            A plataforma completa para produtores de conteúdo digital e prestadores de serviços online
          </Text>
        </FadeInWhenVisible>

        <FadeInWhenVisible delayOrder="3">
          <Image
            w="full"
            roundedTop="lg"
            shadow="2xl"
            htmlWidth={1920}
            htmlHeight={902}
            src="assets/images/minepag-dashboard.png"
            alt="Captura de tela do painel de MinePag"
          />
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
};

export default Hero;
