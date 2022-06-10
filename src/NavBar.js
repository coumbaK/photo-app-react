import React from 'react';

class NavBar extends React.Component {
  
    constructor(props) {
        super(props);
        console.log('NavBar props:', props);
        // initialization code here
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>
                    <li>
                        <a href="/api">API Docs</a>
                    </li>
                    <li>
                        <span>{this.props.username}</span>
                    </li>
                    <li>
                        <a href="/logout">Sign out</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;