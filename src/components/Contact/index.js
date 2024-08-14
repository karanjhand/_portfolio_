import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = 'service_xc5fw3d';
    const TEMPLATE_ID = 'template_qe6hs0m';
    const PUBLIC_KEY ='e2TfhotLOnyk4V4m5';
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          console.log('SUCCESS!');
          alert("E-mail sent");  
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("E-mail not sent");  
        },
      );
    e.target.reset();
    
  };


    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(
            () => setLetterClass('text-animate-hover'), 
            3000
          );
      }, [])

    return(
        <>
            <div className='container contact-page'>
                    <div className='content-text'>
                        <h1>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            />
                        </h1>
                        <p>
                            Please feel free to contact me via email <b>karanjhand99@gmail.com</b>

                        </p>
                    </div>

                    <div className='contact'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex'>
                                <div>
                                    <input type='text' name="name" placeholder="Name" required/>
                                </div>
                                <div>
                                <input type='email' name="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className='subject'>
                                <input type="text" placeholder='Subject' name='subject' required/>
                            </div>
                            <div className='message'>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </div>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </form>
                        
                    </div>

                    {/* <div className='contacto-form'>
                         <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                         </form>
                    </div> */}

                </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact