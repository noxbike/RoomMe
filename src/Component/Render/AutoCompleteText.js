import React from 'react';

export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props);
        this.items     = this.titreVideo();
        this.videoList = this.props.videoList;
        this.state     = { suggestions: [] };
    }

    titreVideo = () => {
        let tab = [];
        this.props.videoList.map((video) => 
            tab.push(video.titre)
        )
        return(tab);
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions }));
    }

    renderSuggestions(){
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return( null );
        }
        return(
            <ul className='suggestion'>
                {
                    suggestions.map((item) => 
                        this.videoList.map((element) => 
                            item === element.titre ? 
                                <li key={ element.titre } onClick={ () => this.props.movieclicked(element.id) }>
                                    <img src={ element.src } alt={ element.titre }/>
                                    <div>
                                        <p className='titre'>{ element.titre }</p>
                                    </div>
                                </li> 
                            : null
                        )
                    )
                }
            </ul>
        );
    }

    render(){
        return(
            <div>
                <div className='AutoCompleteText'> 
                    <input type='text' placeholder='Search...' onChange={this.onTextChanged} />
                </div>
                { this.renderSuggestions() }
            </div>
        )
    }
}