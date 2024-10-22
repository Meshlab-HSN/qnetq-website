import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Partners from '@site/src/components/Partners';
import Sponsors from '@site/src/components/Sponsors';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import firefly from '../css/firefly.css';
import headerBG from '../css/header_bg_base64.css';

import MapContainer from '../components/EuropeMap/MapContainer';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='landing_page'>
      <MapContainer />
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Research project`}
      description="meta-Tag - New hub for quantum communication in Germany to be created in Erfurt / Starting signal for new Q-net-Q research project">
      <HomepageHeader />
      <main>
        <Partners />
        <div className='feature_separator'/>
        <Sponsors />
      </main>
    </Layout>
  );
}
