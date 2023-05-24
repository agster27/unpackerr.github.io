import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Automated Extractions',
    imageUrl: 'img/unpackerr.png',
    description: (
      <>
        Unpackerr was designed to make sure you never have to worry about
        a download failing to import because it's in a bunch of rar files.
      </>
    ),
  },
  {
    title: 'Shining Starr',
    imageUrl: 'img/servarr.png',
    description: (
      <>
        Unpackerr does a lot of things, but the primary focus is on the Starr community!
      </>
    ),
  },
  {
    title: 'Compatibility',
    imageUrl: 'img/compatibility.png',
    description: (
      <>
        Unpackerr can be installed on Linux, FreeBSD, macOS, Windows, Docker,
        and you can even run it right from your home folder on a seedbox.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Unpackerr`}
      description="Automated Archive Extractions">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"><img alt="Unpackerr" src="img/logo.png" /></h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/unpackerr/introduction')}>
              Start Unpacking!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
