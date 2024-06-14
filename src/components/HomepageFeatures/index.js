import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

import hsnLogo from '@site/static/img/logos/hs_nordhausen.png';
import tumLogo from '@site/static/img/logos/tu_muenchen.png';
import tubLogo from '@site/static/img/logos/tu_berlin.png';

const FeatureList = [
  {
    Img: hsnLogo,
    description: (
      <>
        Prof. Thomas Hühn leitet den Fachbereich Kommunikationstechnik und forscht an effizienter Ressourcenallokation in WLAN-Netzwerken. Als Experte für drahtlose Software-Defined Netzwerke hat er nationale und internationale Projekte geleitet und koordiniert das Verbundforschungsprojekt Q-net-Q.
      </>
    ),
  },
  {
    Img: tumLogo,
    description: (
      <>
        Dr. Janis Nötzel, an der TUM gibt es die erste Emmy-Noether Arbeitsgruppe für Quantenkommunikation in der Elektrotechnik. Sie entwickelt theoretische Systemkonzepte und Software für die Verifikation von Protokollen. Dr. Nötzel leitet die Forschung in den Bereichen quantum-classical queue management, Quantensimulation und statistische Untersuchungen.
      </>
    ),
  },
  {
    Img: tubLogo,
    description: (
      <>
        Prof. Jean-Pierre Seifert bringt seine Expertise von Intel, Infineon und Samsung mit und ist in renommierten Institutionen wie T-Labs und BIFOLD involviert. Er ist ein Pionier in Fehlerangriffen und Mitbegründer der Einstein-Forschungsgruppe zur Quanten-Digitalen Transformation. Dazu gehört auch die Emmy Noether DFG-Nachwuchsgruppe Quantenkommunikation und Kryptographie von Dr. Anna Pappa.
      </>
    ),
  },
];

function Feature({ Img, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt="Logo" />
      </div>
      <div className="text--center padding-horiz--md">
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
