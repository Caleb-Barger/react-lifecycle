import React from 'react';

import data from './data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    console.log("Constructor")
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount(){
    console.log("Component has mounted")
    this.setState({pokemon: data})

    // window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(){
    console.log("Component has updated")
  }

  // componentWillUnmount(){
  //   window.removeEventListener('resize', this.handleResize)
  // }

  // handleResize = () => {console.log("RESIZING THE WINDOW")}

  render() {
    console.log("Component has rendered")
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
