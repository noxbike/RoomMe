import React from 'react';
import { titreVideo } from './data/listVideo'
import ShowVideo from './Render/ShowVideo';
import batman from './jacket/batman.jpg';

export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props);
        this.items= titreVideo;
        this.state = {
            suggestions: [],
        };
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
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return(
            <ShowVideo/>
            );
        }
        return(
            <ul>
                {suggestions.map((item) => <li><img alt='imgplaceholder' src={batman}/></li>)}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onTextChanged} />
                {this.renderSuggestions()}
            </div>
        )
    }
}