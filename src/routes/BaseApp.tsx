import { Suspense, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { scrollToTop } from '@/utils/scroll-to-top';
import { LogoLoader } from '@/components/Elements/Loader/Loader';

export default function BaseApp() {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <Suspense
      fallback={
        <Box h={'100vh'}>
          <LogoLoader text="Loading..." />
        </Box>
      }
    >
      <Outlet />
    </Suspense>
  );
}
