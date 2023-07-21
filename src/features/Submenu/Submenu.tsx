import React, { useRef } from 'react';

import { useGlobalContext } from '../../context/context';
import sublinks from '../../data/data';
import styles from './submenu.module.css';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const linkLength = currentPage?.links?.length ?? 0;

  const submenuContainer = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = (e: React.MouseEvent) => {
    const submenu = submenuContainer.current;
    const result = submenu && submenu.getBoundingClientRect();

    if (result) {
      const { clientX, clientY } = e;
      const { right, bottom, left } = result;

      if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
        setPageId('');
      }
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? `${styles.submenu} ${styles.showSubmenu}` : styles.submenu}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className={styles.submenuLinks}
        style={{
          gridTemplateColumns: linkLength > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map(({ id, url, label, icon }) => {
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
