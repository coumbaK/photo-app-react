import React from 'react';
import {getHeaders} from './utils';

class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        // not intuitive. helps disambiguate between what 'this' is

        // this.toggleFollow = this.toggleFollow.bind(this);
        this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.state = {following_id: null};
        
        

    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }


     toggleFollow () {
         
        if (this.state.following_id) {
         this.unfollowUser();
     } else {
            this.followUser();
       }

        
    }

  


    followUser () {
        const url = 'https://photo-app-secured.herokuapp.com/following';
        const userData = {
            user_id: this.props.user_id
        }
        console.log('create follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            this.setState({following_id: data.id});
            console.log(data);
        })     
    }

    unfollowUser () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = 'https://photo-app-secured.herokuapp.com/following/' + this.state.following_id;
        console.log('remove follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
             this.setState({following_id: ''});
            console.log(data);
        })
    }

    render () { 
    if (this.state.following_id) {
        return (
            <button
                role="switch"
                className= "link following active"
                aria-checked="true"
                aria-label={"follow " + this.props.username}
                onClick={this.unfollowUser}>
            unfollow
            </button>
        )
    } else {
        return (
            <button
                role="switch"
                className= "link following"
                aria-checked="false"
                aria-label={"follow " + this.props.username}
                onClick={this.followUser}>
            follow
            </button>
        )
    }
}
}

export default FollowButton;
