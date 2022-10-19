import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xc5fw3d', 'template_qe6hs0m', form.current, 'd1wHZSprm7oL78Z03')
    e.target.reset();
    alert("E-mail sent");  
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
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>Lorem Ipsum hello lorem ipsum lorem ipsum lorfem ispsum lorem ipsum lorem ipsum lorem ipsum lorem iupsum

                    </p>
                    </div>
                    <div className='contact-form'>
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
                    
                    </div>

                </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact