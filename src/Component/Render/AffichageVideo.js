import React, { Component } from 'react';
import AutoCompleteText from './AutoCompleteText';
import Filter from './Filter';

export default class AffichageVideo extends Component{
    constructor(props){
        super(props);
        this.state = { categorie: 'all', selectGenre: 'all', selectDate: 'all'}
    }

    handleChangeGenreOrDate = (value, selecteur) =>{
        switch(selecteur){
            case 'selectDate':
                this.setState({selectDate: value,})
            break;
            case 'selectGenre':
                this.setState({selectGenre: value,})
            break;
            default:
                this.setState({categorie: value,})
        }
    }

    conditionTrie = (video, select) =>{
        let { categorie, selectGenre, selectDate } = this.state;
        if(select === 'categorie'){
            let categ = categorie !== 'all' ? categorie === video.categorie : true;
            return categ;
        }
        let date = selectDate !== 'all' ? selectDate === video.date : true;
        let genre = selectGenre !== 'all' ? selectGenre === video.genre : true;
        return (genre && date);
    }

    trieFilm = () => {
        let tab = [];
        this.props.videoList.map((video) => this.conditionTrie(video, 'categorie') ?
            tab.push(video) : null
        )
        return(tab);
    }

    renderFilm = () => {
        let list = this.trieFilm();
        return(
            list.map((video) => this.conditionTrie(video, null) ?
                <li onClick={() => this.props.movieclicked(video.id)} key={video.id}>
                    <img src={video.src} alt={video.titre}/>
                    <span className='genre'>{video.genre}</span>
                    <span className='date'>{video.date}</span>
                </li> : null
            )
        );
    }

    render(){
        let { selectGenre, selectDate } = this.state;
        return(
            <div className='list-film'>
                <div className='filter'>
                    <Filter 
                    selectDate = {selectDate}
                    selectGenre = {selectGenre}
                    handleChangeGenreOrDate={this.handleChangeGenreOrDate}
                    trieFilm = {this.trieFilm()}
                    />
                    <AutoCompleteText/>
                </div>
                <ul>
                    {this.renderFilm()}
                </ul>
            </div>
        );
    }
}