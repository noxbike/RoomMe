import React, { Component } from 'react';
import { genre, listvideo } from '../data/listVideo';

export default class ShowVideo extends Component{
  constructor(props) {
      super(props);
      this.genre = genre;
      this.videoList = listvideo;
      this.state = { taille : listvideo.length - 1, };
  }
  
  renderinfo = () =>{
      var result =  this.videoList[this.state.taille];

      return(
          <div style={{ backgroundImage: `url(${result.src})` }}>
              <h1>{result.titre}</h1>
              <p>{result.synopsis}</p>
              <a href='#'>Regarder</a>    
          </div>
      )
  }

  affichage = () => {
    return(
      this.genre.map((element) =>
        <div>
          <div>{element}</div>
          <ul>
            {this.videoList.map((video) => video.genre === element ? <li onClick={() => this.setState({ taille: video.id - 1})}><img src={video.src} alt={video.titre}/></li> : '')}
          </ul>
        </div>  
      )
    );
  }

  render(){
    return(
      <div>
        <div className='infovideo'>
          {this.renderinfo()}
        </div>
        <div>
          {this.affichage()}
        </div>
      </div>
    );
  }
}