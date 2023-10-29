import { Box, Center, Text, useDisclosure } from '@chakra-ui/react';
import { ReactNode, useRef, useEffect } from 'react';
import { ReactComponent as ArrowDown } from '@/assets/icons/arrow-down.svg';

interface DropdownProps {
  header: string | ReactNode;
  content: ReactNode;
  name: string;
}

export function DropDown({ name, header, content }: DropdownProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const buttonRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Box ref={buttonRef} position={'relative'}>
      <Center
        h={'2.8rem'}
        w={'9rem'}
        rounded="12px"
        border="1px solid"
        borderColor={'gray.100'}
        bg={'white'}
        gap={'1rem'}
        cursor={'pointer'}
        onMouseDown={onToggle}
        userSelect={'none'}
        boxShadow={'none'}
      >
        <Text color={'gray.700'}>{name}</Text>
        <ArrowDown />
      </Center>
      {isOpen && (
        <Box
          bg={'white'}
          w={'13.8rem'}
          top={'4rem'}
          zIndex={-1}
          pt={'1rem'}
          position={'absolute'}
          rounded={'4px'}
          boxShadow="0px 16px 32px 0px rgba(17, 17, 17, 0.11)"
        >
          <Box>{header}</Box>
          <Box>{content}</Box>
        </Box>
      )}
    </Box>
  );
}
