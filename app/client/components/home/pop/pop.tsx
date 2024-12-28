import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './pop.module.scss';
import image from '../../../assets/T7.png';
import pdf2 from '../../../assets/pdfs/Royal.pdf';
import pdf1 from '../../../assets/pdfs/tornadoo.pdf';
import { BookDownload } from 'tabler-icons-react';

const pdfLinks = [
  { href: pdf1, label: 'Tornadoo v1', buttonName: 'Matrix version 1' },
  { href: pdf2, label: 'Tornadoo v1 Royalty', buttonName: 'Royalty version 1' },
];

type props = {
  canDisplay: boolean;
  setCanDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Pop = ({ canDisplay, setCanDisplay }: props) => {
  const handleDownload = (href: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!canDisplay) return;

  return (
    <section className={style.Pop} aria-labelledby='pop-header'>
      <div
        className={style.overlay}
        onClick={() => {
          setCanDisplay(false);
        }}
      ></div>
      <div className={style.container}>
        <header className={style.header} id='pop-header'>
          <LazyLoadImage width={150} src={image} alt='Project overview' />
        </header>

        <p className={style.text}>
          Download the PDFs to understand our project better.
        </p>

        <div className={style.pdfs}>
          {pdfLinks.map(({ href, label, buttonName }, index) => (
            <div key={index} className={style.pdf}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Download ${label}`}
                className={style.iconLink}
              >
                <BookDownload className={style.icon} />
              </a>
              <button
                className={style.downloadButton}
                onClick={() => handleDownload(href)}
              >
                {buttonName}
              </button>
            </div>
          ))}
        </div>

        <div className={style.buttonClose}>
          <button
            onClick={() => {
              setCanDisplay(false);
            }}
            aria-label='Close popup'
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};
