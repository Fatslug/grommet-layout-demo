import React, { Component } from 'react';
import { Box, Button, FormField, TextInput, Text } from 'grommet';

class BoxGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numBoxes: 10,
      boxArray: []
    }
  }

  onChange = (e) => {
    const newValue = e.target.value;
    let error;
    let message;
    let boxArray = [];

    if (newValue > 20) {
      error = true;
      message = 'Keep it between 1 and 20.';
    } else if (!parseInt(newValue) && newValue.length > 0) {
      error = true;
      message = 'Must be a number.';
    } else {
      for (let i = 0; i < newValue; i++) {
        boxArray.push({ height: 'small', width: 'small' })
      }
    }

    this.setState({
      error: error,
      message: message,
      numBoxes: newValue,
      boxArray: boxArray
    });

    if (!error) {
      this.props.onBoxChange(boxArray);
    }
  }

  randomizeBoxSizes = () => {
    const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
    const max = 4;
    const min = 0;

    let boxArray = [];
    for (let i = 0; i < this.state.numBoxes; i++) {
      // const randHeight = Math.floor(Math.random() * (+max - +min)) + +min;
      const randWidth = Math.floor(Math.random() * (+max - +min)) + +min;
      boxArray.push({ width: sizes[randWidth] });
    }

    this.setState({
      boxArray: boxArray
    })

    this.props.onBoxChange(boxArray);
  }

  resetBoxSizes = () => {
    let boxArray = [];
    for (let i = 0; i < 10; i++) {
      boxArray.push({ width: 'small' });
    }

    this.setState({
      boxArray: boxArray,
      numBoxes: 10
    })

    this.props.onBoxChange(boxArray);
  }

  render() {
    let errorEl = '';
    if (this.state.error) {
      errorEl = (
        <Text color='status-error' size='small' textAlign='center'>{this.state.message}</Text>
      );
    }
    return(
      <form>
        <Box margin='medium'>
          <FormField label='Number of boxes'>
            <TextInput size='medium' textAlign='center' value={this.state.numBoxes.toString()} onChange={this.onChange} />
          </FormField>
          <Button margin='xsmall' label="Randomize Box Sizes" onClick={this.randomizeBoxSizes} />
          <Button margin='xsmall' primary label="Reset Boxes" onClick={this.resetBoxSizes} />
          {errorEl}
        </Box>
      </form>
    )
  }
}

export { BoxGenerator };