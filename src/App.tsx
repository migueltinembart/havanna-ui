import { Grid, GridItem } from '@chakra-ui/react';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

// https://chakra-ui.com/docs/styled-system/style-props
function App(): JSX.Element {
  return (
    <div className="bg-orange-100">
      <Grid
        templateAreas={`"Menu main Profile"
        `}
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'2fr 11fr 1fr'}
        h={'calc(100vh)'}
        gap={'2'}
        fontWeight={'bold'}
        p={4}
      >
        <GridItem area={'Menu'}>
          <Menu></Menu>
        </GridItem>
        <GridItem bg="green.400" area={'main'} m={'0'}>
          Body
        </GridItem>
        <GridItem area={'Profile'}>
          <Profile></Profile>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
