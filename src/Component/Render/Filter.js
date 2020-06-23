import React, { Component } from 'react';

const categorie = [ 'Movies', 'Series', 'Animation' ];

export default class Filter extends Component{
    dropdownRender = () => {
        let dropdown = [
            {id: 'date', select: 'selectDate', selected: this.props.selectDate, storage: this.trie('date')},
            {id: 'genre', select: 'selectGenre', selected: this.props.selectGenre, storage: this.trie('genre')}
        ]
        return (
          dropdown.map((element) =>
          <div>
            <select value={ element.selected } onChange={ (e) => this.props.handleChangeState(e.target.value, element.select) } id={ element.id }>
              <option value='all'>{ element.id }</option>
              { element.storage.map((store) =>
                <option key={ store } value={ store }>{ store }</option>
              )}
            </select>
          </div>
        ))
    }

    trie = (object) => {
        let result = [];
        this.props.trieByCategorie.map((element) => result.push(element[object]))
        return Array.from(new Set(result));
    }

    categorieRender = () => {
        return(
            categorie.map((element) => 
            <li onClick={ () => this.props.handleChangeState(element, 'categorie') }>{ element }</li>)
        );
    }
      
    render(){
        return(
            <div className='left'>
                <ul className='categorie'>
                    { this.categorieRender() }
                </ul>
                <div className='dropdown'>
                    { this.dropdownRender() }
                </div>
            </div>
        );
    }
}