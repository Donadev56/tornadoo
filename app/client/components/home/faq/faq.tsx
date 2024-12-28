import { useState } from 'react';
import style from './faq.module.scss';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';

export const Faq = () => {
  const faqs = [
    {
      question: 'Why is Tornadoo the best alternative to trading?',
      answer: `
                - The cryptocurrency rate has no effect on the sustainability of the rewards.
                - The minimum entry threshold is equal to just a couple of cups of coffee.
                - There is no need to wait for payouts - funds come instantly to your wallet.
                - Rewards always depend only on the actions of the participant.
                - The participant can receive the reward indefinitely, as long as they expand their team.
            `,
    },
    {
      question: 'Is Tornadoo safe?',
      answer: `
                The functioning of Tornadoo is fully blockchain-protected. Participants leave no personal data 
                and have only their cryptocurrency wallet address connected via WEB 3.0 technology as a login. 
                The entire Tornadoo infrastructure is built on the operation of tamper-proof smart contracts, 
                and the website is simply a projection of data from the blockchain. It makes no sense to hack into the website.
            `,
    },
    {
      question: 'How much does it cost to participate in Tornadoo USDT?',
      answer: `
                Participation in Tornadoo USDT is the automatic activation of NFT levels in two marketing programs. 
                Activation costs start at 2.5 USDT, not including minimum fees from the Smart Chain (opBNB Chain) blockchain 
                in the opBNB cryptocurrency.
            `,
    },
    {
      question: 'What do I need to get started in Tornadoo USDT?',
      answer: `
                No special knowledge is required. Every participant must have their own smartphone or laptop 
                with an installed app (Trust Wallet, TokenPocket, or MetaMask), which has a personal Smart Chain (opBNB Chain) 
                cryptocurrency wallet set up. To register, you need to have at least a minimum amount - 2.5 USDT, 
                and some opBNB for a blockchain fee.
            `,
    },
    {
      question: 'How do I start?',
      answer: `
                - Register on the Tornadoo.io website to gain access to the Tornadoo Academy and Community.
                - Study the instructions, guides, and articles on marketing so you're ready to go.
                - If you have questions and need assistance, get help from other members in the Tornadoo Telegram Group.
            `,
    },
    {
      question: 'Where will my profit come from?',
      answer: `
                All earnings to your wallet will only come from the activity of other members.
            `,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={style.faq}>
      <h2 className={style.title}>Frequently Asked Questions</h2>
      <div className={style.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={style.faqItem}>
            <div className={style.faqQuestion} onClick={() => toggleFaq(index)}>
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </div>
            {openIndex === index && (
              <div className={style.faqAnswer}>
                {faq.answer.split('\n').map((line, idx) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
