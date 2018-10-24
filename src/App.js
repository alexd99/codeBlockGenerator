import React from "react";
import styled from "styled-components";
import CodeBlock from "./components/CodeBlock";
import CssCodeDisplay from "./components/CssCodeDisplay";
import BlockOptions from "./components/BlockOptions";
import HighlightGlobalStyles from "./components/HighlightGlobalStyles";

const ParentDiv = styled.div`
  width: 50%;
  margin: auto;
`;

class App extends React.Component {
  state = {
    options: {
      addition: "#ffb81c",
      attr: "#ffb81c",
      attribute: "#ffb81c",
      background: "#3a3d40",
      "border-radius": "2px",
      built_in: "#ffb81c",
      "builtin-name": "#ffb81c",
      bullet: "#7de3f4",
      class: "#ffb81c",
      code: "#bed21e",
      comment: "#bdc0c0",
      deletion: "#bdc0c0",
      doctag: "#bdc0c0",
      emphasis: "#a9adad",
      formula: "a9adad",
      function: "#ffb81c",
      keyword: "#ffb81c",
      link: "#7de3f4",
      literal: "#7de3f4",
      meta: "#bdc0c0",
      "meta-keyword": "#bdc0c0",
      "meta-string": "#bdc0c0",
      name: "#ffb81c",
      number: "#7de3f4",
      params: "#878a8c",
      quote: "#7de3f4",
      regexp: "#7de3f4",
      section: "#ffb81c",
      "selector-attr": "#ffb81c",
      "selector-class": "#bed21e",
      "selector-id": "#ffb81c",
      "selector-pseudo": "#ffb81c",
      "selector-tag": "#ffb81c",
      string: "#7de3f4",
      strong: "#a9adad",
      subst: "#ffb81c",
      symbol: "#ffb81c",
      tag: "#ffb81c",
      "template-tag": "#ffb81c",
      "template-variable": "#ffb81c",
      "text-color": "#d0d3d3",
      title: "#ffb81c",
      type: "#ffb81c",
      variable: "#ffb81c"
    }
  };
  render() {
    const { options } = this.state;
    return (
      <ParentDiv>
        <h1>Custom HTML Code Block</h1>
        <HighlightGlobalStyles options={options} />
        <CodeBlock>{`
       <!DOCTYPE html>
       <title>Title</title>
       
       <style>body {width: 500px;}</style>
       
       <script type="application/javascript">
         function $init() {return true;}
       </script>
       
       <body>
         <p checked class="title" id='title'>Title</p>
         <!-- here goes the rest of the page -->
       </body>
        `}</CodeBlock>

        <CssCodeDisplay options={options} />
        <BlockOptions data={options} />
      </ParentDiv>
    );
  }
}

export default App;