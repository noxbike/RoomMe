import React, { Component } from 'react';
import { listvideo} from '../data/listVideo';
import AffichageVideo from './AffichageVideo';
import Video from './Video';

export default class FilterVideo extends Component{
  constructor(props) {
      super(props);
      this.state = { movieId: -1 };
  }

  movieClicked = (result) =>{
    this.setState({movieId: result})
  }

  affichage = () => {
    let { movieId } = this.state;
    if(movieId > 0){
      return(
        <Video id={movieId}/>
      );
    }
    return(
      <AffichageVideo 
        movieclicked = {this.movieClicked}
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