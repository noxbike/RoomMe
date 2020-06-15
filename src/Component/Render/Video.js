import  React, { Component } from 'react';
import { episodelist } from '../data/listVideo';

export default class Video extends Component{
    constructor(props){
        super(props);
        this.movie = this.props.id;
        this.state = { episode: 1, movieId: this.movie}
    }

    selectEpisode = () =>{
        const { movieId, episode } = this.state;
        for(let element of episodelist){
            if(element.id === movieId && element.episode === episode){
                return(element.srcvideo ? 
                <video controls src={element.srcvideo} width='100%' height='100%'/>
                : <p>" Prochainement sur la plateforme "</p>);
            }
        }
    }

    render(){
        const { movieId } = this.state;
        return(
            <div id='movie'>
                <div className='lecteur-video'>
                {this.selectEpisode()}
                </div>
                <ul className='episode'>
                    {
                        episodelist.map((element) => 
                        element.id === movieId ? 
                        <li onClick={() => this.setState({episode: element.episode})}>
                            <img src={element.src} alt={element.episode}/>
                            <span>Episode {element.episode}</span>
                        </li> : null )
                    }
                </ul>
            </div>
        );
    }
}