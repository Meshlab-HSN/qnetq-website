import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="footer__top">
          <div className="footer__column footer__left">
            {logo && <div className="footer__logo-custom">{logo}</div>}
          </div>
          <div className="footer__column footer__middle"></div>
          <div className="footer__column footer__right">
            <div className="footer__links-custom">{links}</div>
          </div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
