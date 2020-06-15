import React from 'react';
import { titreVideo, listvideo } from '../data/listVideo';
import FilterVideo from './FilterVideo';
import Video from './Video';

export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props);
        this.items= titreVideo;
        this.state = { suggestions: [], movieId: -1};
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions}));
    }

    renderSuggestions(){
        const { suggestions, movieId } = this.state;
        if(suggestions.length === 0){
            return(
                movieId > 0 ? <Video id={movieId}/> : <FilterVideo/>
            );
        }

        return(
            <ul className='suggestion'>
                {suggestions.map((item) => 
                    listvideo.map((element) => 
                        item === element.titre ? 
                            <li key={element.titre} onClick={() => this.setState({suggestions: [], movieId: element.id})}>
                                <img src={element.src} alt={element.titre}/>
                                <span className='titre'>{element.titre}</span>
                            </li> : null)
                )}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <div className='AutoCompleteText'> 
                    <input type='text' placeholder='Search...' onChange={this.onTextChanged} />
                </div>
                {this.renderSuggestions()}
            </div>
        )
    }
}