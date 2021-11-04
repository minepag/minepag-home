import React from 'react';
import { Box, Stack, Image, Text, Flex, Heading, Link } from '@chakra-ui/react';

const CTA = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} px={8} pb={24} mx="auto">
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: '3xl', sm: '4xl' }}
          fontWeight="extrabold"
          lineHeight="shorter"
          mb={6}
        >
          Pronto para iniciar?
          <Text as="span" display="block" color="orange.500">
            Comece seu teste gratuito hoje.
          </Text>
        </Heading>

        <Text mb={6} fontSize={{ base: 'lg', md: 'xl' }}>
          Hellonext is a feature voting software where you can allow your users
          to vote on features, publish roadmap, and complete your customer
          feedback loop.
        </Text>

        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <Link
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
            >
              Sign up for free
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: 'full', md: 10 / 12 }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Flex>
  );
};

export default CTA;
