import React from 'react';

function Card(props) {
    return (
        <div className="card border-primary">
            <h3 className="card-header">{props.title}</h3>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card