import React, { Component } from 'react';

const BasicInfo = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Date of Birth: {props.dateOfBirth}</p>
            <p>Phone Number: {props.phoneNumber}</p>
        </div>
    )
}

export default BasicInfo;