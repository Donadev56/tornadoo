"use client"


import { useEffect, useState } from 'react';
import style from './top.module.scss';
import logo from '../../../assets/logo/logo.png';
import {
  Menu,

} from 'tabler-icons-react';
import { GetUserAddress } from '../../../utils/users';
import Image from 'next/image';


type props = {

  isSidebarOpen : boolean
  setIsSidebarOpen : React.Dispatch<React.SetStateAction<boolean>>

}
export const TopDash = ({isSidebarOpen , setIsSidebarOpen } :props ) => {
  const [address , setAddress] = useState("");



 

  useEffect(()=> {
    const getAddress =async()=> {
      try {
        const addressResponse = await GetUserAddress()
        if (addressResponse.success)  {
          setAddress(addressResponse.response)
        }
        
      } catch (error) {
        console.error('Failed to fetch user address:', error);
        
      }

    }
    getAddress()
  }, [])

  return (
    <section className={style.top}>
      {isSidebarOpen && (
        <div
          onClick={() => {
            setIsSidebarOpen(false);
          }}
          className={style.overlay}
        />
      )}
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.logo}>
            <Image alt='' width={'50'} src={logo} />
          </div>
        </div>

        <div className={style.right}>
          <div className={style.address}>{address.slice(0, 4)}...{address.slice(address.length - 4, address.length)}</div>
          <Menu size={40} className={style.menuElement} onClick={()=>setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      </div>

    
    </section>
  );
};
