import React from 'react';
import {getHeaders} from './utils';
import Post from './Post';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.getPostsFromServer();
    }

    getPostsFromServer () {
        fetch('/api/posts', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            
            this.setState({
                posts: data
            })
        })
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return this.state.posts.length === 0 ?
            (
                <div id="posts">Loading posts...</div>
            )
            :
            (
                <div id="posts">
                    {
                        this.state.posts.map(post => {
                            
                            return (
                                <Post 
                                    key={'post_' + post.id}
                                    model={post}/>
                            )
                        })
                    }
                </div>
            )
    }
}

export default Posts;