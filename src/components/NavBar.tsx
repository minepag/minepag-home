import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Container } from './Container';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container>
      <Flex color="gray.600" minH={{ base: '60px', lg: '80px' }} align="center">
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'space-between' }} align="center">
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily={'heading'}
            color="gray.800"
            fontSize={['2xl', '3xl']}
            fontWeight="bold"
            letterSpacing="tight"
          >
            MinePag
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} justify={{ md: 'flex-end' }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} ms={{ md: 4 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button fontSize={'sm'} fontWeight={600} variant="outline" colorScheme="orange">
            Entrar
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color="gray.600"
            _hover={{
              textDecoration: 'none',
              color: 'gray.800'
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Flex
      py={2}
      as={Link}
      href={href ?? '#'}
      justify={'space-between'}
      align={'center'}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <Text fontWeight={600} color="gray.600">
        {label}
      </Text>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Pricing",
  //   href: "#",
  // },
  // {
  //   label: "Blog",
  //   href: "#",
  // },
  // {
  //   label: "Docs",
  //   href: "#",
  // },
];
