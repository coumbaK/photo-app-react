import React from 'react';
import {getHeaders} from './utils';
import Suggestion from './Suggestion';

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestions: []
        }
        this.getSuggestionsFromServer = this.getSuggestionsFromServer.bind(this);
        this.getSuggestionsFromServer();
        this.refresh = this.refresh.bind(this);
    }

    getSuggestionsFromServer () {
        fetch('/api/suggestions', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            this.setState({
                suggestions: data

            })
            console.log(data);

        })
    }
    refresh () {
        this.getSuggestionsFromServer();
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {

        return this.state.suggestions.length === 0 ?
        (
            <div >Loading suggestions...</div>
        )
        :
        (
            <div className="suggestions">
                <p className="suggestion-text">Suggestions for you</p>
                {
                    this.state.suggestions.map(suggestion => {
                  
                        return (
                            <Suggestion 
                                key={'suggestion_' + suggestion.id}
                                model={suggestion}
                                refresh={this.refresh}/>


                                
                        )
                    })
                }
            </div>
        )
    }
}

export default Suggestions;