import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../../context/context';
import sublinks from '../../data/data';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen && styles.showSidebar}`}>
      <div className={styles.sidebarContainer}>
        <button className={styles.sidebarCloseBtn} onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className={styles.sidebarLinks}>
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className={styles.sublinks}>
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
