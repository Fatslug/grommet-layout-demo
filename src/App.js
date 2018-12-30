import React, { Component } from 'react';
import { Grommet, Grid, Box, Button, Text } from 'grommet';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { BoxDemo } from './screens/BoxDemo';
import './App.css';

const theme = {
  global: {
    colors: {
      'brand': '#7D4CDB',
      'accent-1': '#6FFFB0',
      'accent-2': '#FD6FFF',
      'accent-3': '#81FCED',
      'accent-4': '#FFCA58'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  state = { sidebar: true };

  render() {
    const { sidebar } = this.state;
    const navLinks = [
      'Box Demo'
    ]
    return (
      <Grommet theme={theme} full>
        <Grid
          fill={true}
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            height="60px"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
          >
            <Button onClick={() => this.setState({ sidebar: !sidebar })}>
              <Text size="large">Title</Text>
            </Button>
          </Box>
          {sidebar && (
            <Box
              gridArea="sidebar"
              background="dark-3"
              width="small"
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 }
              ]}
            >
              {navLinks.map(name => (
                <Button key={name} href="#" hoverIndicator>
                  <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>{name}</Text>
                  </Box>
                </Button>
              ))}
            </Box>
          )}
          <Box gridArea="main" width='100%' fill>
            <Router>
              <Route path='/' exact component={BoxDemo}></Route>
            </Router>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default App;
