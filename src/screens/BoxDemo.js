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
    const values = this.parseValues(e);
    this.setState({
      values: values
    });
  }

  generateBoxes = (numBoxes) => {
    let boxes = [];
    let x = 0;
    for (let i = 0; i < numBoxes; i++) {

      x++;
      if (x > 4) {
        x = 1;
      }

      boxes.push(
        <Box key={'box-'+i} height='small' width='small' background={'accent-'+x} align='center' justify='center'>
          Box {i}
        </Box>
      )
    }

    return boxes;
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
          {this.generateBoxes(10)}
        </Box>
        <Box gridArea='controlbar' pad='small'>
          <BoxDemoForm boxProps={boxProps} onPropertyChange={(e) => this.handlePropertyChange(e)} />
        </Box>
      </Grid>
    );
  }
}

export { BoxDemo };