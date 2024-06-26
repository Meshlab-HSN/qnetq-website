import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import MapContainer from '../components/EuropeMap/MapContainer';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <MapContainer />
      {/* <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <Translate>
            Q-net-Q
          </Translate>
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
          <Translate>
            Research project Q-net-Q
          </Translate>
        </p>
        <img class="main_logo" src="img/map_europe.png"></img>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/q-net-q">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>*/}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Research project`}
      description="meta-Tag - New hub for quantum communication in Germany to be created in Erfurt / Starting signal for new Q-net-Q research project">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
