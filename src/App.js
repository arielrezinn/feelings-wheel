import React from 'react';
import { Box, Button, Footer, grommet, Grommet, Header, Main, Text } from 'grommet';
import { Moon } from 'grommet-icons';
import Feelings from './Feelings';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <Header justify="center">
        <Button
          a11yTitle="About"
          label="About"
        />
        <Button
          a11yTitle="Toggle Dark Mode"
          icon={<Moon />}
          onClick={() => setDarkMode(!darkMode)}
        />
      </Header>
      <Box pad="large">
        <Feelings />
      </Box>
    </Grommet >
  );
}

export default App;
