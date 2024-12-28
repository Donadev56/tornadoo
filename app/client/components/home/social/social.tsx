import { BrandTelegram, BrandYoutube, Mail } from 'tabler-icons-react';
import style from './socialMedia.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../../../assets/T7.png';

import { SiBinance, SiWhatsapp } from 'react-icons/si';
export const SocialMedia = () => {
  const links = [
    {
      icon: <SiWhatsapp size={17} />,
      label: 'WhatsApp',
      url: 'https://whatsapp.com/channel/0029VazI1wKKQuJQyppGrh40',
    },
    {
      icon: <BrandTelegram size={17} />,
      label: 'Telegram',
      url: 'https://t.me/TornaDoo_io',
    },
    {
      icon: <BrandYoutube size={17} />,
      label: 'YouTube',
      url: 'https://www.youtube.com/@TornaDoo_io',
    },
    {
      icon: <Mail size={17} />,
      label: 'Email',
      url: 'mailto:tornadooteam24h@gmail.com',
    },
  ];

  return (
    <section className={style.socialMedia}>
      <div className={style.image}>
        <LazyLoadImage width={100} src={image} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '10px',
          gap: '10px',
          color: '#fff',
          fontWeight: 'bold',
        }}
        className={style.centerbottom}
      >
        <div className={style.bnbImage}>
          <SiBinance size={35} />
        </div>

        <div className={style.titlebottom}>opBNB Blockchain</div>
      </div>
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '25px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}
      >
        Smart contract info
      </button>

      <h2 className={style.title}>Social Media </h2>
      <div className={style.links}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={style.link}
          >
            <div className={style.icon}>{link.icon}</div>
            <span className={style.label}>{link.label}</span>
          </a>
        ))}
      </div>

      <p
        style={{
          color: '#666',
          width: '80%',
        }}
      >
        Tornadoo © 2024 all right reserved. v3.0.0 Privacy Policy
      </p>
    </section>
  );
};
