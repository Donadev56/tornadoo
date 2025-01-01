"use client"


import style from './head.module.scss';
import image from '../../../assets/logo/logo_.gif';
import { ShowAlert } from '../../../scripts/scripts';
import { useEffect, useState } from 'react';
import p1 from '../../../assets/phones/1.png'
import p2 from '../../../assets/phones/3.png'
import Image from 'next/image';
import { NumberOfUsers } from '@/app/contract/regContract/getters';
import { useRouter } from 'next/navigation';
import { Routes } from '@/app/routes/routes';
type props = {
  setCanDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};


export const HeadHome = ({ setCanDisplay }: props) => {
  const router = useRouter()


  const navigate = (path : string)=> {
    router.push(path)
  }
  const [users , setUsers ] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') { 
      const loader = document.getElementById('loader');
      const secondScreen = document.getElementById('secondScreen');
      const startingPoint = 350;
      const ScStartingpoint = 1500
      const ScMaxpoint = 2100
      const maxPoint = 505;
      const divider = 2.5;
      const rotStartingPoint = 400;
      if (!loader || !secondScreen) {
        return;
      }

      if (window.scrollY < startingPoint) {
        loader.style.left = '0%';
        loader.style.transform = ``;
      } else if (window.scrollY > startingPoint && window.scrollY < maxPoint) {
        loader.style.left = `${(window.scrollY - startingPoint) / divider}%`;
        if (window.scrollY > rotStartingPoint) {
          loader.style.transform = `rotate(-90deg)`;
        }
      }
      if (window.scrollY < ScStartingpoint) {
        secondScreen.style.top = ``;
      } else if (window.scrollY > ScStartingpoint && window.scrollY < ScMaxpoint) {
        secondScreen.style.scale = `${((window.scrollY * 100) / maxPoint)/250} `;

      }
    };
  }
    if (typeof window !== 'undefined') { 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, []);

  useEffect(()=> {
    const getUsers = async ()=> {

      try {
        const usersResponse = await NumberOfUsers()
        if (usersResponse.success && typeof usersResponse.response !== "string") {
          setUsers(usersResponse.response)

        }
        
      } catch (error) {
        console.error('Error fetching users:', error);
        ShowAlert('Failed to fetch users');
        
      }

    }
    getUsers()
  },[])

  return (
    <section className={style.head}>
      <div className={style.blur}></div>

      <div className={style.imageContainer}>
        <Image alt='' width={250} src={image} />
      </div>

      <div className={style.text}>
        <div className={style.title}>TornaDoo</div>

        <div className={style.des}>
          A smart contract designed for unllimited earnings on opBNB{' '}
        </div>
      </div>
      {false && (
        <div className={style.loadingBar}>
          <div className={style.loadingInternalBar}></div>

          <div className={style.percent}>59 %</div>
        </div>
      )}

      <div id='loader' className={style.loader}></div>
      <div
        style={{
          padding: '15px',
          position: 'relative',
        }}
        className={style.text2}
      ></div>

      <div className={style.buttons}>
        <button
          onClick={() => {
       navigate(Routes.register)
          }}
        >
          Join now
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            border: '4px solid  rgb(255, 157, 0) ',
            color: ' rgb(255, 157, 0)',
          }}
          onClick={() => {
            setCanDisplay(true);
          }}
        >
          Learn more
        </button>
      </div>

      <div>
      </div>
      <section className={style.screenShoots}>
        <div className={style.topMetadata}>

        <h1>
        Modern dashboard
        </h1>
        <p>
        Our dashboard is 100% transparent and modern, optimized to display real-time data and capable of supporting millions of simultaneous connections.
        
        </p>
        </div>

        <div className={style.screenContainers}>

        <div className={style.image}>
        <Image alt='' className={style.s} src={p1}  />    

        </div>
        <div id='secondScreen' className={style.image}>
        <Image alt='' className={style.s}  src={p2} />    

        </div>
        </div>

      </section>
      <div className={style.secondaryButton}>
        <div className={style.record}>
          <div className={style.recordTitle}>Participants</div>
          <div className={style.number}>{Number(users)}</div>
        </div>
        <div className={style.record}>
          <div className={style.recordTitle}>New Users per Month</div>
          <div className={style.number}>{Number(users)}</div>
        </div>
        <div className={style.record}>
          <div className={style.recordTitle}>Total income participants</div>
          <div className={style.number}>0 USDT</div>
        </div>
      </div>

     
    </section>
  );
};
