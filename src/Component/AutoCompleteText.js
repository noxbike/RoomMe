import React from 'react';
import { video } from './data/listVideo'

export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props);
        this.items= video();
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
            //ici je dois retourner une vue avec ces catégories
            //créer un nouveau fichier js pour sa
            <ul>
                {this.items.map((item) => <li><img alt='imgplaceholder' src='https://via.placeholder.com/150'/>{item}</li>)}
            </ul>);
        }
        return(
            <ul>
                {suggestions.map((item) => <li><img alt='imgplaceholder' src='https://via.placeholder.com/150'/>{item}</li>)}
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