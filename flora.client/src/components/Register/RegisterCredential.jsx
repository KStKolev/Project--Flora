/* eslint-disable react/prop-types */
import '/src/stylesheet/Register/RegisterCredential.css';
import { nanoid } from 'nanoid';

export default function RegisterCredential(props) {
    const inputId = nanoid();


    return (
        <>
            <div className="registerInput">
                <label htmlFor={inputId}>{props.label}</label>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    id={inputId}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                />
                {props.error && <p className="errorMessage">{props.error}</p>}
            </div>
        </>
    );
}