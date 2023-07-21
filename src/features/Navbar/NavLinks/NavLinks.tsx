import { useGlobalContext } from '../../../context/context';
import sublinks from '../../../data/data';
import styles from './navLinks.module.css';

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className={styles.navLinks}>
      {sublinks.map(({ page, pageId }) => {
        return (
          <button
            key={pageId}
            className={styles.navLink}
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
