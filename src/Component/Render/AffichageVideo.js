import React, { Component } from 'react';
import AutoCompleteText from './AutoCompleteText';

export default class AffichageVideo extends Component{
    constructor(props){
        super(props);
        this.state = { categorie: 'all',}
    }

    conditionTrie = (video) =>{
        let { categorie } = this.state;
        let categ = categorie !== 'all' ? categorie === video.categorie : true;
        let date = this.props.date !== 'all' ? this.props.date === video.date : true;
        let genre = this.props.genre !== 'all' ? this.props.genre === video.genre : true;
        return (genre && date && categ);
    }

    trieFilm = () => {
        let list = [];
        this.props.videoList.map((video) => this.conditionTrie(video)?
            list.push(video)
        :null )
        this.props.handleChangeList(list);
        return(
            list.map((video) => 
                this.renderFilm(video)
            )
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
                            <li onClick={() => this.setState({categorie: 'movie'})}>Movies</li>
                            <li onClick={() => this.setState({categorie: 'serie'})}>Séries</li>
                            <li onClick={() => this.setState({categorie: 'animation'})}>Animations</li>
                        </ul>
                        <div className='dropdown'>
                            {this.props.dropdown}
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