import React, { Component } from 'react';
import { Box, Grid } from 'grommet';
import { BoxDemoForm } from '../forms/BoxDemoForm';
import { BoxGenerator } from '../forms/BoxGenerator';

import boxProps from '../properties/BoxProps';

class BoxDemo extends Component {
  constructor(props) {
    super(props);
    
    let propValues = this.parseValues(boxProps);
    this.state = {
      propValues: propValues,
      boxArray: new Array(10)
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
    const propValues = this.parseValues(e);
    this.setState({
      propValues: propValues
    });
  }

  handleBoxChange = (e) => {
    this.setState({
      numBoxes: e.numBoxes,
      boxSizes: e.boxSizes
    })
  }

  generateBoxes = (boxArray) => {
    let boxes = boxArray;
    let x = 0;
    boxArray.forEach((box, i) => {
      x++;
      if (x > 4) {
        x = 1;
      }

      boxes.push(
        <Box key={'box-'+i} height={box.height || 'small'} width={box.width || 'small'} background={'accent-'+x} align='center' justify='center'>
          Box {i+1}
        </Box>
      )
    });

    return boxes;
  }

  render() {
    let props = {};
    this.state.propValues.forEach((val, key) => {
      const property = Object.keys(val)[0];
      let value = Object.values(val)[0]
      if (value !== '') {
        if (value === 'true') { value = true; }
        if (value === 'false') { value = false; }
        props[property] = value;
      }
    });

    const boxes = this.generateBoxes(this.state.boxArray);

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
        <Box fill={false} gridArea='content' border={{ side: 'all', color: '#333333', size: 'medium' }} {...props} className='dynamicBox'>
          {boxes}
        </Box>
        <Box gridArea='controlbar' fill={false} pad='small'>
          <BoxGenerator onBoxChange={(e) => this.handleBoxChange(e)} />
          <BoxDemoForm boxProps={boxProps} onPropertyChange={(e) => this.handlePropertyChange(e)} />
        </Box>
      </Grid>
    );
  }
}

export { BoxDemo };