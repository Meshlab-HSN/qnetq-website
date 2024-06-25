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
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
