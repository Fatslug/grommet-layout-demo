import React, { Component } from 'react';
import { Box, Button, FormField, TextInput, Text } from 'grommet';

class BoxGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    }
  }

  onChange = (e) => {
    const newValue = e.target.value;
    let error;
    let message;

    if (newValue > 20) {
      error = true;
      message = 'Keep it between 1 and 20.';
    } else if (!parseInt(newValue) && newValue.length > 0) {
      error = true;
      message = 'Must be a number.';
    } else {
      let boxArray = [];
      for (let i = 0; i < newValue; i++) {
        boxArray.push({ height: 'small', width: 'small' })
      }
    }

    this.setState({
      error: error,
      message: message,
      value: newValue
    });

    if (!error) {
      this.props.onBoxChange(newValue);
    }
  }

  randomizeBoxSizes = () => {

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
            <TextInput size='medium' textAlign='center' value={this.state.value.toString()} onChange={this.onChange} />
          </FormField>
          <Button label="Randomize Box Sizes" onClick={this.randomizeBoxSizes} />
          {errorEl}
        </Box>
      </form>
    )
  }
}

export { BoxGenerator };