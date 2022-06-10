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
        const url = '/api/following';
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
        const url = '/api/following/' + this.state.following_id;
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
        // REPLACE bookmarkId WITH CONDITIONAL ON WHETHER BUTTON SHOULD BE 
        // FOLLOW OR UNFOLLOW
        const classn = this.state.following_id ? 'follow' : 'unfollow';
        const text = this.state.following_id ? 'Unfollow' : 'Follow';


  
       
    return (
        <button 
            className= {classn}
            onClick= {this.toggleFollow}>
            {text}
        </button>
    )
}
}

export default FollowButton;
