import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';

export default class InfoVideo extends Component{
    constructor(props){
        super(props);
        this.videoList = listvideo;
        this.taille = this.videoList.length - 1;
    }

    handleclick = (event) =>{
        this.setState({ taille: event});
    }
    
    renderinfo = () =>{
        var result = this.videoList[this.taille];
        return(
            <div style={{ backgroundImage: `url(${result.src})` }}>
                <h1>{result.titre}</h1>
                <p>{result.synopsis}</p>
                <a href='#'>Regarder</a>    
            </div>
        )
    }
    render(){
        return(
            <div className='infovideo'>
                {this.renderinfo()}
            </div>
        );
    }
}