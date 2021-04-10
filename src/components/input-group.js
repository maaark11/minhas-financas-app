import React from 'react';

function InputGroup(props) {
    return (
        <div class="input-group mb-3">
            <span className="input-group-text" id={props.htmlFor}>
                {props.label}
            </span>
            <input type={props.inputType}
                className="form-control"
                id={props.htmlFor}
                aria-describedby={props.htmlFor}
                placeholder={props.placeHolder}
                aria-label={props.placeHolder}/>
        </div> 
    )
}

export default InputGroup