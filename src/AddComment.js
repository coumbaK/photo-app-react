import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);

    }
    focusTextInput() {
        this.textInput.current.focus();
      }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault(); 
        const url = '/api/comments';
        const postData = {
            post_id: this.props.postId,
            text: this.state.value
        }
        console.log('create comment:', url);
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
        this.setState({value: ''});
    
      }

    

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <form className="add-comment" onSubmit={this.handleSubmit}>
            <div className="input-holder">
                <input 
                    type="text"
                    className="comment-textbox" 
                    placeholder="Add a comment..." 
                    aria-label="Add a comment"
                    value={this.state.value} 
                    onChange={this.handleChange}
                    ref={this.textInput}
                    >

                </input>
            </div>
            <button 
                className="link"
                type="submit" 
                value="Submit" 
                onClick={this.focusTextInput} 
                aria-label="Submit Comment"
                onKeyDown={this.handleKeyDown}>

                 Post</button>
        </form>
        )
    }
}

export default AddComment;