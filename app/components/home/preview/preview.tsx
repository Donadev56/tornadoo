"use client"

import { Eye, Video } from 'tabler-icons-react';
import style from './preview.module.scss';
import { useEffect, useState } from 'react';
import { AddressById, IsRegistered } from '../../../contract/regContract/getters';
import { toast, ToastContainer } from 'react-toastify';
import { Routes } from '../../../routes/routes';
import { useRouter } from 'next/navigation';
export const PreviewSpace = () => {
  const [query , setQuery] = useState("")
  const [isLoading , setIsLoading] = useState(false)
    const router = useRouter()

  const notifyWarning = (message: string) => toast.warn(message);

    const navigate =(path : string)=> {
      router.push(path)
    }
  useEffect(()=> {

  }, [])

  const checkIsReg = async () => {
    setIsLoading(true)
    try {
      let address : string = ""
      if (query.length === 0) return

      if (query.startsWith("0x")) {

        address = query
        
      } else {
        const addressResponse = await AddressById(Number(query))
        if (addressResponse.success) {
          address = addressResponse.response
        } else {
          notifyWarning('Invalid input')
          setIsLoading(false)
          return
        }
      }

      console.log("address", address)
      const isRegResponse = await IsRegistered(address)
      if (isRegResponse?.success) {
        if (typeof isRegResponse.response  !== "string") {
             if (isRegResponse.response) {
              
               localStorage.setItem("savedAddress", address)
               setTimeout(()=> {
                 navigate(Routes.dashboard)
               }, 500)
             }
             setIsLoading(false)

        } else {
          notifyWarning(isRegResponse.response)
          setIsLoading(false)

        }
      } else {
        notifyWarning('User not registered')
        setIsLoading(false)

      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)

      
    }
  }

  const handleDemo = async ()=> {
      setQuery("3")
      await checkIsReg()
  }
  return (
    <section className={style.preview}>
      <ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
      <div className={style.text}>
        <div className={style.title}>Account preview</div>

        <div className={style.des}>
          Look up any Turnadoo USDT member account in preview mode. Enter ID or
          USDT address to preview or click Demo to view a random account.
        </div>
      </div>

      <div className={style.previewContainer}>
        <div className={style.containerText}>Enter ID or USDT wallet</div>

        <div className={style.inputContainer}>
          <input value={query} onChange={(e)=> setQuery(e.target.value)} type='text' placeholder='Enter ID or USDT address' />
        </div>

        <div className={style.buttons}>
          <button  className={style.demo}>
            Demo <Video  onCanPlay={handleDemo}/>{' '}
          </button>
          <button onClick={()=> checkIsReg()} className={style.previewBtn}>
            Preview <Eye />{' '}
          </button>
        </div>
      </div>

      {   isLoading && 

<div className={style.loaderContainer}><div className={style.loader} /></div>
}  
    </section>
  );
};
