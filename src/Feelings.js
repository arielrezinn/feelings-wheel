import React from 'react';
import { Box, Button, Card, Footer, Text } from 'grommet';
import { FEELINGS } from './feelingsData';

class Feelings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feelings: {},
      selectedFeelings: {}
    };
  }
  getFeelings() {
    let eventKeyCount = 1;
    let feelingCards = [];

    for (const feeling of Object.keys(FEELINGS)) {
      feelingCards.push(
        <Card

          onClick={ }
        />
      )
      eventKeyCount++;
    }
    return (
      <Accordion>
        {courses}
      </Accordion>
    )
  }

  render() {
    return (
      <Box>
        <Text>Test Text</Text>
      </Box>
    )
  }
}

export default Feelings;
