import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import IMG1 from '../../assets/images/imageproject.jpeg'

const Project = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(
            () => setLetterClass('text-animate-hover'), 
            3000
          );
      }, [])

    return (
        <>
            <div className='container project-page'>
                <div className='text-zone-p'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='divi'>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG1} alt=''/>
                            </div>
                            <h3>Memory Lane App</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/ClinicDatabase' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                    <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG1} alt=''/>
                            </div>
                            <h3>Database Project</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/ClinicDatabase' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                    </div>
                
                </div>
            
                
            <Loader type='pacman'/>
        </>
    )
}

export default Project

