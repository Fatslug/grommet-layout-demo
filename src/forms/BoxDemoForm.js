import React, { Component } from 'react';
import { Accordion, AccordionPanel, Box, FormField, Select, } from 'grommet';

class BoxDemoForm extends Component {
  constructor(props) {
    super(props);
    const parsedValues = this.parseStructuredValues(this.props.boxProps);

    this.state = {
      values: parsedValues
    };
  }

  parseStructuredValues = (boxProps) => {
    let values = {};

    const categoryNames = Object.keys(boxProps);
    const categoryProps = Object.values(boxProps);

    categoryNames.forEach((categoryName, categoryIndex) => {
      values[categoryName] = {};

      const propNames = Object.keys(categoryProps[categoryIndex]);
      const propValues = Object.values(categoryProps[categoryIndex]);

      propNames.forEach((propName, propIndex) => {
        let actualValue;
        if (propValues[propIndex].hasOwnProperty('value')) {
          actualValue = propValues[propIndex].value;
        } else {
          actualValue = propValues[propIndex]
        }

        values[categoryName][propName] = { value: actualValue };
      })

    });

    return values;
  }

  handleChange = (formType, propertyName, e) => {
    console.log('CHANGE:', formType, propertyName, e.value);
    let currentState = this.state.values;
    currentState[formType][propertyName].value = e.value;

    this.setState(currentState);
    this.props.onPropertyChange(this.state.values);
  }

  buildForm = (formType) => {
    let formElements = [];
    const propertyNames = Object.keys(this.props.boxProps[formType]);

    propertyNames.forEach((propertyName, index) => {
      const inputOptions = Object.values(this.props.boxProps[formType])[index].options;
      formElements.push(
        <FormField label={propertyName} key={index}>
          <Select
            value={this.state.values[formType][propertyName].value}
            options={inputOptions}
            onChange={(e) => this.handleChange(formType, propertyName, e)}
          />
        </FormField>
      )
    })

    return formElements;
  }

  render() {
    return (
      <form>
        <Accordion animate={true} multiple={false}>
          <AccordionPanel label="Content Controls">
            <Box background="light-2">
              {this.buildForm('content')}
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Styling Controls">
            <Box background="light-2">
              {this.buildForm('styling')}
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Box Model Controls">
            <Box background="light-2">
              {this.buildForm('boxModel')}
            </Box>
          </AccordionPanel>
        </Accordion>
      </form>
    );
  }
}

export { BoxDemoForm };