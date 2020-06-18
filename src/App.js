import React, { Component } from 'react';
import FilterVideo from './Component/Render/FilterVideo';
import Navbar from './Component/Render/Navbar';

export default class App extends Component {
  render(){
    return (
      <div className='app-component'>
          <Navbar/>
          <FilterVideo/>
      </div>
      
    );
  }
} 