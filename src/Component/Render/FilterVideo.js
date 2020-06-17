import React, { Component } from 'react';
import { genre, date, listvideo } from '../data/listVideo';
import AffichageVideo from './AffichageVideo';
import Video from './Video';

export default class FilterVideo extends Component{
  constructor(props) {
      super(props);
      this.date = date;
      this.genre = genre;
      this.state = { selectGenre: 'all', videoList: listvideo, movieId: -1, selectDate: 'all' };
  }

  dropdownDate = () =>{
    let { selectDate } = this.state;
    return( 
      <div>
        <select value={selectDate} onChange={(e) => this.setState({selectDate: e.target.value})} id="date">
          <option value='all'>Date</option>
          {this.date.map((date) =>
            <option key={date} value={date}>{date}</option>
          )}
        </select>
      </div>
    );
  }

  dropdownGenre = () =>{
    let { selectGenre } = this.state;
    return( 
      <div>
        <select value={selectGenre} onChange={(e) => this.setState({selectGenre: e.target.value})} id="genre">
          <option value='all'>Genres</option>
          {this.genre.map((genre) =>
            <option key={genre} value={genre}>{genre}</option>
          )}
        </select>
      </div>
    );
  }

  movieClicked = (result) =>{
    this.setState({movieId: result})
  }

  affichage = () => {
    let { selectGenre, movieId, selectDate} = this.state;
    if(movieId > 0){
      return(
        <Video id={movieId}/>
      );
    }
    return(
      <AffichageVideo 
        dropdownDate = {this.dropdownDate()}
        date = {selectDate}
        movieclicked = {this.movieClicked} 
        dropdownGenre = {this.dropdownGenre()} 
        genre = {selectGenre}
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