import { useEffect } from 'react';
import style from './roadmap.module.scss';
import {
  Circle,
  CircleCheck,
  UserPlus,
  Users,
  Cash,
  Gift,
  DeviceDesktop,
  ArrowsLeftRight,
  Crown,
  BuildingSkyscraper,
  ShieldCheck,
  Network,
  Exchange,
} from 'tabler-icons-react';

export const Roadmap = () => {
  const milestones = [
    {
      title: 'Register',
      description: 'User registration system initialized.',
      icon: <UserPlus size={24} />,
      completed: false,
    },
    {
      title: 'F Club Matrix',
      description: 'Building the foundation of the F Club structure.',
      icon: <Users size={24} />,
      completed: false,
    },
    {
      title: 'X Club Matrix',
      description: 'Developing the X Club Matrix.',
      icon: <Users size={24} />,
      completed: false,
    },
    {
      title: 'G Club Matrix',
      description: 'Laying out the G Club system.',
      icon: <Users size={24} />,
      completed: false,
    },
    {
      title: 'Royalty Rank',
      description: 'Establishing the ranking system for royalty levels.',
      icon: <Crown size={24} />,
      completed: false,
    },
    {
      title: 'Royalty Salary',
      description: 'Defining royalty-based salary distributions.',
      icon: <Cash size={24} />,
      completed: false,
    },
    {
      title: 'Token Airdrop',
      description: 'Preparing for initial token distribution to members.',
      icon: <Gift size={24} />,
      completed: false,
    },
    {
      title: 'DEX',
      description: 'Decentralized exchange platform development.',
      icon: <DeviceDesktop size={24} />,
      completed: false,
    },
    {
      title: 'Token Trading',
      description: 'Launching the token trading functionality.',
      icon: <ArrowsLeftRight size={24} />,
      completed: false,
    },
    {
      title: 'Billionaire F Club',
      description: 'Exclusive services for F Club members.',
      icon: <BuildingSkyscraper size={24} />,
      completed: false,
    },
    {
      title: 'Billionaire X Club',
      description: 'Exclusive services for X Club members.',
      icon: <BuildingSkyscraper size={24} />,
      completed: false,
    },
    {
      title: 'Billionaire G Club',
      description: 'Exclusive services for G Club members.',
      icon: <BuildingSkyscraper size={24} />,
      completed: false,
    },
    {
      title: 'Billionaire Salary',
      description: 'Enhanced salary system for billionaire members.',
      icon: <Cash size={24} />,
      completed: false,
    },
    {
      title: 'Token Vesting',
      description: 'Ensuring token vesting and security measures.',
      icon: <ShieldCheck size={24} />,
      completed: false,
    },
    {
      title: 'TOR Blockchain',
      description: 'Developing the proprietary TOR blockchain.',
      icon: <Network size={24} />,
      completed: false,
    },
    {
      title: 'Exchanger',
      description: 'Launching the exchanger for seamless trading.',
      icon: <Exchange size={24} />,
      completed: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(' NEW SCROLL', scrollTop);

      const startingPoint = 2500;
      const maxPoint = 4500;
      const totalHeight = 2230;

      if (window.scrollY > startingPoint && window.scrollY < maxPoint) {
        const internalBar = document.getElementById('internalbarHome');

        if (!internalBar) {
          return;
        }
        const progress = (scrollTop - startingPoint) / (totalHeight / 100);
        console.log('current progress', progress);
        internalBar.style.height = `${progress}%`;
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={style.roadmap}>
      <h2 className={style.title}>Project Roadmap</h2>

      <div className={style.roadContainer}>
        <div className={style.bar}>
          <div id='internalbarHome' className={style.internalBar}></div>
        </div>
        <div className={style.milestones}>
          {milestones.map((milestone, index) => (
            <div key={index} className={style.milestone}>
              <div className={style.icon}>
                {milestone.completed ? (
                  <CircleCheck size={24} color='#4caf50' />
                ) : (
                  <Circle size={24} color=' rgb(255, 157, 0)' />
                )}
              </div>
              <div className={style.text}>
                <div className={style.head}>
                  <h3 className={style.milestoneTitle}>{milestone.title}</h3>
                  <div className={style.customIcon}>{milestone.icon}</div>
                </div>

                <p className={style.milestoneDescription}>
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
