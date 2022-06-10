import React from 'react';
import {getHeaders} from './utils';

class BookmarkButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        // not intuitive. helps disambiguate between what 'this' is
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.createBookmark = this.createBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleBookmark () {
        // console.log(this.props.BookmarkId)
        if (this.props.bookmarkId) {
            console.log('bye');
            this.removeBookmark();
        } else {
            console.log('hi');
            this.createBookmark();
        }
    }

    createBookmark () {
        // fetch POST: /api/posts/likes
        const url = '/api/bookmarks';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create bookmark:', url);
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

    removeBookmark () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = '/api/bookmarks/' + this.props.bookmarkId;
        console.log('remove bookmark:', url);
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
        const bookmarkId = this.props.bookmarkId;
        if (bookmarkId) {
            return (
                <button 
                    role="switch"
                    className="bookmark"
                    aria-checked="true"
                    onClick={this.toggleBookmark}
                    aria-label="Bookmark Button">
                    <i className='fas fa-bookmark'></i>
                </button>
            )
        } else {
            return (
                <button 
                    role="switch"
                    className="bookmark"
                    aria-checked="false"
                    onClick={this.toggleBookmark}
                    aria-label="Bookmark Button">
                    <i className='far fa-bookmark'></i>
                </button>
            )
        }
    }
}

export default BookmarkButton;
