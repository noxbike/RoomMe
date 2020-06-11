import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';

export default class InfoVideo extends Component{
    constructor(props){
        super(props);
        this.videoList = listvideo;
    }

    renderinfo = () =>{
        /*let result = this.videoList;
        return(
            <div>
                <h1>{result}</h1>
                <p>{result}</p>
            </div>
        );*/
    }
    render(){
        return(
            <div className='infovideo'>
                {this.renderinfo()}
            </div>
        );
    }
}