import { ArrowUp } from 'tabler-icons-react';
import style from './stats.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import activityWhite from '../../../assets/activity_white.png';
import activityGreen from '../../../assets/activity_green.webp';

import { useEffect, useState } from 'react';
import { JoinersResult, TeamDataInterface } from '../../../interface/interface';
import { GetUserAddress } from '../../../utils/users';
import { get24hoursTeamData, getUserTeamData } from '../../../contract/regContract/getters';
export const StatsContainer = () => {
  const [teamdData , setTeamData] = useState <TeamDataInterface | null>(null)
  const [teamJoinersData , setTeamjoinersData] = useState <JoinersResult | null>(null)

  useEffect(()=> {
   
    getTeamData()
  }  , [])

  const getTeamData = async ()=> {
    try {
      const addressResponse = await GetUserAddress()
      if  (!addressResponse.success) return
      const teamResponse = await getUserTeamData(addressResponse.response)
      const joinersResponse = await get24hoursTeamData(addressResponse.response)
      if (teamResponse.success) {
        if (typeof teamResponse.response !== 'string') {
          console.log(teamResponse.response)
          setTeamData(teamResponse.response)
        }
      } else {
        console.error("No data found for direct team", teamResponse)
      }
      
      if (joinersResponse.success) {
        if (typeof joinersResponse.response !== 'string') {
          console.log(joinersResponse.response)
          setTeamjoinersData(joinersResponse.response)
        }
      }else {
        console.error("No data found for direct 24 hours joining team", joinersResponse)
      }
      
    } catch (error) {
      console.error('Error fetching user team data:', error);
      
    }
  }
  return (
    <section className={style.statsContainer}>
   

      <div className={style.middle}>
        <div className={style.bar} />
        <div className={`${style.partners} ${style.teamData}`}>
        <div className={style.gridContainer}>
  </div>
          <Title title='Partners' />


          <div className={style.number}>{Number(teamdData?.directDownlinesCount) || 0}</div>
          <div className={style.activity}>
            <div style={{
              color : `${teamJoinersData?.direct ? "rgb(0, 255, 132)" : "white"}`
            }} className={style.leftActivity}>
              <ArrowUp className={style.arrow} />{ teamJoinersData?.direct || 0}
            </div>
            <div className={style.rightActivity}>
              <LazyLoadImage width={20} src={teamJoinersData?.direct ? activityGreen : activityWhite}  />
            </div>
          </div>
        </div>
        <div className={`${style.team} ${style.teamData}`}>
          <Title title='Team' />


          <div className={style.number}>{Number(teamdData?.teamSize) || 0}</div>
          <div className={style.activity}>
            <div style={{
              color : `${teamJoinersData?.total ? "rgb(0, 255, 132)" : "white"}`
            }}   className={style.leftActivity}>
              <ArrowUp className={style.arrow} />{teamJoinersData?.total || 0}
            </div>
            <div className={style.rightActivity}>
              <LazyLoadImage width={20} src={teamJoinersData?.total ? activityGreen : activityWhite} />
            </div>
          </div>
        </div>
      </div>

      <div className={style.bottom}>
        {/*    <div className={style.ratio}>
            <div className={style.left}>

            
                <Title title='Ratio' />
                <LazyLoadImage className={style.internalImageratio} width={70} src={ratio} />

            </div>
            

            <div className={style.right}>
                <div className={style.number}>
                    0%

                </div>
                <div className={style.activity}>
                         <div className={style.leftActivity}>
                            <ArrowUp className={style.arrow} />
                            0

                         </div>
                         <div className={style.rightActivity}>
                            <LazyLoadImage src={activityWhite} />
                         </div>

                    </div>

            </div>

        </div> */}
      </div>
    </section>
  );
};

export const ShareIcon = () => {
  return '';
};

type Title = {
  title: string;
};
export const Title = ({ title }: Title) => {
  return (
    <div className={style.title}>
      {title} <ShareIcon />
    </div>
  );
};
