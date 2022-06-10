import React from 'react';
import FollowButton from './FollowButton';

class Suggestion extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestion: props.model
        }
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    // refreshSuggestionDataFromServer () {
    //     // re-fetch the post:
    //     const url = '/api/suggestions/'
    //     fetch(url, {
    //         headers: getHeaders()
    //     }).then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({
    //             suggestion: data
    //         })
    //     })
    // }

    render () {
        const suggestion = this.state.suggestion;
        return (
            <section>
                <img 
                    className="pic" 
                    alt={"profile pic for " + suggestion.username}
                    src={suggestion.image_url}/>
                <div>
                    <p>{suggestion.username}</p>
                    <p>suggested for you</p>
                </div>
                <div>
                    {/* <button className="link following">follow</button> */}
                    
                    <FollowButton
                        user_id={suggestion.id}
                        username={suggestion.username}
                        refreshSuggestion={this.props.refresh}/>
                </div>
            </section>
        )
    }
}

export default Suggestion;