import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './profile.module.scss';
import image from '../../../assets/p1.png';
import { ArrowUp, ChevronDown, ChevronUp, QuestionMark } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import { GetUserAddress } from '../../../utils/users';
import { getUserData } from '../../../contract/regContract/getters';
import { UserData, UserProfileData } from '../../../interface/interface';
import { SiTether } from 'react-icons/si';
import statsStyle from '../stats/stats.module.scss'
import { ShareIcon } from '../stats/stats';
export const Profile = () => {
  const [userData, setUserData] = useState<UserData | null >(null)
  const [CanShowmore , setCanShowMore] = useState(true)
  const [profileData , setProfileData] = useState<UserProfileData | null>(null)
  function convertTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Multiplie par 1000 pour convertir en millisecondes
    return date.toLocaleString(); // Retourne une date formatée en fonction de la locale par défaut
  }
  
  const [link , setlink] = useState("")
  async function Sharelink(title: string, text: string, url: string): Promise<void> {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log('Shared successful.');
      } catch (error) {
        console.error('An error occured :', error);
      }
    } else {
      console.warn("The api is not available");
    }
  }
  useEffect(()=> {
   
    const getAddress = async ()=> {
      try {
        const addressResponse = await GetUserAddress()
        if (addressResponse.success)  {
          setlink(`${location.host}/register/?ref=${addressResponse.response}`)
         await  fetchUserProfileData(addressResponse.response)
        } else {
          console.error('Failed to fetch user address:', addressResponse.response)
        }
        
      } catch (error) {
        console.error('Error fetching user:', error);
        
      }
    }
    getAddress()
  }, [])
  useEffect(()=> {
    const getUser = async()=> {
      try {
        const addressResponse  = await GetUserAddress()
        if (addressResponse.success) {
          const address = addressResponse.response
          const userData = await getUserData(address)
          if (userData!.success && userData!.response) {
            const data = typeof  userData!.response !== 'string' ? userData!.response : null
            setUserData(data )
          } else {
            console.error('Failed to fetch user data:', userData!.response)
          }
        } else {
          console.error('Failed to fetch user address:', addressResponse.response)
        }
        
      } catch (error) {
        console.error('Error fetching user:', error);
        
      }
    }
    getUser()
  }, [])
  

  useEffect(()=> {


  }, [])

 
  
  const fetchUserProfileData = async (address: string)=> {
    try {
      const username = localStorage.getItem(`username/${address}`);
  
      const response = await fetch(`https://images.tornadoo.io/images/get?address=${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        return null;
      }
  
      const { image }: { image: string } = await response.json();
  
      const res : UserProfileData = {
        name: username,
        image,
      };

      setProfileData(res)
    } catch (error) {
      console.error('Error fetching user profile data:', error);
      return null;
    }
  };


  return (
    <section className={style.profile}>
      <div className={style.container}>
      <div className={style.leftSection}>
        <div className={style.top}>

        <div className={style.right}>
            <div className={style.name}>{profileData?.name || userData && userData!.name }  </div>
            <div className={style.id}>ID  {userData && Number(userData!.countId)}</div>
       {     <div onClick={()=> setCanShowMore(!CanShowmore)} 
                  className={style.showLess}>
                {CanShowmore ? "less" : "more"}  {!CanShowmore ? <ChevronDown className={style.showLessIcon} /> : <ChevronUp/>}
            </div>}
          </div>
          
          <div className={style.leftTop}>
            <div className={style.profileImage}>
              <div className={style.avatar_gradient}></div>
              <LazyLoadImage
                className={style.avatarSrc}
                width={50}
                src={profileData?.image || image}
                placeholderSrc={image}
              />
            </div>
          </div>

        
        </div>
        { CanShowmore &&        <div className={style.bottom}>
 <div className={style.invited}>
            Invited on {userData && convertTimestampToDate(Number(userData!.joiningDate))}
            <span className={style.sponsorID}> ID {userData && Number(userData!.uplineCountID) || 0}</span>
          </div>
        </div>}

        <section className={style.referralLink}>
      <div className={style.containerRef}>
        <div className={style.topRef}>
          <div className={style.title}>
            My personal link{' '}
            <QuestionMark size={20} className={style.questionMark} />
          </div>
          <div className={style.link}>{link.slice(0, 18)}...</div>
        </div>

        <div className={style.buttons}>
          <button onClick={()=> {
            navigator.clipboard.writeText(link)
          }} className={style.copy}>Copy </button>
          <button onClick={()=> {
           Sharelink("Join me in Tornadoo !", "Use this link to join me in Tornadoo smart contract and strat earning !", link)
          }} className={style.share}>Share</button>
        </div>
      </div>

    </section>
  </div>
       <div className={style.rightSection}>

        <div className={statsStyle.top}>
        <div className={statsStyle.profits}>
        <div className={style.profitTitle}>
      Profits <ShareIcon />
    </div>
          <div className={statsStyle.gains}>
            <div className={statsStyle.amount}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center',
                  gap: '10px',
                }}
                className={statsStyle.profitNumber}
              >
                0 USDT <SiTether className={statsStyle.iconTether} />
              </div>
              <div className={statsStyle.daily}>
                0 <ArrowUp className={statsStyle.arrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </section>
  );
};
