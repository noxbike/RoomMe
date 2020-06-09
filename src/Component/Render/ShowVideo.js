import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';

export default class ShowVideo extends Component{
    constructor(props) {
        super(props);
        this.state = { donner: [], };
    }

    render(){
        return(
            <div>
                {
                    this.state.donner.map((element) => <p key={element.titre}>{element.titre}</p>)
                }
            </div>
        );
    }
}