import React, { Component } from 'react';
import { genre, date, listvideo} from '../data/listVideo';
import AffichageVideo from './AffichageVideo';
import Video from './Video';

export default class FilterVideo extends Component{
  constructor(props) {
      super(props);
      this.genre = genre;
      this.date = date;
      this.state = { selectGenre: 'all', movieId: -1, selectDate: 'all', videoList: [], date: [], genre: [] };
  }

  dropdown = () =>{
    let { selectGenre, selectDate } = this.state;
    let dropdown = [
      {id: 'date', value: selectDate, select: 'selectDate', storage: date},
      {id: 'genre', value: selectGenre, select: 'selectGenre', storage: genre}
    ];
    return (
      dropdown.map((element) =>
      <div>
        <select value={element.value} onChange={(e) => this.handleChangeGenreOrDate(e.target.value, element.select)} id={element.id}>
          <option value='all'>{element.id}</option>
          {element.storage.map((store) =>
            <option key={store} value={store}>{store}</option>
          )}
        </select>
      </div>
    ))
  }

  handleChangeList = (list) => {
    let { videoList } = this.state;
    videoList.push(list);
  }

  handleChangeGenreOrDate = (value, selecteur) =>{
    selecteur === 'selectDate' ? this.setState({selectDate: value,}) : this.setState({selectGenre: value,})
  }

  movieClicked = (result) =>{
    this.setState({movieId: result})
  }

  affichage = () => {
    let { selectGenre, movieId, selectDate, videoList} = this.state;
    if(movieId > 0){
      return(
        <Video id={movieId}/>
      );
    }
    return(
      <AffichageVideo 
        dropdown = {this.dropdown()}
        date = {selectDate}
        movieclicked = {this.movieClicked} 
        genre = {selectGenre}
        handleChangeList={this.handleChangeList}
        videoList = {listvideo}
        />   
    );
  }

  render(){

    return( 
        <div className='showVideo'>
          {this.affichage()}
        </div>
    );
  }
}