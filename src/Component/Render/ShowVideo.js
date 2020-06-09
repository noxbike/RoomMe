import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';

export default class ShowVideo extends Component{
    constructor(props) {
        super(props);
        this.state = { donner: [], };
    }

    listAfficher(props){
        var affichage = [];
        listvideo.map((element) =>
        props.resarch === element.titre ? affichage.push(element.titre): false
        )
        console.log(affichage);
        this.setState({ donner: affichage });
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