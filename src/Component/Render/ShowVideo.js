import React, { Component } from 'react';
import { genre, listvideo } from '../data/listVideo';
import InfoVideo from './InfoVideo.js';

export default class ShowVideo extends Component{
    constructor(props) {
        super(props);
        this.genre = genre;
        this.videoList = listvideo;
    }

    affichage = () => {
        return(
          this.genre.map((element) =>
            <div>
              <div>{element}</div>
              <ul>
                {this.videoList.map((video) => video.genre === element ? <li><img src={video.src} alt={video.titre}/></li> : '')}
              </ul>
            </div>  
          )
        );
    }

    render(){
        return(
            <div>
              <InfoVideo/>
              <div>
                  {this.affichage()}
              </div>
            </div>
        );
    }
}