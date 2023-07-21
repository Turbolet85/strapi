import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroCenter}>
        <h1>
          Manage Any Content. <br /> Anywhere.
        </h1>
        <p>
          Strapi is the leading open-source headless CMS. 100% JavaScript and fully
          customizable.
        </p>
      </div>
    </div>
  );
};

export default Hero;
