import { Logo } from '@/components/Logo/Logo';
import { RouteEnum } from '@/config/constants/route';
import { routeData } from '@/data/landing/home/navigation';
import { Button, Container, Flex, Text, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <Link to={href}>
      <Text textStyle={'p4'}>{name}</Text>
    </Link>
  );
}
//    background: linear-gradient(180deg,#c0d8f3,#6da4e3);
export default function Header() {
  return (
    <chakra.nav py={'1.5rem'}>
      <Container fontWeight={'500'} maxW={'94%'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Logo to="/" w={'8rem'} />

          <Flex gap={'1rem'}>
            {routeData.map((item) => (
              <NavItem key={item.href} name={item.name} href={item.href} />
            ))}
          </Flex>

          <Flex gap={'1.5rem'} alignItems={'center'}>
            <Link to={RouteEnum.SIGNUP}>
              <Text textStyle={'p4'} fontWeight={'500'} color={'primary.500'}>
                Sign up
              </Text>
            </Link>
            <Link to={RouteEnum.LOGIN}>
              <Text textStyle={'p4'}>Sign in</Text>
            </Link>
            <Link to={RouteEnum.LOGIN}>
              <Button h={'3rem'} rounded={'12px'}>
                Post a property
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </chakra.nav>
  );
}
