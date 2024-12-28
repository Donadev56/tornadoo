// TopBar.jsx
import { useState } from 'react';
import style from './topBar.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../../../assets/T7.png';
import { Menu } from 'tabler-icons-react';
import { Sidebar } from './sidebar'; // Assurez-vous que le chemin est correct

type props = {
  canDisplay?: boolean;
  setCanDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};
export const TopBar = ({ setCanDisplay }: props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className={style.topBar}>
        <div className={style.left}>
          <LazyLoadImage width={40} src={image} placeholderSrc={image} />
          <div className={style.title}>Tornadoo</div>
        </div>
        <div className={style.right}>
          <div className={style.nav}>
            <Menu className={style.menu} size={30} onClick={toggleSidebar} />
          </div>
        </div>
      </section>
      <Sidebar
        setCanDisplay={setCanDisplay}
        isOpen={isSidebarOpen}
        toggleSidebar={() => toggleSidebar()}
      />
    </>
  );
};
