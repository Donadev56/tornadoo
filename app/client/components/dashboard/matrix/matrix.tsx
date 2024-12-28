import { ArrowNarrowRight, QuestionMark } from 'tabler-icons-react';
import style from './matrix.module.scss';
import blur1 from '../../../assets/blur_orange2.png';
import greenBlur from '../../../assets/blurs/green_blur.png';
import blur2 from '../../../assets/blue_blur.png';
import { ToastContainer, toast } from 'react-toastify';

export const Matrix = () => {

 
  const notifyWarning = (message: string) => toast.warn(message);

  const notifyUser = (name: string) =>{
    notifyWarning(`${name} is not available yet .`)
  }


  return (
    <section className={style.matrixSection}>
          <ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
      <div className={style.matrixTitle}>
        Tornadoo Programs{' '}
        <span className={style.info}>
          info <QuestionMark className={style.questionMark} />
        </span>
      </div>
      <div className={style.matrixContainer}>
        <div
          style={{
            backgroundImage: `url(${blur1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={style.matrix}
        >
          <div className={style.matrixHead}>
            <div className={style.titleLeft}>F CLUB</div>

            <div className={style.totalGain}>0 USDT</div>
          </div>

          <div className={style.grids}>
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className={style.grid}></div>
            ))}
          </div>

          <button onClick={()=> notifyUser("F CLUB")} className={style.previewBtn}>
            Preview <ArrowNarrowRight />
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${greenBlur})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={style.matrix}
        >
          <div className={style.matrixHead}>
            <div className={style.titleLeft}>X CLUB</div>

            <div className={style.totalGain}>0 USDT</div>
          </div>

          <div className={style.grids}>
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className={style.grid}></div>
            ))}
          </div>

          <button onClick={()=> notifyUser("X CLUB")} className={`${style.xClub} ${style.previewBtn}`}>
            Preview <ArrowNarrowRight />
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${blur2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={style.matrix}
        >
          <div className={style.matrixHead}>
            <div className={style.titleLeft}>GLOBAL SLOT</div>

            <div className={style.totalGain}>0 USDT</div>
          </div>

          <div className={style.grids}>
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className={style.grid}></div>
            ))}
          </div>

          <button  onClick={()=> notifyUser("GLOBAL SLOT")} className={`${style.global} ${style.previewBtn}`}>
            Preview <ArrowNarrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
