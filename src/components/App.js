import React, { Component } from 'react'
import Header from './Bootstrap/Header';

const InsideAppComponent = (props) => {
  return (
    <>
    <p>Hello, this is an InsideAppComponent component, trying to use props</p>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
} 

// created using emmet command 'rcc'
class App extends Component {
  state = {
    dark: false
  }
  render() {
    return (
      <div className='App'>
        <Header dark={this.state.dark} >
          Sample React Project!!!
        </Header>
        <p>Test text Render</p>
        <InsideAppComponent attr1="Attribute1" attr2="Attribute2">
        </InsideAppComponent>
      </div>
    )
  }
}

export default App;
