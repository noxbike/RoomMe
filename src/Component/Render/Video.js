import  React, { Component } from 'react';
import { episode } from '../data/listVideo';
import InfoVideo from './InfoVideo';

export default class Video extends Component{
    constructor(props){
        super(props);
        this.movie = this.props.id;
        this.state = { video: 1,}
    }

    selectEpisode = () =>{
        let result;
        for(let element of episode){
            if(element.id === this.movie && element.episode === this.state.video){
                if(element.srcvideo){
                    result = <video controls='true' src={element.srcvideo} width='100%' height='100%'></video>;
                }
                else{
                    result = <p>nothing</p>;
                }
            }
        }

        return(result);
    }

    render(){
        return(
            <div id='movie'>
                <div className='infovideo'>
                {this.selectEpisode()}
                </div>
                <ul className='episode'>
                    {
                        episode.map((element) => 
                        element.id === this.movie ? 
                        <li onClick={() => this.setState({video: element.episode})}>
                            <img src={element.src} alt={element.episode}/>
                            <strong>episode {element.episode}</strong>
                        </li> : '' )
                    }
                </ul>
            </div>
        );
    }
}