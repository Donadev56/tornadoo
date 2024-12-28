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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getUserData, IsRegistered } from '../contract/regContract/getters';
import { UserData } from '../interface/interface';
import { SiBinance } from 'react-icons/si';
import { InitEthereumWeb3 } from '../web3/web3';
import { Routes } from '../routes/routes';
import { useNavigate } from 'react-router-dom';
import { ToastContainer  , toast} from 'react-toastify';
export const Home = () => {
  const [canDisplay, setCanDisplay] = useState(false);
  const [address, setAddress] = useState("");
  const [userData , setUserData] = useState<UserData | null> ()
  const [balance, setBalance] = useState(0)

  const navigate = useNavigate()


  const notifySuccess = (message: string) => toast.success(message);
  const notifyWarning = (message: string) => toast.warn(message);


  useEffect(()=> {
    const getaddress =  async ()=> {
  
        try {
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
      const res = await getUserData(address)
      if (res?.success) {
        if (typeof res.response !== "string") {
          setUserData(res.response)
          console.log(res.response)
      
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

   
     
   { address.length  > 0 ? <LoggerInterface  handleClick={handleClick} address={address} balance={balance} userData={userData!} /> : <div className={style.homeElements}>

      <HeadHome setCanDisplay={setCanDisplay} />
      </div>}

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
  userData : UserData
  balance : Number
  address : string
  handleClick :  (path: string) => Promise<void>
}

export const LoggerInterface = ({userData,   balance , address , handleClick}  : props)=> {
  return (
    <div className={style.loggingInterface}>
       <div className={style.imageContainer}>
        <LazyLoadImage width={250} src={image} />
      </div>
     
      <div className={style.username}>
      {userData && userData.name}
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
        <button onClick={()=> handleClick(Routes.dashboard)}>Dashboard</button>

      </div>

    </div>
  )
}