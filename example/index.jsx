import React from 'react';
import styled from 'styled-components';
import StringSwapper from "../src/index";

const Showcase = styled.div`
  width: 600px;
  border: 1px solid #CCC;
  border-radius: 5px;
`;

const StyledSpan = styled.span`
  color: maroon;
  word-wrap: break-word;
  font-weight: bold;
`;

class App extends React.Component {

  handleGuidComponent(incomingString) {
    return (<StyledSpan>{"test"}</StyledSpan>);
  }
  render() {
    <Showcase>
      <h1>React StringSwapper examples</h1>
      <StringSwapper 
        incoming={"This is a string with a magic mega-guid in it that we want to obfuscate a little bit. Mega-guid: GUID_b1f8ee218b2a4af18a7aea5c40bbcbf495b293ac65af48ef822518de4fc7169959871711f32a48dbb9811c2727b92b05. After the mega-guid, we have some more information."}
        componentFunction={this.handleGuidComponent}
        matchingTuple={[/GUID[0-9a-f.]/, /[,:;/-/.][ ]|[ ]|[ ][-][ ] /]}
      />
    </Showcase>
  }
}
