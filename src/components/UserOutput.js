import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>The props coming down from App.js: { props.userName }</h3>   
            <h4>{ props.children }</h4>         
            <p>This is first paragraph</p>
            <p>this is second paragraph</p>
            <p>this is third paragraph</p>
        </div>
    )};

export default UserOutput;