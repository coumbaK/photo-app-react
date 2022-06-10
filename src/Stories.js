import React from 'react';
import {getHeaders} from './utils';

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            stories: []
        }
        this.getStoriesFromServer();
    }

    getStoriesFromServer () {
        fetch('/api/stories', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {

            this.setState({
                stories: data
            })
        })
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <header className="stories">  
            {
                this.state.stories.map(story => {
                
                    return (
                        <div key={'story_' + story.id}>
                            <img 
                                className="pic" 
                                alt={"profile pic for " + story.user.username}
                                src={story.user.image_url}/>
                            <p>{story.user.username}</p>
                        </div>
                    )
                })
            }  
            </header>
        )
    }
}

export default Stories;
