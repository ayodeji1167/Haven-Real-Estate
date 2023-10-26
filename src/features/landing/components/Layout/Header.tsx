import { Logo } from '@/components/Logo/Logo';
import { RouteEnum } from '@/config/constants/route';
import { routeData } from '@/data/landing/home/navigation';
import { Button, Flex, Text, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <Link to={href}>
      <Text>{name}</Text>
    </Link>
  );
}
export default function Header() {
  return (
    <chakra.nav>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Logo to="/" />

        <Flex>
          {routeData.map((item) => (
            <NavItem key={item.href} name={item.name} href={item.href} />
          ))}
        </Flex>

        <Flex alignItems={'center'}>
          <Link to={RouteEnum.SIGNUP}>
            <Text>Sign up</Text>
          </Link>
          <Link to={RouteEnum.LOGIN}>
            <Text>Sign in</Text>
          </Link>
          <Link to={RouteEnum.LOGIN}>
            <Button>Post a property</Button>
          </Link>
        </Flex>
      </Flex>
    </chakra.nav>
  );
}
