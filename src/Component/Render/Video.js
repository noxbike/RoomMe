import  React, { Component } from 'react';
import { episodelist } from '../data/listVideo';

export default class Video extends Component{
    constructor(props){
        super(props);
        this.movie = this.props.id;
        this.list = this.props.listvideo;
        this.state = { episode: 1, movieId: this.movie}
    }

    selectEpisode = () =>{
        const { movieId, episode } = this.state;
        for(let element of episodelist){
            let condition = typeof element.episode !== 'number' && typeof episode !== 'string' ? element.episode : episode;
            if(element.id === movieId && element.episode === condition){
                return(element.srcvideo ? 
                <div>
                    <video controls src={element.srcvideo} type='video/mp4'  width='70%' height='70%'>
                    </video>
                </div>
                : <div>
                    <h3>Episode {element.episode}</h3>
                    <p>" Indisponible pour le moment "</p>
                </div>);
            }
        }
    }

    synopsysRender = () => {
        let { movieId } = this.state;
        return(
            this.list.map((element) => element.id === movieId ? 
            <div>
                <h3 className='titreFilmSelected'>{element.titre}</h3>
                <div className='synopsys'>
                    <img src={element.src} alt={element.id}/>
                    <div>
                        <span>Synopsys :</span>
                        <p>{element.synopsys}</p> 
                    </div>   
                </div>
            </div> : null)
        );
    }

    render(){
        const { movieId } = this.state;
        return(
            <div>
                <div id='movie'>
                    <div className='lecteur-video'>
                    {this.selectEpisode()}
                    </div>
                    <div className='episode'>
                        <ul>
                            <li>Episodes</li>
                            {
                                episodelist.map((element) => 
                                element.id === movieId ? 
                                <li onClick={ () => this.setState({episode: element.episode}) }>
                                    <a href='#'>{ typeof element.episode === 'number' ? `Episode ${element.episode}` : element.episode }</a>
                                </li> : null )
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    {this.synopsysRender()}
                </div>
            </div>
        );
    }
}