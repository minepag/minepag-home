import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { Container } from './Container';
import { FadeInWhenVisible } from './FadeInWhenVisible';

const Feature: FC<PropsWithChildren> = props => {
  return (
    <Flex align="center">
      <Flex shrink={0}>
        <Icon boxSize={5} mt={1} mr={2} color="brand.500" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <Text as="span" mt={2} color="gray.500">
          {props.children}
        </Text>
      </Box>
    </Flex>
  );
};

export default function Component() {
  return (
    <>
      <Box textAlign={{ md: 'center' }} bg="gray.100" pb={6}>
        <Container>
          <FadeInWhenVisible delayOrder={1}>
            <Heading
              as="h2"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize={{ base: '1xl', sm: '2xl' }}
            >
              Pronto para começar?
            </Heading>

            <Text
              mb="6"
              fontSize={{ base: '3xl', sm: '4xl' }}
              display="block"
              bgGradient="linear(to-r, orange.400, orange.800)"
              bgClip="text"
              fontWeight="bold"
            >
              Pague apenas pelo que vender.
            </Text>
          </FadeInWhenVisible>
        </Container>
      </Box>

      <Box bgGradient={`linear(to-b, gray.100 50%, white 50%)`}>
        <FadeInWhenVisible delayOrder={2}>
          <Container>
            <Flex
              rounded="md"
              mx={{ lg: 10 }}
              bg="white"
              shadow="xl"
              mb="100px"
              textAlign="left"
              direction={{ base: 'column', lg: 'row' }}
            >
              <Stack spacing={8} p={{ base: '7', lg: '10' }} flex="0.7">
                <Text fontSize="3xl" fontWeight="bold">
                  Taxa por Transação
                </Text>

                <Text fontSize={['sm', 'sm', 'md']} color="gray.600">
                  Modelo justo e transparente: você só paga quando vende. Sem mensalidades, sem taxas fixas, sem
                  surpresas.
                </Text>

                <Flex align="center">
                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="brand.400"
                  >
                    TUDO INCLUÍDO
                  </Text>
                  <Flex ml="15px" w="full" borderTopWidth="1px" h="3px" borderTopColor="gray.100" />
                </Flex>
                <SimpleGrid columns={[1, 1, 2, 1, 2]} spacingY={4}>
                  <Feature>Site White Label</Feature>
                  <Feature>Checkout Otimizado</Feature>
                  <Feature>Domínio Personalizado</Feature>
                  <Feature>API para Integrações</Feature>
                  <Feature>Relatórios Completos</Feature>
                  <Feature>Suporte Especializado</Feature>
                </SimpleGrid>
              </Stack>

              <Stack
                p={{ base: '7', lg: '10' }}
                flex="0.3"
                justify="center"
                align="center"
                bg="#F9FAFB"
                borderRightRadius="md"
              >
                <Box w="full" lineHeight="none">
                  <Text fontSize="sm" letterSpacing="-0.14px">
                    Desde a sua primeira venda
                  </Text>
                  <HStack mt={4} align="center" spacing={2} display={['flex', 'flex', 'flex', 'grid', 'flex']}>
                    <Text as="strong" display="block" fontSize="5xl" fontWeight="bold">
                      6.99%
                    </Text>
                    <Text as="span" fontSize="xl" letterSpacing="-0.18px" color="gray.500" fontWeight="medium">
                      + R$ 1,99
                    </Text>
                  </HStack>
                  <Text as="small" fontSize="xs" opacity={0.8} mt={['1', '1', '1', '2', '1']} display="block">
                    por transação aprovada
                  </Text>
                </Box>

                <Box mt="4" w="full" fontSize="sm">
                  <Text mb={2}>Tempo de saque:</Text>

                  <List spacing={2}>
                    <ListItem display="flex" alignItems="center" fontSize="sm">
                      <ListIcon as={CheckIcon} color="#00DA70" w={3} h={2.5} mr={3} />
                      PIX em até 2 dias
                    </ListItem>
                    <ListItem display="flex" alignItems="center" fontSize="sm">
                      <ListIcon as={CheckIcon} color="#00DA70" w={3} h={2.5} mr={3} />
                      Cartão em até 15 dias
                    </ListItem>
                  </List>
                </Box>

                <Stack mt="4" spacing={6}>
                  <Button w="full" colorScheme="orange" py={6}>
                    Começar agora
                  </Button>
                  <Text fontWeight="medium" color="gray.500" fontSize="sm">
                    Cadastre-se gratuitamente e comece a vender hoje mesmo. Você só paga quando lucrar.
                  </Text>
                </Stack>
              </Stack>
            </Flex>
          </Container>
        </FadeInWhenVisible>
      </Box>
    </>
  );
}
