import React, { Component } from 'react';

export default class InfoVideo extends Component{
    render(){
        return(
            <div style={{ backgroundImage: `url(${this.props.src})` }}>
              <h4>{this.props.titre}</h4>
              <p>{this.props.synopsis}</p>   
            </div>
        );
    }
}