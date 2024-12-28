import style from './profile.module.scss';
import { useState } from 'react';
import { Camera, Edit } from 'tabler-icons-react';
import { TopDash } from '../../components/dashboard/top/top';
import { SideBardashboard } from '../../components/dashboard/top/side';
import defaultImage from '../../assets/p1.png';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';

export const ProfileEditorPage = () => {
  const [profileImage, setProfileImage] = useState<string | null>(defaultImage);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
   const navigate = useNavigate()
  const handleSubmit = async () => {
    try {
      if (!profileImage ) {
        alert('Please complete all fields.');
        return;
      }

      const ethereum = (window as any).ethereum

      let addresses : string[] =[]
      console.log('Metamask detected ...');
      try {
         addresses = await ethereum.request({ method: 'eth_requestAccounts' });
    
      } catch (error) {
        console.log(error)
        
      }
      if (!addresses[0]) return
      const body = JSON.stringify({
        address : addresses[0] ,
        image : profileImage,
      });

      // Effectuez la requête POST
      const response = await fetch('https://images.tornadoo.io/images/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      console.log(response)

      if (response.ok) {
        notifySuccess("Successfully saved")
        console.log('Profile updated successfully.');
      
      } else {
        notifyError('Failed to update profile.');
        console.error('Failed to update profile:', response.statusText);
      }
      localStorage.setItem(`email/${addresses[0]}`, email)
      localStorage.setItem(`username/${addresses[0]}`, username)
      setTimeout(()=> {
        navigate(Routes.dashboard)
      }, 500)
    } catch (error) {
      console.error('An error occurred:', error);
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

          <button className={style.submitButton} onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};
