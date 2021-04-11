import React from 'react'

const FormInput = ({
    label,
    handleChange,
    ...otherProps
}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/> {label
            ? (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''}`}
                    >
                    {label}
                </label>
            )
            : null
}
    </div>
)