import React, { Component } from 'react';
import { Accordion, AccordionPanel, Box, FormField, Select, } from 'grommet';
import boxProps from '../properties/BoxProps';

class BoxDemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.values
    };
  }

  handleChange = (index, propertyName, e) => {
    let values = this.state.values;
    values[index] = { [propertyName]: e.value };
    this.setState({
      values: values
    });
    this.props.onPropertyChange(this.state.values);
  }

  buildForm = () => {
    let formElements = [];

    this.state.values.forEach((property, index) => {
      const propertyName = Object.keys(property)[0];
      const propertyValue = Object.values(property)[0];

      formElements.push(
        <FormField label={propertyName} key={index}>
          <Select
            value={propertyValue}
            options={Object.values(boxProps)[index].options}
            onChange={(e) => this.handleChange(index, propertyName, e)}
          />
        </FormField>
      )

    });

    return formElements;
  }

  render() {
    return (
      <form>
        <Accordion animate={true} multiple={false}>
          <AccordionPanel label="Layout Controls">
            <Box background="light-2">
              {this.buildForm()}
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Content Controls">
            <Box background="light-2" style={{ height: "50px" }}>
              Panel 2 contents
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Styling Controls">
            <Box background="light-2" style={{ height: "300px" }}>
              Panel 3 contents
            </Box>
          </AccordionPanel>
        </Accordion>
      </form>
    );
  }
}

export { BoxDemoForm };