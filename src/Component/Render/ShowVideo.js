import React, { Component } from 'react';
import { genre, listvideo, episode } from '../data/listVideo';
import InfoVideo from './InfoVideo';
import Video from './Video';

export default class ShowVideo extends Component{
  constructor(props) {
      super(props);
      this.genre = genre;
      this.videoList = listvideo;
      this.state = { taille : listvideo.length - 1, episode: 0, };
  }
  
  renderinfo = () =>{
      var result =  this.videoList[this.state.taille];
      return(
        <div>
          <div className='infovideo'>
            <InfoVideo {...result}/>
          </div>
          <div className='btn-regarder'>
            <a onClick={() => this.setState({ episode: result.id})} href='#'>regarder</a>
          </div>
        </div>
      );
  }

  affichage = () => {
    if(this.state.episode > 0){
      return(
        <Video id={this.state.episode}/>
      );
    }
    else{
      return(
        <div>
          {this.renderinfo()}
          <div className='list-film'>
            {this.genre.map((element) =>
              <div>
                <div>{element}</div>
                <ul>
                  {this.videoList.map((video) => video.genre === element ? <li onClick={() => this.setState({ taille: video.id - 1})} key={video.id}><img src={video.src} alt={video.titre}/></li> : '')}
                </ul>
              </div>  
            )}
          </div>
        </div>
      );
    }
  }

  render(){
    return( 
      <div>
        {this.affichage()}
      </div>
    );
  }
}