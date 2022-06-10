import React from 'react';
import Post from './Post';
import Comments from './Comments';
import {getHeaders} from './utils';
import Header from './Header';
import ModalComments from './ModalComments';

class Modal extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: props.model,
            
            }

        
    }
    componentDidMount() {
        // fetch posts and then set the state..
       
    }
    
    render () {
        if (this.props.isOpen) {
           
        console.log ('modal is open');
        return (
            < div className ="modal-bg" aria-hidden="false" role="dialog">
                <section className="modal">
                    <button className="close" aria-label="Close the modal window" onClick= {this.props.closeModal} > <i className="fas fa-times"> </i></button>
                    <div className="modal-body">
                            <img src={ this.state.post.image_url } alt="image posted by " />
                        <div className = "side-bar"> 
                        <Header                     
                        username = {this.state.post.user.username}
                        imageUrl = {this.state.post.user.image_url}/>
                        
                            <div className = "all_comments ">
                               <ModalComments comments={this.state.post.comments}/>
                        
                                    
                            </div>
                        </div>
                    </div>
             
                 
                </section>
            </div>
        )
    }
        else {
            console.log("something went wrong");
         return null
        }

}
}
export default Modal;
