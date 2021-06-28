import React from "react";

import BrandRecognitionLogo from "../../assests/images/icon-brand-recognition.svg";
import DetailedRecordsLogo from "../../assests/images/icon-detailed-records.svg";
import FullyCustomizableLogo from "../../assests/images/icon-fully-customizable.svg";

import './Card.scss';
const Card = () => {
  let cardData = [
    {
      image: BrandRecognitionLogo,
      title: "Brand Recognition",
      paragraph:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      image: DetailedRecordsLogo,
      title: "Detailed Records",
      paragraph:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      image: FullyCustomizableLogo,
      title: "Fully Customizable",
      paragraph:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className="card">
      {cardData.map((card) => (
        <div className="card__container" key={card.title}>
          <img src={card.image} alt={card.image} className="card__logo"></img>

          <h4 className="card__title">{card.title}</h4>

          <p className="card__paragraph">{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
