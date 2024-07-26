import Card from "./Card"
import Message from "./Message"
import Vasanth from "./Vasanth"
import "./App.css"
function App() {
  return (
    <div>
      <Card location="World" place="Chennai"/>
      <Card location="Earth"/>
      <Card location="Mars"/>
      <Card location="Moon"/>
      <Card location="Sun"/>
      <Card place="Jupiter"/>
    </div>
  )
}

export default App

// Rules
// Rule 1 : Component File Name & Function Name should always start with          Capital  Letter also it should be same
// Rule 2 : Component is nothing but a function
// Rule 3 : Component should always Return some HTML element
// Rule 4 : Component should always return only one thing
// Rule 5 : One file must contain only one component
// Rule 6 : Always export the Componet