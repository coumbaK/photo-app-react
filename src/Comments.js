import React from 'react';

class Comments extends React.Component {
  
    constructor(props) {
        super(props);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        const lastComment = this.props.comments[this.props.comments.length - 1]
        const openModal = this.props.openModal;
        
        if (this.props.comments.length > 1  ) {
            return (
                <div className="comments">
                    <button className="link" onClick = {this.props.openModal} >View all {this.props.comments.length} comments</button>
                    <div key={'comment_' + lastComment.id}>
                        <p>
                        <strong>{lastComment.user.username}</strong>
                        {lastComment.text}
                        </p>
                    </div>
                </div>
            )
        } else if (this.props.comments.length === 1 ) {
            return (
                <div className="comments">
                    <div key={'comment_' + lastComment.id}>
                        <p>
                        <strong>{lastComment.user.username}</strong>
                        {lastComment.text}
                        </p>
                    </div>
                </div>
            )
        } 
        

        else  {
            return null
        }
    }
}

export default Comments;