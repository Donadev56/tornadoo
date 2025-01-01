// Sidebar.jsx
import style from './sidebar.module.scss';
import {
  Book,
  BrandTelegram,
  DoorEnter,
  Home,
  X,
} from 'tabler-icons-react';
import image from '../../../assets/T7.png';
import { Routes } from '../../../routes/routes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type propos = {
  isOpen: boolean;
  toggleSidebar: () => void;
  setCanDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};


export const Sidebar = ({ isOpen, toggleSidebar, setCanDisplay }: propos) => {
  const router  = useRouter()
  const navigate =(path : string)=>{
    router.push(path)

  }

  return (
    <aside className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
      <div className={style.header}>
        <X
          className={style.closeIcon}
          size={30}
          onClick={() => toggleSidebar}
        />
      </div>

      <div className={style.image}>
        <Image
        alt=''
          className={style.imageSrc}
          src={image}
          width={130}
        />
      </div>

      <nav className={style.nav}>
        <ul>
          <li onClick={()=> navigate(Routes.home)}>
            {' '}
            <div className={style.Icon}>
              <Home />
            </div>{' '}
            <div className={style.element}>Home</div>
          </li>
          <li
            onClick={() => {
              setCanDisplay(true);
            }}
          >
            {' '}
            <div className={style.Icon}>
              <Book />
            </div>
            <div className={style.element}> Documentation</div>
          </li>
          <li
            onClick={() => {
             navigate(Routes.register)
            }}
          >
            {' '}
            <div className={style.Icon}>
              <DoorEnter />
            </div>
            <div className={style.element}> register</div>
          </li>
      
          <li
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open('https://t.me/TornaDoo_io');
              }
            
            }}
          >
            {' '}
            <div className={style.Icon}>
              <BrandTelegram />
            </div>
            <div className={style.element}>Telegram</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
