"use client"



import { useEffect, useState } from 'react';
import { Matrix } from '../../components/dashboard/matrix/matrix';
import { Profile } from '../../components/dashboard/profile/profile';
import { ActionCard } from '../../components/dashboard/pubCard/pubCard';
import { StatsContainer } from '../../components/dashboard/stats/stats';
import { StatsCard } from '../../components/dashboard/global/global';
import { SideBardashboard } from '../../components/dashboard/top/side';
import { TopDash } from '../../components/dashboard/top/top';
import style from './dash.module.scss';
import { useWeb3, Web3Provider } from '../../web3/Web3Context';



 const Dashboard = () =>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const web3 = useWeb3()
  useEffect(()=> {
     if (web3.account) {
       console.log("User connected: ", web3.account)
     }
  }, [web3])

  return (
    <div className={style.dash}>
      <div className={style.left}>
      <SideBardashboard setIsSidebarOpen={setIsSidebarOpen}  isSidebarOpen={isSidebarOpen}/>

      </div>
      <div className={style.right}>

      <TopDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <Profile />

      <StatsContainer />
      <ActionCard />
      <Matrix />
      <StatsCard />
      


      </div>

    </div>
  );
};


export default function DashboardComponent () {
  return(
    <Web3Provider>
      <Dashboard /> 
    </Web3Provider>
  )
}