import React from 'react';

class ModalComments extends React.Component {
  
    constructor(props) {
        super(props);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            this.props.comments.map(comment => {
                return (
                <div className="comment">
                    <img src={comment.user.thumb_url}  alt="profile pic for {comment.user.username }" />
        
                    <div className = "text">
                        <p><strong>{comment.user.username }</strong>{comment.text}</p>
        
                        <h6 className="date"> {comment.display_time} </h6>
        
                   </div>
                </div>
                )
            })
        )


     
}}

export default ModalComments;