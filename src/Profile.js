import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <header>
                <img alt="profile pic of current user" src={this.props.imageUrl} className="pic"/>
                <h1>{this.props.username}</h1>
            </header>
        )
    }
}

export default Profile;