import { useEffect, useState } from 'react';
import { TopBar } from '../../components/home/topBar/topBar';
import style from './reg.module.scss';
import { GetUserAddress } from '../../utils/users';
import { ToastContainer, toast } from 'react-toastify';
import { InitEthereumWeb3 } from '../../web3/web3';
import { useLocation, useNavigate } from 'react-router-dom';
import { IsRegistered } from '../../contract/regContract/getters';
import { RegisterUser } from '../../contract/regContract/setters';
import {  Routes } from '../../routes/routes';
import { useWeb3 } from '../../web3/Web3Context';
export const RegPage = () => {
  const [canDisplay, setCanDisplay] = useState(false);
  const [address, setAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [hasSponsor, setHasSponsor] = useState(false);
  const [hasFees, setHasFees] = useState(false);
  const [canRegistered, setCanRegistered] = useState(false);
  const [sponsorAddress, setSponsorAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [isLoading , setIsLoading] = useState(false);

  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const notifyWarning = (message: string) => toast.warn(message);
  const notifyInfo = (message: string) => toast.info(message);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate()

  const web3 = useWeb3()
  useEffect(()=> {
     if (web3.account) {
       console.log("User connected: ", web3.account)
     }
  }, [web3])
  const register = async () => {
    setIsLoading(true)
    try {
      if (!canRegistered) {
        notifyWarning('Please ensure you have entered all required fields');
        setIsLoading(false)

      }
      
      if (!sponsorAddress) {
        notifyWarning('Please enter sponsor address');
        setIsLoading(false)

        return;
      }
      const registration = await RegisterUser(sponsorAddress.trim(), userName);
      if (registration.success) {
        notifySuccess('User registered successfully');
        setTimeout(() => {
          navigate(Routes.dashboard);

        }, 1000);
        setIsLoading(false)
      } else {
        setIsLoading(false)
        notifyError(`Failed to register user: ${registration.response}`);
        console.error('Error registering user:', registration.response);
      }
    } catch (error) {
        setIsLoading(false)
      notifyError(`Error registering user: ${error}`);
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    const getAddress = async () => {
      try {
        if (address.length > 0) {
          return;
        }
        const addresses = await GetUserAddress();
        if (addresses.success && addresses.response) {
          notifySuccess(
            `connceted with : ${addresses.response.slice(0, 7)}...`
          );
          setAddress(addresses.response);
          getUserBalance(addresses.response);
          checkUserRegistration(addresses.response);
        } else {
          notifyError(`Failed to fetch user address: ${addresses.response}`);
        }
      } catch (error) {
        console.error('Error fetching user address:', error);
      }
    };
    getAddress();
    changeNetwork();
    getSponsor();
  }, []);

  const checkUserRegistration = async (userAddress: string) => {
    try {
      const isReg = await IsRegistered(userAddress);
      console.log('Is user registered:', isReg?.response);

      if (isReg?.success && typeof isReg.response === 'boolean') {
        setIsAlreadyRegistered(isReg.response);
      }
    } catch (error) {
      console.error('Error checking user registration:', error);
      notifyError(`Failed to check user registration: ${error}`);
    }
  };

  const changeNetwork = async () => {
    const ethereum = (window as any).ethereum;
    const currentChainId = await ethereum.request({ method: 'eth_chainId' });
    console.log('Current chain ID:', currentChainId);
    if (currentChainId === '0xcc' || 204) {
      console.log('Current network is opBNB Mainnet.');
      setIsConnected(true);
    } else {
      console.log(
        'Current network is not OBNB Mainnet. Switching to OBNB Mainnet...'
      );

      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xcc' }],
      });

      console.log('Switched to OBNB Mainnet.');
    }
  };

  const getUserBalance = async (userAddress: string) => {
    try {
      const web3Response = await InitEthereumWeb3();
      if (!userAddress) {
        notifyError('User address not found');
        return;
      }

      const web3 = web3Response.response;
      if (!web3) {
        notifyError('Failed to initialize Ethereum web3');
        return;
      }
      const balance = await web3.eth.getBalance(userAddress);
      if (balance > 0) {
        setHasFees(true);
        setCanRegistered(true)
      } else {
        console.log('No fees found for this user');
      }
    } catch (error) {
      console.error('Error fetching user balance:', error);
    }
  };

  const getSponsor = async () => {
    try {
      const sponsor = queryParams.get('ref');
      if (sponsor) {
        setHasSponsor(true);
        setSponsorAddress(sponsor);
      } else {
        console.log('No sponsor found in query parameters');
      }
    } catch (error) {
      console.error('Error fetching user sponsor:', error);
    }
  };

  useEffect(() => {
    if (isConnected && hasFees && hasSponsor && address.length > 0) {
      setCanRegistered(true);
    }
  }, [isConnected, hasFees, hasSponsor, address]);
  useEffect(() => {
    if (isAlreadyRegistered) {
      notifyInfo(
        'You have already registered. Please login to access the platform.'
      );
    }
  }, [isAlreadyRegistered]);

  return (
    <div className={style.registration}>
      <div className={style.blur}></div>

      <TopBar canDisplay={canDisplay} setCanDisplay={setCanDisplay} />
      <div className={style.regTitle}>
        Registration <br /> in Tornadoo
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.header}>
            <h1>Sponsor address</h1>
            <input
              value={sponsorAddress}
              onChange={(e) => setSponsorAddress(e.target.value)}
              type='text'
              placeholder='sponsor address'
            />
            {sponsorAddress && (
              <>
                <h1>Your username</h1>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type='text'
                  placeholder='name'
                />
              </>
            )}
          </div>
          {!sponsorAddress && (
            <div className={style.hasSponsorCard}>
              <div>Do you have a sponsor ? </div>
              <div className={style.buttons}>
                <button className={style.cancelBtn}>Yes</button>
                <button className={style.confirmBtn}>Get a sponsor</button>
              </div>
            </div>
          )}
          <div className={style.steps}>
            <label
              style={{
                color: address.length > 0 ? 'darkorange' : 'white',
              }}
            >
              <div
                style={{
                  borderColor: address.length > 0 ? 'darkorange' : 'white',
                }}
                className={style.circle}
              >
                {' '}
                <div
                  style={{
                    backgroundColor:
                      address.length > 0 ? 'darkorange' : 'transparent',
                    color: address.length > 0 ? 'darkorange' : 'transparent',
                  }}
                  className={style.dot}
                ></div>{' '}
              </div>
              address :{' '}
              {address && (
                <div className={style.address}> {address.slice(0, 10)}... </div>
              )}
            </label>
            <label
              style={{
                color: isConnected ? 'darkorange' : 'white',
              }}
            >
              <div
                style={{
                  borderColor: isConnected ? 'darkorange' : 'white',
                }}
                className={style.circle}
              >
                {' '}
                <div
                  style={{
                    backgroundColor: isConnected ? 'darkorange' : 'transparent',
                    color: isConnected ? 'darkorange' : 'transparent',
                  }}
                  className={style.dot}
                ></div>{' '}
              </div>
              Connected
            </label>
            <label
              style={{
                color: hasFees ? 'darkorange' : 'white',
              }}
            >
              <div
                style={{
                  borderColor: hasFees ? 'darkorange' : 'white',
                }}
                className={style.circle}
              >
                {' '}
                <div
                  style={{
                    backgroundColor: hasFees ? 'darkorange' : 'transparent',
                    color: hasFees ? 'darkorange' : 'transparent',
                  }}
                  className={style.dot}
                ></div>{' '}
              </div>
              Fees
            </label>
            <label
              style={{
                color: canRegistered ? 'darkorange' : 'white',
              }}
            >
              <div
                style={{
                  borderColor: canRegistered ? 'darkorange' : 'white',
                }}
                className={style.circle}
              >
                {' '}
                <div
                  style={{
                    backgroundColor: canRegistered
                      ? 'darkorange'
                      : 'transparent',
                    color: canRegistered ? 'darkorange' : 'transparent',
                  }}
                  className={style.dot}
                ></div>{' '}
              </div>
              Registration
            </label>
          </div>
          <button onClick={register} className={style.checkButton}>
            Register
          </button>
        </div>
      </div>
{   isLoading && 

<div className={style.loaderContainer}><div className={style.loader} /></div>
}      <ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
    </div>
  );
};
