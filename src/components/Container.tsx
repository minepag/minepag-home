import { ContainerProps, Container as ChakraContainer } from '@chakra-ui/react';

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <ChakraContainer
      px={{ base: 4, md: 8, lg: 12 }}
      maxW={{ md: 'container.md', lg: 'container.lg', xl: 'container.xl' }}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
}
