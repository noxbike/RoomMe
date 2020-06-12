import  React, { Component } from 'react';
import { episode } from '../data/listVideo';

export default class Video extends Component{
    render(){
        return(
            <ul className='episode'>
                {
                    episode.map((element) => 
                    element.id === this.props.id ? 
                    <li><img src={element.src} alt={element.titre}/></li>:'' )
                }
            </ul>
        );
    }
}