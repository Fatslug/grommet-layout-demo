import React, { Component } from 'react';
import { Box } from 'grommet';
import { BoxDemoForm } from '../forms/BoxDemoForm';

import boxProps from '../properties/BoxProps';

class BoxDemo extends Component {
  constructor(props) {
    super(props);
    let values = [];
    let propertyArray = Object.keys(boxProps);
    let valueArray = Object.values(boxProps);
    for (let i = 0; i < propertyArray.length; i++) {
      values.push({ [propertyArray[i]]: valueArray[i].default });
    }
    this.state = {
      values: values
    };
  }

  handlePropertyChange = (e) => {
    this.setState({
      values: e
    });
    console.log(this.state.values);
  }

  render() {
    let props = {};
    this.state.values.forEach((val, key) => {
      const property = Object.keys(val)[0];
      let value = Object.values(val)[0]
      if (value !== '') {
        if (value === 'true') { value = true; }
        if (value === 'false') { value = false; }
        props[property] = value;
      }
    });

    return (
      <Box fill>
        <Box border='#F8AC33' {...props} className='dynamicBox'>
          <Box height='small' width='small' background='accent-1'>Test 1</Box>
          <Box height='small' width='small' background='accent-2'>Test 2</Box>
          <Box height='small' width='small' background='accent-3'>Test 3</Box>
          <Box height='small' width='small' background='accent-4'>Test 4</Box>
        </Box>
        <Box pad='large'>
          <BoxDemoForm values={this.state.values} onPropertyChange={(e) => this.handlePropertyChange(e)} />
        </Box>
      </Box>
    );
  }
}

export { BoxDemo };


// align=''
//         alignContent=''
//         alignSelf=''
//         animation='slideRight'
//         background=''
//         basis=''
//         border=''
//         direction=''
//         elevation=''
//         fill=''
//         flex=''
//         gap=''
//         height=''
//         justify=''
//         margin=''
//         overflow=''
//         pad=''
//         responsive=''
//         round=''
//         width=''
//         wrap=''