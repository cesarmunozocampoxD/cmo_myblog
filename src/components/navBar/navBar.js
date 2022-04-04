import React from 'react';

class navBar extends React.Component{

    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">CMOBLOG</span>
                    </div>
                </nav>
            </div>
        );
    }

}

export default navBar;