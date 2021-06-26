import React from 'react'

import Button from '../Button/Button'

import './Boost.scss'

const Boost = () => {
    const buttonText = "Get Started"

    return (
        <div className="boost">
            <h3 className="boost__header">Boost your links today</h3>
            <Button buttonText={buttonText} />
        </div>
    )
}

export default Boost
