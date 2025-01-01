"use client"



import { GetDirectDownlines, getUserData, getUserTeamData } from '../../contract/regContract/getters';
import style from './directPartners.module.scss';
import { useState, useEffect } from 'react';
import { GetUserAddress } from '../../utils/users';
import { TopDash } from '../../components/dashboard/top/top';
import { SideBardashboard } from '../../components/dashboard/top/side';

export default function DirectPartnersList  () {
  const [directPartners, setDirectPartners] = useState< {
    id: number;
    address: string;
    joiningDate: number;
    directCount: number;

}[]>([]);

const [isSidebarOpen, setIsSidebarOpen,] = useState(false)
const [isLoading , setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchDirectPartners = async () => {
      try {
        const addressResponse = await GetUserAddress()
        let address : string = ""
        if (addressResponse.success) {
             address = addressResponse.response
        }   
        
        const partnersResponse = await GetDirectDownlines(address);
        if (partnersResponse?.success) {
            if (typeof partnersResponse.response !== "undefined" && typeof partnersResponse.response !== "string") {
                const users = partnersResponse.response
                let Users : {
                    id: number;
                    address: string;
                    joiningDate: number;
                    directCount: number;
        
                }[]   = []
    
                for (let i = 0 ; i < users.length ; i++) {
                    const userDataOfuser = await getUserData(users[i])
                    const teamDataResponse = await getUserTeamData(users[i])
                    if (userDataOfuser?.success) {
                        let directCount : number = 0
                        if (typeof userDataOfuser.response !== "string") {
                            if (teamDataResponse.success) {
                                if (typeof teamDataResponse.response !== "string") {
                                 directCount = teamDataResponse.response.directDownlinesCount
                                }
                            }
                            Users.push({
                                 id : userDataOfuser.response.countId,
                                 address : users[i],
                                 joiningDate : userDataOfuser.response.joiningDate,
                                 directCount : directCount,
 
                            })
                        }
                    }
                    setDirectPartners(Users)

                 }
                 setIsLoading(false)

                 setDirectPartners(Users)
    
            }
        
        } else {
          console.error('Failed to fetch direct partners:');
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching direct partners:', error);
        setIsLoading(false)
      }
    };

    fetchDirectPartners();
  }, []);
  return (
    <section className={style.tableContainer}>
        <div className={style.left}>
            <SideBardashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <TopDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        <div className={style.right}>

      <h2 className={style.tableTitle}>Direct Partners</h2>
      {directPartners.length > 0 ? (
        <div className={style.tableWrapper}>
          <div className={style.tableHeader}>
            <div className={style.tableCell}>Address</div>
            <div className={style.tableCell}>ID</div>
            <div className={style.tableCell}>Joining Date</div>
            <div className={style.tableCell}>Direct Count</div>
          </div>
          <div className={style.tableBody}>
            {directPartners.map((partner, index) => (
              <div key={index} className={style.tableRow}>
                <div className={style.tableCell}>
                  {partner.address.slice(0, 17)}...
                </div>
                <div className={style.tableCell}>{Number(partner.id)}</div>
                <div className={style.tableCell}>
                  {new Date(Number(partner.joiningDate) * 1000).toLocaleString()}
                </div>
                <div className={style.tableCell}>{partner.directCount}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className={style.noData}>No Direct Partners Found</p>
      )}
              </div>
              {   isLoading && 

<div className={style.loaderContainer}><div className={style.loader} /></div>
}  
    </section>
  );
};
