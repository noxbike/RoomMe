import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';

export default class AffichageVideo extends Component{
    constructor(props){
        super(props);
        this.state = { videoList: listvideo,}
    }

    trieFilm = () => {
        const { videoList } = this.state;

        if(this.props.genre === 'all' && this.props.date === 'all'){
            return(
                videoList.map((video) =>
                    this.renderFilm(video)
                )
            );
        }

        else if(this.props.date > 0 && this.props.genre === 'all'){
            return(
                videoList.map((video) => this.props.date === video.date ?
                    this.renderFilm(video)
                : null )
            );
        }

        else if(this.props.date > 0 && this.props.genre !== 'all'){
            return(
                videoList.map((video) => this.props.genre === video.genre && this.props.date === video.date ?
                    this.renderFilm(video)
                : null )
            );
        }

        else if(this.props.date === 'all' && this.props.genre !== 'all'){
            return(
                videoList.map((video) => this.props.genre === video.genre ?
                    this.renderFilm(video)
                : null )
            );
        }
    }

    renderFilm = (video) => {
        return(
            <li onClick={() => this.props.movieclicked(video.id)} key={video.id}>
                <img src={video.src} alt={video.titre}/>
                <span className='genre'>{video.genre}</span>
                <span className='date'>{video.date}</span>
            </li> 
        );
    }

    render(){
        return(
            <div className='list-film'>
                <div className='filter'>
                    <p>Années :</p>{this.props.dropdownDate}
                    <p>Genres :</p>{this.props.dropdownGenre}
                </div>
                <ul>
                    {this.trieFilm()}
                </ul>
            </div>
        );
    }
}