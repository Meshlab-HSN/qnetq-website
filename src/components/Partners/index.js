import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import React from 'react';
import { useDynamicClass } from './useDynamicClass';

const PartnerList = [
  {
    image: '/img/hsn-logo-color.png',
    alt: "Nordhausen University of Applied Sciences",
    description: (
      <>
        Nordhausen University of Applied Sciences
      </>
    ),
  },
  {
    image: '/img/iof_logo_small.png',
    alt: "Fraunhofer Institute for Applied Optics and Precision Engineering",
    description: (
      <>
        Fraunhofer Institute for Applied Optics and Precision Engineering
      </>
    ),
  },
  {
    image: '/img/hhi_logo.png',
    alt: "Fraunhofer Institute for Telecommunications, Heinrich-Hertz-Institut",
    description: (
      <>
        Fraunhofer Institute for Telecommunications, Heinrich-Hertz-Institut
      </>
    ),
  },
  {
    image: '/img/tub_logo.png',
    alt: "Technical University of Berlin",
    description: (
      <>
        Technical University of Berlin
      </>
    ),
  },
  {
    image: '/img/tum_logo.png',
    alt: "Technical University of Munich",
    description: (
      <>
        Technical University of Munich
      </>
    ),
  },
  {
    image: '/img/de-cix_logo_.png',
    alt: "DE-CIX Management GmbH",
    description: (
      <>
        DE-CIX Management GmbH
      </>
    ),
  },
  {
    image: '/img/fau_logo_small.jpg',
    alt: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    description: (
      <>
        Friedrich-Alexander-Universität Erlangen-Nürnberg 
      </>
    ),
  },
];

function Partner({image, alt, description}) {
  const dynamicClass = useDynamicClass();
  return (
    <div className={clsx('col', dynamicClass)}>
      <div className='feature_cont'>
        <div className="upper text--center">
          <img src={image} className={styles.featureImage} alt={alt} />
        </div>
        <div className="lower text--center padding-horiz--md">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1 style={{paddingLeft: 20}}>Partners</h1>
        </div>
        <div className="row">
          {PartnerList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
