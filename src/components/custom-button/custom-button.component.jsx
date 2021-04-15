import React from 'react'

import "./custom-button.styles.scss"

const CustomButton = ({children, igGoogleSignIn, ...otherProps}) => (
    <button className={`${igGoogleSignIn ? 'google-sign-in' : ''} 'custom-button'`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton