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
                <div><h3>Episode {element.episode}</h3>
                <video controls src={element.srcvideo} type='video/mp4'  width='900px' height='400px'>
                </video></div>
                : <div><h3>Episode {element.episode}</h3><p>" Indisponible pour le moment "</p></div>);
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