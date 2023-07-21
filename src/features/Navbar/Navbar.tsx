import React from 'react';
import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../../context/context';
import styles from './navbar.module.css';
import NavLinks from './NavLinks/NavLinks';
import navLinkStyles from './NavLinks/navLinks.module.css';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains(navLinkStyles.navLink)) {
      setPageId('');
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className={styles.navCenter}>
        <h3 className={styles.logo}>Strapi</h3>
        <button className={styles.toggleBtn} onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
