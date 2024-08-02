import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';



const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 995);

  {/* Performs similarly to componentDidMount in classes */}
  useEffect(() => {
      window.addEventListener("resize", () => {
          const istablet = window.innerWidth < 995;
          if (istablet !== isTablet) setIsTablet(istablet);
      }, false);
  }, [isTablet]);

  return (
    <div className={clsx('col', isTablet ? 'col--6' : 'col--4' )}>
      {/* !!!! class switch will be applied but overwritten by 'col', when reached */}
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {/* <Heading as="h3">{title}</Heading> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
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
