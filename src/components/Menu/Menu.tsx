import { Button, Box, Center, Container, Text, Flex } from '@chakra-ui/react';
import { SiMicrosoftteams, SiMicrosoftsharepoint } from 'react-icons/si';
import { TbSettingsAutomation } from 'react-icons/tb';

export default function Menu(): JSX.Element {
  return (
    <Box>
      <Center py={10}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="70px"
          height="70px"
        >
          <path d="M 11.984375 4 A 1.0001 1.0001 0 0 0 11.292969 4.2929688 L 3.2929688 12.292969 A 1.0001 1.0001 0 0 0 3 13 L 3 36 A 1.0001 1.0001 0 0 0 3.2929688 36.707031 L 13.292969 46.707031 A 1.0001 1.0001 0 0 0 15 46 L 15 25.414062 L 24.292969 34.707031 A 1.0001 1.0001 0 0 0 25.707031 34.707031 L 35 25.414062 L 35 46 A 1.0001 1.0001 0 0 0 36.707031 46.707031 L 46.707031 36.707031 A 1.0001 1.0001 0 0 0 47 36 L 47 13 A 1.0001 1.0001 0 0 0 46.707031 12.292969 L 38.707031 4.2929688 A 1.0001 1.0001 0 0 0 37.292969 4.2929688 L 25 16.585938 L 12.707031 4.2929688 A 1.0001 1.0001 0 0 0 11.984375 4 z M 12 6.4140625 L 24 18.414062 L 24 31.585938 L 5.4140625 13 L 12 6.4140625 z M 38 6.4140625 L 44.585938 13 L 26 31.585938 L 26 18.414062 L 38 6.4140625 z M 5 15.414062 L 13 23.414062 L 13 43.585938 L 5 35.585938 L 5 15.414062 z M 45 15.414062 L 45 35.585938 L 37 43.585938 L 37 23.414062 L 45 15.414062 z" />
        </svg>
      </Center>
      <Container py={5} gap={5} display={'flex'} flexDirection={'column'}>
        <Button
          w={'full'}
          justifyContent={'start'}
          gap={3}
          borderRadius={'none'}
          bg={'#cabdab'}
          _hover={{ bg: '#948c80' }}
          leftIcon={<SiMicrosoftteams size={'2em'} />}
        >
          <Text fontSize={'18px'}>Teams</Text>
        </Button>
        <Button
          w={'full'}
          justifyContent={'start'}
          gap={3}
          borderRadius={'none'}
          bg={'#cabdab'}
          _hover={{ bg: '#948c80' }}
          leftIcon={<SiMicrosoftsharepoint size={'2em'} />}
        >
          <Text fontSize={'18px'}>Sharepoint</Text>
        </Button>
        <Button
          w={'full'}
          justifyContent={'start'}
          gap={3}
          borderRadius={'none'}
          bg={'#cabdab'}
          _hover={{ bg: '#948c80' }}
          leftIcon={<TbSettingsAutomation size={'2em'} />}
        >
          <Text fontSize={'18px'}>Power Automate</Text>
        </Button>
      </Container>
    </Box>
  );
}
