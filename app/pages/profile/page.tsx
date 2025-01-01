"use client"


import style from './profile.module.scss';
import { useEffect, useState } from 'react';
import { Camera, Edit } from 'tabler-icons-react';
import { TopDash } from '../../components/dashboard/top/top';
import { SideBardashboard } from '../../components/dashboard/top/side';
import defaultImage from '../../assets/p1.png';
import { toast, ToastContainer } from 'react-toastify';
import { Routes } from '../../routes/routes';
import { useRouter } from 'next/navigation';
import { GetImage, SaveImage } from '@/app/api/image';
import { GetUserData, SaveUserData } from '@/app/api/user';
import { UserBasicData } from '@/app/interface/interface';
import { GetUserAddress } from '@/app/utils/users';

export default function ProfileEditorPage  () {
  const [profileImage, setProfileImage] = useState<string | null>(defaultImage.src );
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

   const router = useRouter();

   const navigate = (path: string) => {
     router.push(path);
   };
    useEffect(()=> {
      const getAddress = async ()=> {
        const addressResponse = await GetUserAddress()
        if (addressResponse.success) {
          console.log("user address : " + addressResponse.response)
          getSavedData(addressResponse.response);
       
        }

      }
      getAddress()
    }, [])
   const getSavedData = async(address : string)=> {
    console.log("getting user data")

    const userProfileSaved = await GetImage(address)
    if (userProfileSaved.success) {
      setProfileImage(userProfileSaved.response);
    }
    const userBasicData = await GetUserData(address)
    if (userBasicData.success) {
      if (typeof userBasicData.response !== "string") {
        setUsername(userBasicData.response.name);
        setEmail(userBasicData.response.email);
      }
    
    }

    try {
      
    } catch (error) {
      console.error(error);
      
    }

   }
 
  const handleSubmit = async () => {
    try {

      const ethereum = (window as any).ethereum

      let addresses : string[] =[]
      console.log('Metamask detected ...');
      try {
         addresses = await ethereum.request({ method: 'eth_requestAccounts' });
    
      } catch (error) {
        console.log(error)
        
      }
      if (!addresses[0]) return

      const signature = await signMessageWithMetaMask()
      if (!signature) {
        notifyError('Failed to sign message with MetaMask.');
        return;
      }

      if (profileImage && profileImage !== defaultImage.src ) {
        const imageData = {
          address : addresses[0] ,
          image : profileImage,
        };
  
       const response = await SaveImage(imageData)
        console.log(response)
   
        if (response.success) {
          notifySuccess("Successfully saved")
          console.log('Profile updated successfully.');
        
        } else {
          notifyError('Failed to update profile.');
          console.error('Failed to update profile:', response.response);
        }
      } else 
       if (!username || !email) {
        notifyError('Please fill out both username and email fields.');
        return;
      
      }

      if (email && username) {
        const BasicData : UserBasicData = {
          address: addresses[0],
          name: username,
          email: email,
        }
   
         const userBasicDataResponse = await SaveUserData(BasicData)
         if (userBasicDataResponse.success) {
             notifySuccess("Successfully saved profile")
             console.log('Profile updated successfully.');

  
         localStorage.setItem(`email/${addresses[0]}`, email)
         localStorage.setItem(`username/${addresses[0]}`, username)
         }
  
    
      }

      setTimeout(()=> {
        navigate(Routes.dashboard)
      }, 500)
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const signMessageWithMetaMask = async () => {
    try {
      const ethereum = (window as any).ethereum
        if (!ethereum) {
            alert("Metamask is not installed !");
            return false;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        const userAddress = accounts[0];

        const message = "By signing this message, you confirm that you are the owner of the wallet address associated with this account. This action is required to authenticate your identity and will not incur any fees or execute any blockchain transactions.";

        const signature = await ethereum.request({
            method: "personal_sign",
            params: [message, userAddress],
        });

        if (signature) {
          return true
        }
      return false

    } catch (error) {
        console.error("Erreur lors de la signature :", error);
    }
};

  const handleUpload = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.click();

      input.addEventListener('change', async (event: Event) => {
        event.preventDefault()
        const target = event.target as HTMLInputElement;
        if (target?.files?.[0]) {
          const file = target.files[0];
          const base64 = await convertToBase64(file);
          setProfileImage(base64 as string);
        }
      });
    } catch (error) {
      console.log('Error during file upload:', error);
    }
  };

  const convertToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <section className={style.profileEditor}>
         <ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
      <div className={style.left}>
        <TopDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <SideBardashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      <div className={style.right}>
        <div className={style.top}>
          <div
            style={{
              position: 'relative',
            }}
            className={style.profileImage}
          >
            <div className={style.avatar_gradient}></div>
            <Camera
              style={{
                top: '40%',
                left: '40%',
                position: 'absolute',
                zIndex: 1000,
              }}
            />
            {profileImage ? (
              <img
                onClick={handleUpload}
                src={profileImage}
                alt="Profile"
                className={style.avatarSrc}
              />
            ) : (
              <div className={style.placeholderImage}>Upload Photo</div>
            )}
            <label className={style.editIcon}>
              <Edit size={20} />
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        <div className={style.form}>
          <div className={style.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <button className={style.submitButton} onClick={()=> handleSubmit()}>
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};
