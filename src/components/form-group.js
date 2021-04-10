import React from 'react';

function FormGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <input type={props.inputType}
                className="form-control"
                id={props.htmlFor}
                name={props.name}
                aria-describedby={props.htmlFor} 
                placeholder={props.placeHolder}
                onChange={props.onChange}
                value={props.value}/>
        </div>
    )
}

export default FormGroup