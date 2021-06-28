import React from 'react';

import Button from '../Button/Button';

import IllustrationImage from '../../assests/images/illustration-working.svg';

import './Header.scss';
const Header = () => {
    const buttonText = "Get Started";


    return (
        <header className="header__container">
            <div className="header__left-section">
                <h1 className="header__heading">
                    More than just shorter links
                </h1>

                <p className="header__paragraph">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>

                <Button buttonText={buttonText} />
            </div>
            <div className="header__right-section">
                <img src={IllustrationImage} alt={IllustrationImage} className="header__image"></img>
            </div>
        </header>
    )
}

export default Header
