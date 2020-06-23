import React, { Component } from 'react';
import { listvideo } from '../data/listVideo';
import AffichageVideo from './AffichageVideo';
import Video from './Video';

export default class FilterVideo extends Component{
  constructor(props) {
      super(props);
      this.state = { movieId: -1 };
  }

  btnPrevious = () => {
    let { movieId } = this.state;
    if(movieId > -1){
      return(
        <span className='previous' onClick={ () => this.setState({movieId: -1})}>
            <i class="fas fa-chevron-left fa"></i>
        </span>
      );
    }
  }

  movieClicked = (result) =>{
    this.setState({ movieId: result })
  }

  affichage = () => {
    let { movieId } = this.state;
    if(movieId > 0){
      return(
        <Video 
          id        = { movieId } 
          listvideo = { listvideo }
        />
      );
    }
    return(
      <AffichageVideo 
        movieclicked     = { this.movieClicked }
        handleChangeList = { this.handleChangeList }
        videoList        = { listvideo }
      />   
    );
  }

  render(){
    return( 
        <div className='showVideo'>
          { this.btnPrevious() }
          { this.affichage() }
        </div>
    );
  }
}