import React, { Component } from 'react';
import { Box, Grid } from 'grommet';
import { BoxDemoForm } from '../forms/BoxDemoForm';

import boxProps from '../properties/BoxProps';

class BoxDemo extends Component {
  constructor(props) {
    super(props);
    
    let values = this.parseValues(boxProps);
    this.state = {
      values: values
    };
  }

  parseValues = (boxProps) => {
    console.log('Parsing Values:', boxProps);
    let values = [];

    const categoryNames = Object.keys(boxProps);
    const categoryProps = Object.values(boxProps);

    categoryNames.forEach((categoryName, categoryIndex) => {

      const propNames = Object.keys(categoryProps[categoryIndex]);
      const propValues = Object.values(categoryProps[categoryIndex]);

      propNames.forEach((propName, propIndex) => {
        let actualValue;
        if (propValues[propIndex].hasOwnProperty('value')) {
          actualValue = propValues[propIndex].value;
        } else {
          actualValue = propValues[propIndex]
        }
        values.push({ [propName]: actualValue });
      })

    });

    return values;
  }

  handlePropertyChange = (e) => {
    console.log('Property Change:', e);
    const values = this.parseValues(e);
    this.setState({
      values: values
    });
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

    console.log('RENDER Props:', props);

    return (
      <Grid
        fill={false}
        rows={["flex", "auto"]}
        columns={["flex", "auto"]}
        areas={[
          { name: "controlbar", start: [1, 1], end: [1, 1] },
          { name: "content", start: [0, 1], end: [0, 1] }
        ]}
      >
        <Box gridArea='content' border={{ side: 'all', color: '#333333', size: 'medium' }} {...props} className='dynamicBox'>
          <Box height='small' width='small' background='accent-1'>Test 1</Box>
          <Box height='small' width='small' background='accent-2'>Test 2</Box>
          <Box height='small' width='small' background='accent-3'>Test 3</Box>
          <Box height='small' width='small' background='accent-4'>Test 4</Box>
        </Box>
        <Box gridArea='controlbar' pad='small'>
          <BoxDemoForm boxProps={boxProps} onPropertyChange={(e) => this.handlePropertyChange(e)} />
        </Box>
      </Grid>
    );
  }
}

export { BoxDemo };