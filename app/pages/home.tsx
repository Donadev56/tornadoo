"use client"



import { useEffect, useState } from 'react';
import { Faq } from '../components/home/faq/faq';
import { HeadHome } from '../components/home/head/head';
import { Pop } from '../components/home/pop/pop';
import { PreviewSpace } from '../components/home/preview/preview';
import { Roadmap } from '../components/home/roadmap/roadmap';
import { SocialMedia } from '../components/home/social/social';
import { TopBar } from '../components/home/topBar/topBar';
import style from './home.module.scss';
import { Web3Provider } from '../web3/Web3Context';
import image from '../assets/T7.png'
import { getUserData, IsRegistered } from '../contract/regContract/getters';
import { UserBasicData, UserData } from '../interface/interface';
import { SiBinance } from 'react-icons/si';
import { InitEthereumWeb3 } from '../web3/web3';
import { Routes } from '../routes/routes';
import Image from 'next/image';
import { ToastContainer  , toast} from 'react-toastify';
import { useRouter } from 'next/navigation';
import { GetUserData } from '../api/user';
import { GetImage } from '../api/image';
import { CountdownTimer } from '../components/home/timer/timer';
export default function HomePage  ()  {
  const [canDisplay, setCanDisplay] = useState(false);
  const [address, setAddress] = useState("");
  const [userData , setUserData] = useState<UserBasicData | null> ()
  const [userContractData , setUserContractData] = useState<UserData | null> ()


  const [balance, setBalance] = useState(0)

  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  const notifySuccess = (message: string) => toast.success(message);
  const notifyWarning = (message: string) => toast.warn(message);


  useEffect(()=> {
    const getaddress =  async ()=> {
  
        try {
          if (typeof window !== 'undefined') { 
          const ethereum = await( window as any).ethereum 
          if (ethereum) {

            console.log('Metamask detected ...');
            const addresses = await ethereum.request({ method: 'eth_requestAccounts' });
            const address = addresses[0];
            setAddress(address)
            if (address.length > 0) {
              geData(address)
              getUserEthBalance(address)

            }

                  } else {
                    console.log('No Ethereum browser detected!');
                    return;
                  }
                }
        } catch (error) {
          console.error(error)
          
        }
    }
    getaddress()
 
  }, [])

  const handleClick = async (path : string) => {
    try {

      const isRegResponse = await IsRegistered(address)
      if  (isRegResponse?.success)  {
        if (typeof isRegResponse.response !== 'string') {

          if (path === Routes.dashboard) {
           navigate(path)
            notifySuccess('Login Successfully')

          } else {
            notifyWarning('You are already registered, please login')

          }
          
        }
      } else {
        navigate(Routes.register)
      }

    } catch (error) {
      console.error(error)
      
    }
  }

  const geData =  async(address : string)=> {
    try {
      console.log(address)
      const res = await GetUserData(address)
      if (res?.success) {
        if (typeof res.response !== "string") {
          setUserData(res.response)
          console.log(res.response)
      
        }
      }
      const res2 = await getUserData(address)
      if (res2?.success) {
        if (typeof res2.response !== "string") {
          setUserContractData(res2.response)
          console.log(res2.response)
      
        }
      }
      
    } catch (error) {
      console.error(error)
      
    }
  }

  const getUserEthBalance = async(address : string )=> {
    try {
       let web3 

       const web3Response = await InitEthereumWeb3()
       if (web3Response.success) {
        if (typeof web3Response.response !== "string") {
          web3 = web3Response.response

        }
       }
       if (web3) {
         const balance = await web3.eth.getBalance(address);
         setBalance(Number(balance))
       } else {
         console.log('No Ethereum object detected!');
         return 0;
       }
 
    } catch (error) {
       console.error(error)
    }
  }
  return (
    <Web3Provider >

<ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
    <div className={style.home}>
      <TopBar setCanDisplay={setCanDisplay} />

   
     
   { address.length  > 0 ? <LoggerInterface  userContractData={userContractData!} handleClick={handleClick} address={address} balance={balance} userData={userData!} /> : <div className={style.homeElements}>

      <HeadHome setCanDisplay={setCanDisplay} />
      </div>}
      <CountdownTimer />
      <PreviewSpace />
      <Roadmap />
      <Faq />
      <SocialMedia />

      <Pop canDisplay={canDisplay} setCanDisplay={setCanDisplay} />
    </div>
    </Web3Provider>
  );
};

type props = {
  userContractData : UserData
  userData : UserBasicData
  balance : Number
  address : string
  handleClick :  (path: string) => Promise<void>
}

export const LoggerInterface = ({ userContractData ,  userData,   balance , address , handleClick}  : props)=> {
  const [imageSaved , setImage] = useState<string | null>(null)
     useEffect(()=> {
      const getImage = async ()=> {
          try {
            const imageResponse = await GetImage(address)
            if (imageResponse.success) {
              setImage(imageResponse.response)
            } else {
              setImage(null)
            }
            
        
        } catch (error) {
          
        }

      }
      getImage()
     }, [address])
  return (
    <div className={style.loggingInterface}>
       <div className={style.imageContainer}>
    {imageSaved ? 
        <Image alt='' style={{
          marginTop :"50px",
          borderRadius : imageSaved ? "30px" : "0"
        }} width={250} className={style.imageSaved} height={250} src={imageSaved } />
         : 
         
        <Image alt='' style={{
        }} width={250} height={250} src={image} />}
      </div>
     
      <div className={style.username}>
      {userData && userData.name || userContractData && userContractData.name}
      <p style={{
        fontSize : "12px",
        color : "grey"
      }}>{userData && userData.email}</p>

      </div>
      <div className={style.walletInfo}>
     <div className={style.balance}>
      <div className={style.left}>
        <SiBinance className={style.icon} />
        <div className={style.name}>
          Binance 
        </div>

      </div>
      <div className={style.amount}>
      {String((Number(balance) / 1e18).toFixed(4))} BNB
      </div>

     </div>
   

      </div>

      <div className={style.walletInfo}>
       <div className={style.addressWallet}>
       {address}
        </div>
        
      </div>

      <div className={style.buttons}>
        <button onClick={()=> handleClick(Routes.register)}>Register</button>
        <button className={style.dashboardButton} onClick={()=> handleClick(Routes.dashboard)}>Dashboard</button>

      </div>

    </div>
  )
}