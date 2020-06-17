import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';
import AutoCompleteText from './AutoCompleteText';

export default class AffichageVideo extends Component{
    constructor(props){
        super(props);
        this.state = { videoList: listvideo }
    }

    conditionTrie = (video) =>{

        if(this.props.date !== 'all' && this.props.genre === 'all'){
            return(this.props.date === video.date);
        }

        else if(this.props.date !== 'all' && this.props.genre !== 'all'){
            return(this.props.genre === video.genre && this.props.date === video.date);
        }

        else if(this.props.date === 'all' && this.props.genre !== 'all'){
            return(this.props.genre === video.genre);
        }
        return true;
    }

    trieFilm = () => {
        const { videoList } = this.state;
        return(
            videoList.map((video) => this.conditionTrie(video) ?
                this.renderFilm(video)
            : null )
        );
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
                    <div className='left'>
                        <ul className='categorie'>
                            <li>Movies</li>
                            <li>Séries</li>
                            <li>Animations</li>
                        </ul>
                        <div className='dropdown'>
                            {this.props.dropdownDate}
                            {this.props.dropdownGenre}
                        </div>
                    </div>
                    <AutoCompleteText/>
                </div>
                <ul>
                    {this.trieFilm()}
                </ul>
            </div>
        );
    }
}