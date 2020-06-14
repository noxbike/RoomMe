import React, { Component } from 'react';

export default class InfoVideo extends Component{
    render(){
        return(
            <div className='infovideo'>
              <h4>{this.props.titre}</h4>
              <p>{this.props.synopsis}</p>   
            </div>
        );
    }
}