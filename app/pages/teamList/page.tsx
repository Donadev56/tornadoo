"use client"


import style from './teamList.module.scss';
import { useEffect, useState } from 'react';
import { GetDirectDownlines, getUserData, getUserTeamData } from '../../contract/regContract/getters';
import { GetUserAddress } from '../../utils/users';
import { SideBardashboard } from '../../components/dashboard/top/side';
import { TopDash } from '../../components/dashboard/top/top';

export default function TeamList (){
  const [teamList, setTeamList] = useState<{
    name : string ,
    id: number;
    address: string;
    joiningDate: number;
    directCount?: number;
    downlinesList? : string []

}[] >([]);
const [isSidebarOpen, setIsSidebarOpen,] = useState(false)
const [address, setAddress] = useState('')
const [isLoading , setIsLoading ] = useState(true)

const [partnerSelected , setPartnerSelected] = useState<{
    name : string ,
    id: number;
    address: string;
    joiningDate: number;
    directCount?: number;
    downlinesList? : string []

} | null > ()

  useEffect(() => {

   const getAddress  = async () => {
    try {
   
      const addressResponse = await GetUserAddress()
      let address : string = ""
      if (addressResponse.success) {
           address = addressResponse.response
           console.log(address)
           await fetchDownlines(address)
      }   else {
        console.error(addressResponse.response)
      }
       
    } catch (error) {
        console.error('Error getting user address:', error);
    }
   }

     getAddress()

  }, []);


  useEffect(()=> {
    if (address.length > 0) {
        fetchDownlines(address)
    }
  }, [address])


  const fetchDownlines = async (address : string) => {

    try {  
      const partnersResponse = await GetDirectDownlines(address);

      if (partnersResponse?.success) {
          if (typeof partnersResponse.response !== "undefined" && typeof partnersResponse.response !== "string") {
              const users = partnersResponse.response
              let Users : {
                  name : string ,
                  id: number;
                  address: string;
                  joiningDate: number;
                  directCount?: number;
                  downlinesList? : string []
      
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
                          const downlinesListResponse = await GetDirectDownlines(users[i])
                          let downlines  : string [] = []
                          if (downlinesListResponse?.success) {
                              if (typeof downlinesListResponse.response !== "undefined" && typeof downlinesListResponse.response !== "string") {
                                  downlines = downlinesListResponse.response

                              }

                          }
                          Users.push({
                               name : userDataOfuser.response.name ,
                               id : userDataOfuser.response.countId,
                               address : users[i],
                               joiningDate : userDataOfuser.response.joiningDate,
                               directCount : directCount,
                               downlinesList : downlines

                          })

                          setTeamList(Users)
                      }
                  } else {
                    setIsLoading(false)

                  }

               }
              }
          }
          setIsLoading(false)

    } catch (error) {
      console.error('Error fetching downlines:', error);
      setIsLoading(false)

    }
  };
  useEffect(()=> {
    if (address.length > 0) {
        getPartnerSelected(address)
    }
  }, [])


  const getPartnerSelected = async (partner : string)=> {
    try {
        console.log("feching data")
        setAddress(address)
        setIsLoading(true)

        const userDataOfuser = await getUserData(partner)
        const teamDataResponse = await getUserTeamData(partner)
        if (userDataOfuser?.success) {
            let directCount : number = 0
            if (typeof userDataOfuser.response !== "string") {
                if (teamDataResponse.success) {
                    if (typeof teamDataResponse.response !== "string") {
                     directCount = teamDataResponse.response.directDownlinesCount
                    }
                }
                const downlinesListResponse = await GetDirectDownlines(partner)
                let downlines  : string [] = []
                if (downlinesListResponse?.success) {
                    if (typeof downlinesListResponse.response !== "undefined" && typeof downlinesListResponse.response !== "string") {
                        downlines = downlinesListResponse.response

                    }

                } else {
                  setIsLoading(false)

                }

                console.log({
                    name : userDataOfuser.response.name ,
                    id : userDataOfuser.response.countId,
                    address : partner,
                    joiningDate : userDataOfuser.response.joiningDate,
                    directCount : directCount,
                    downlinesList : downlines

                })
                setPartnerSelected({
                    name : userDataOfuser.response.name ,
                    id : userDataOfuser.response.countId,
                    address : partner,
                    joiningDate : userDataOfuser.response.joiningDate,
                    directCount : directCount,
                    downlinesList : downlines

               }
) 
            
            
            }}

            setIsLoading(false)

    } catch (error) {
        console.error(error)
        setIsLoading(false)

        
    }
  }

  return (
    <div className={style.listContainer}>
               {   isLoading && 

<div className={style.loaderContainer}><div className={style.loader} /></div>
} 
        <div className={style.left}>
        <SideBardashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <TopDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
  {partnerSelected && partnerSelected?.address.length > 0 &&  <div className={style.recursiveCard}>
        <TeamCard setAddress={getPartnerSelected} partner={partnerSelected!} />
        <div onClick={()=> {
            setPartnerSelected(null)
        }} className={style.overlay} />
     </div>}
        </div>
        <div className={style.right}>
            <div className={style.searchcontainer}>
                <input onChange={(e)=> setAddress(e.target.value)} value={address} type="text" className={style.inputSearch}/>

            </div>

      {teamList.length > 0 ? (
        teamList.map((partner, _) => (
           <TeamCard  setAddress={getPartnerSelected}  partner={partner}/>
        ))
      ) : (
        <div className={style.noData}>No Team Members Found</div>
      )}
     </div>

    </div>
  );
};


type props = {
    partner: {
      name : string ,
      id: number;
      address: string;
      joiningDate: number;
      directCount?: number;
      downlinesList? : string []
    },
    setAddress : (address: string) => void
}

 const TeamCard = ({ partner , setAddress} : props )=> {
 return ( 
    
    <div className={style.partnerCard}>
    <div className={style.partnerInfo}>
      <div className={style.address}> {partner && partner.name}</div>
      <div className={style.detail}>
        <span>ID:  {partner && Number(partner.id)}</span>
        <span>address: {partner && partner.address.slice(0, 17)}...</span>

        <span>Joining Date: {partner && new Date(Number(partner.joiningDate) * 1000).toLocaleString()}</span>
        <span>Direct Count: {partner && Number(partner.directCount)}</span>
      </div>
    </div>
    {partner.downlinesList && partner.downlinesList.length > 0 && (
      <div className={style.downlines}>
        <div className={style.downlineTitle}>Direct Downlines:</div>
        <ul className={style.downlineList}>
          {partner && partner.downlinesList.map((downline, idx) => (
            <li key={idx} onClick={()=> setAddress(downline)} className={style.downlineItem}>
              {downline.slice(0, 27)}...
            </li>
          ))}
        </ul>
      </div>
    )}
       
  </div>)
}