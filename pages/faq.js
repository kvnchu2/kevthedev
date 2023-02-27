import React, {useState} from "react";
import Accordion from './components/Accordion.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Faq = () => {

  const [ faqAnswerOne, setFaqAnswerOne ] = useState(false);
  const [ faqAnswerTwo, setFaqAnswerTwo ] = useState(false);

  const [ state, setState] = useState({
    block1: true,
    block2: false,
    block3: false
  });

  const toggle = (block) => {
    setState({ [block]: ![block] });
    console.log(block);
    console.log(state);
  };

  const accordionList = [{ block: 'block1', title: 'First Accordion' }, { block: 'block2', title: 'Second Accordion' }, { block: 'block3', title: 'Third Accordion' }];
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Frequently Asked Questions</h1>
    </section>

    {/* <section id="faq">
        <div className="faq-title">
            <h3>Questions frequently asked by clients</h3>
        </div>
    
    <div className="faq-section">
      <div className="faq-question" onClick={() => setFaqAnswerOne(!faqAnswerOne)}>
        <FontAwesomeIcon className="fa-chevron-down" icon={faChevronDown} />
        <p>How long is an Active Rehabilitation session?</p>
      </div>
      {faqAnswerOne ? <div className="faq-answer">
        <p>Active Rehabilitation sessions are typically 45 minutes long but can be shorter or longer depending on your circumstances.</p>
      </div> : ""}
    </div>

    <div className="faq-section">
      <div className="faq-question" onClick={() => setFaqAnswerTwo(!faqAnswerTwo)}>
        <FontAwesomeIcon className="fa-chevron-down" icon={faChevronDown} />
        <p>How many sessions of Active Rehabilitation am I approved for?</p>
      </div>
      {faqAnswerTwo ? <div className="faq-answer">
        <p>With ICBC, you are pre-approved for 12 early access treatments within 12 weeks of your accident. After this pre-approval period has ended, and the Kinesiologist has determined you need more treatment, a treatment plan will be submitted to ICBC to request for more sessions.</p>
      </div> : ""}
    </div>
        
    
    </section> */}

    
    <div className="accordion-container">
      <h1>React Accordion</h1>
      <dl className="accordion">
        {
          accordionList.map((item) => (
            <Accordion title={item.title} onClick={() => toggle(item.block)} expand={state[item.block]} />
          ))
        }
      </dl>
    </div>;
  </>
  );
};

export default Faq;


