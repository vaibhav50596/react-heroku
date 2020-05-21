import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
    }

    //For Inline styling..use camelCasing for css properties!!!
    const buttonStyle = {
        padding: '5px',
        marginLeft: '10px',
        border: '2px solid green'
    }

    const divStyle = {
        border: '2px solid black',
        backgroundColor: '#ccc',
        width: '60%',
        padding: '16px',
        margin: 'auto',
        marginTop: '15px'
    }

    return (
        <div style={divStyle}>
            <h3>This is two-way binding!</h3>
            <input type="text" value = { props.currentValue } onChange={ props.changeUN } style={inputStyle}/>
            <button onClick = { props.handleClickUN } style={buttonStyle}> push IT</button>
        </div>
    )};

export default UserInput;