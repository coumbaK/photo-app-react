import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment';
import {getHeaders} from './utils';

class Post extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: props.model
        }
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    refreshPostDataFromServer () {
        // re-fetch the post:
        const url = '/https://photo-app-secured.herokuapp.com//posts/' + this.state.post.id;
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log("BYEEEE");
            console.log(data);
            this.setState({
                post: data
            })
 

        })
    }

    render () {
        const post = this.state.post;
        return (
            <section className="card">
                <div className="header">
                    <h3>{post.user.username}</h3>
                </div>
                <img 
                    alt={"image posted by " + post.user.username}
                    src={post.image_url}/>
                <div className="info">
                    <div className="buttons">
                        <div>
                            <LikeButton 
                                likeId={post.current_user_like_id}
                                postId={post.id}
                                refreshPost={this.refreshPostDataFromServer}/>
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        <BookmarkButton 
                            bookmarkId={post.current_user_bookmark_id}
                            postId={post.id}
                            refreshPost={this.refreshPostDataFromServer}/>
                    </div>
                    <p className="likes"><strong>{post.likes.length} likes</strong></p>
                    <div className="caption">
                        <p>
                            <strong>{post.user.username}</strong>
                        {post.caption}</p>
                    </div>
                    {/* /* <div className="comments">
                        <div>
                            <p>
                                <strong>comments</strong>
                                sdkfjdsklf
                            </p>
                        </div>
                    </div> */ }
                    <p className="timestamp">{post.display_time}</p>
                    <AddComment
                        postId={post.id}
                        refreshPost={this.refreshPostDataFromServer}/>
                        
                    
                </div>
            </section>
        )
    }
}

export default Post;