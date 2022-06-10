import React from 'react';
import {getHeaders} from './utils';

class LikeButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        // not intuitive. helps disambiguate between what 'this' is
        this.toggleLike = this.toggleLike.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleLike () {
        console.log(this.props.likeId)
        if (this.props.likeId) {
            console.log('bye');
            this.removeLike();
        } else {
            console.log('hi');
            this.createLike();
        }
    }

    createLike () {
        // fetch POST: /api/posts/likes
        const url = '/api/posts/likes';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create like:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log(data);
            this.props.refreshPost();
        })
    }

    removeLike () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = '/api/posts/likes/' + this.props.likeId;
        console.log('remove like:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log(data);
            this.props.refreshPost();
        })
    }

    render () {
        const likeId = this.props.likeId;
        if (likeId) {
            return (
                <button 
                    role="switch"
                    className= "like"
                    onClick={this.toggleLike}
                    aria-label="Like Button"
                    aria-checked="true">
                    <i className='fas fa-heart'></i>
                </button>
            )
        } else {
            return (
                <button 
                    role="switch"
                    className= "like"
                    onClick={this.toggleLike}
                    aria-label="Like Button"
                    aria-checked="false">
                    <i className='far fa-heart'></i>
                </button>
            )
        }
    }
}

export default LikeButton;
