import { ExternalLink, InfoCircle, UserPlus } from 'tabler-icons-react';
import style from './global.module.scss';
import { useEffect, useState } from 'react';
import { GetLastEvents, NumberOfUsers } from '../../../contract/regContract/getters';
import { EventLog } from 'web3';




export const StatsCard = () => {

  const [users , setUsers] = useState(0)
  const [regEvents , setRegEvenets ] = useState <EventLog[] | null >(null)


  


  useEffect(()=> {
    numberOfUsers()
    getGlobalEvents()
  }, [])

  const numberOfUsers =  async ()=> {
    try {
      const usersResponse = await NumberOfUsers()
      if (usersResponse.success) {
        if (typeof usersResponse.response !== 'string') {
          setUsers(usersResponse.response)
        }
      }
    } catch (error) {
      console.error(error)
      
    }
  }

  const getGlobalEvents = async()=> {
    try {

      const eventsResponse = await GetLastEvents()
      if (eventsResponse.success) {
        if (typeof eventsResponse.response !== 'string') {
          console.log(eventsResponse.response)
          setRegEvenets(eventsResponse.response)
        }
      } else {
        console.error("No data found for global events", eventsResponse)
      }
      
    } catch (error) {
      console.error(error)
      
    }
  }



  const navigateToTx = (tx : string)=> {
    window.open("https://opbnb.bscscan.com/tx/"+tx)
  }
  return (
    <section className={style.statsContainer}>
      <p>Statistics</p>
      <div className={style.globalCards}>

      <div className={style.statsCard}>
        <div className={style.statBlock}>
          <div className={style.statHeader}>
            <span>Users</span>
            <InfoCircle className={style.infoIcon} />
          </div>
          <div className={style.statValue}>{Number(users) || 0}</div>
          <div className={style.statChange}>0</div>
        </div>

        <div className={style.statBlock}>
          <div className={style.statHeader}>
            <span>Total Invest</span>
            <InfoCircle className={style.infoIcon} />
          </div>
          <div className={style.statValue}>
            0 <span className={style.unit}>USDT</span>
          </div>
          <div className={style.statChange}>
            0 USDT
          </div>
        </div>
      </div>
      <section className={style.activityContainer}>
      <div className={style.recentActivitiesTitle}>
        <p>Recent Activity</p>
      </div>
      <div className={style.activities}>
        {regEvents?.map((events, index) => (
          <div onClick={()=> navigateToTx(events.transactionHash || "")} key={index} className={style.activityCard}>
            <div className={style.activityHeader}>
            
                <UserPlus className={style.icon} />
              <a href='#' className={style.link}>

              new user joined
              </a>
              <ExternalLink className={style.externalIcon} />
            </div>
        
            <div className={style.timeAgo}>{String(events.returnValues.userId) && String(events.returnValues.userAddress).slice(0, 17)}...</div>
          </div>
        ))}
      </div>
    </section>
    </div>

    </section>
  );
};
