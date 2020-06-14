import React, { Component } from 'react';
import AutoCompleteText from './Component/Render/AutoCompleteText';
import ShowVideo from './Component/Render/ShowVideo';

export default class App extends Component {
  render(){
    return (
      <div>
          <AutoCompleteText/>
          <ShowVideo/>
      </div>
      
    );
  }
} 