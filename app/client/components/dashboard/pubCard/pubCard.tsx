import { Bell, Link, Message2, Pencil } from 'tabler-icons-react';
import style from './pubcard.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import { Routes } from '../../../routes/routes';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: ' school',
    headElement: <Pencil className={style.icon} />,
    description: 'Learn Tornadoo',
    path: Routes.profile,
  },
  {
    title: 'Notification',
    headElement: <Bell className={style.icon} />,
    description: 'Notification center',
    path: null,
  },
  {
    title: 'Message',
    headElement: <Message2 className={style.icon} />,
    description: 'message your freinds ',
    path: null,
  },
  {
    title: 'Social',
    headElement: <Link className={style.icon} />,
    description: 'Invite new friends',
    path: null,
  },

 
];
export const ActionCard = () => {

  
    const navigate = useNavigate()
  const notifyWarning = (message: string) => toast.warn(message);

  const notifyUser = (name: string) =>{
    notifyWarning(`${name} is not available yet .`)
  }



  return (
    <section className={style.cardContainer}>
      <div className={style.cards}>
        {cards.map((card, index) => (
          <div onClick={()=> {card.path ? navigate(card.path) : notifyUser(card.title)}} key={index} className={style.card}>
            <div className={style.cardhead}>
              <div className={style.containerHead}>{card.headElement}</div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        theme='dark'
        style={{
          borderRadius: '10px',
        }}
      />
    </section>
  );
};
