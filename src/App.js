import React, {useState} from "react"
import ReactMarkdown from 'react-markdown'
import './App.scss';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  // Declare useState
const [markdown, setMarkdown] = useState(placeholder)

  return (
    <div className="App">
        <div className="container">
          {/* Set text area for the user's input */}
          <textarea id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          >
          </textarea>
          {/* Show user input */}
          
          <article id="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
    </div>
  );
}

export default App;