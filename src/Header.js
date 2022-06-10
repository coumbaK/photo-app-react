import React from 'react';

class Header extends React.Component {
  
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
            <div className = "header">
                <img alt="profile pic of current user" src={this.props.imageUrl} className="pic"/>
                <h2>{this.props.username}</h2>
            </div>
        )
    }
}

export default Header;