import { Box, Center, Image } from '@chakra-ui/react';

export default function Profile(): JSX.Element {
  return (
    <Box borderLeft={'1px'} borderColor={'gray.500'} m={0} h={'full'}>
      <Center py={10}>
        <Image
          src="/src/assets/profile/Profile-pic.jpg"
          borderRadius={'full'}
          h={'6rem'}
        ></Image>
      </Center>
    </Box>
  );
}
