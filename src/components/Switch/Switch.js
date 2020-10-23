import React from 'react';
import './Switch.css';

const Switch = () => {
    const handleChange = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            document.body.classList.remove('is-light')
            document.body.classList.add('is-dark')
        } else {
            document.body.classList.remove('is-dark')
            document.body.classList.add('is-light')
        }
    }
    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input onChange={handleChange} type="checkbox" className="checkbox" id="checkbox" />
            <label className="switch" htmlFor="checkbox"></label>
        </div>
)
}

export default Switch;