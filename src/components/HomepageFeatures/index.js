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

function Feature({image, alt, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1 style={{paddingLeft: 20}}>Partners</h1>
        </div>
        <div className="row">
          {PartnerList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           <div className={clsx('col col--1')}></div>
//           <div className={clsx('col')}>
//             <div className="text--center">
//               <img role="img" src="img/topology_overview.png"/>
//             </div>
//             <div className="text--center padding-horiz--md">

//             </div>
//           </div>
//           <div className={clsx('col col--1')}></div>
//         </div>
//       </div>
//     </section>
//   );
// }



{/* <div className="text--center">
<img className={styles.featureSvg} role="img" src="img/undraw_docusaurus_mountain.svg"/>
</div>
<div className="text--center padding-horiz--md">
<Heading as="h3">
  <Translate>
    Easy to Use
  </Translate>
</Heading>
<p>
  <Translate>
    Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
  </Translate>
</p>
</div> */}
