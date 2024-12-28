import {
    Search,
    ArrowLeft,
    Settings,
  } from 'tabler-icons-react';
  import style from './side.module.scss';
  import {
    LayoutDashboard,
    User,
    Users,
    Crown,
    BuildingBank,
    Network,
    Logout,
    Coin,
    BuildingStore,
    Headphones,
  } from 'tabler-icons-react';
  import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../routes/routes';
  const sidebarSections = [
    {
      items: [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: Settings, path : Routes.profile , label: 'Profile' },
        { icon: User, path : Routes.partners , label: 'Partners' },
        { icon: Users, path : Routes.team ,  label: 'Team' },
      ],
    },
    {
      items: [
        { icon: Crown, label: 'Earnings' },
        { icon: Coin, label: 'Airdrop' },
        { icon: Crown, label: 'Billionaire Programme' },
        { icon: BuildingBank, label: 'Billionaire Salary' },
      ],
    },
    {
      items: [
        { icon: Network, label: 'Blockchain' },
        { icon: BuildingStore, label: 'Exchange' },
        { icon: Headphones, label: 'Support' },
        { icon: Logout,path: Routes.home , label: 'Logout' },
      ],
    },
  ];
  
  type SideBarProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  export const SideBardashboard = ({
    isSidebarOpen,
    setIsSidebarOpen,
  }: SideBarProps) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredSections, setFilteredSections] = useState(sidebarSections);
    const navigate = useNavigate()

    useEffect(() => {
      const handleScreenSizeChange = () => {
        if (window.screen.width > 728) {
          setIsSidebarOpen(true);
        }
      };
      window.addEventListener('resize', handleScreenSizeChange);
      handleScreenSizeChange();
  
      return () => {
        window.removeEventListener('resize', handleScreenSizeChange);
      };
    }, [setIsSidebarOpen]);
  
    useEffect(() => {
      if (searchValue.trim() === '') {
        setFilteredSections(sidebarSections);
      } else {
        const lowerSearchValue = searchValue.toLowerCase();
        const newSections = sidebarSections
          .map((section) => ({
            items: section.items.filter((item) =>
              item.label.toLowerCase().includes(lowerSearchValue)
            ),
          }))
          .filter((section) => section.items.length > 0); 
        setFilteredSections(newSections);
      }
    }, [searchValue]);
  
    return (
      <div
        style={{
          transform: `${isSidebarOpen ? 'translateX(0px)' : 'translateX(-100%)'}`,
        }}
        className={style.sidebar}
      >
        <div className={style.closeButton} onClick={() => setIsSidebarOpen(false)}>
          <ArrowLeft color='grey' size={24} />
        </div>
        <div className={style.searchContainer}>
          <Search className={style.searchIcon} />
          <input
            className={style.inputSearch}
            placeholder='Search...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
  
        <div className={style.sidebarMenu}>
          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={style.divider}>
              {section.items.map((item, index) => (
                <div  onClick={()=> navigate(item.path || Routes.dashboard)} key={index} className={style.sidebarItem}>
                  <item.icon size={24} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  