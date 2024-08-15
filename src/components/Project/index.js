import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import IMG1 from '../../assets/images/imageproject.jpeg'
import IMG2 from '../../assets/images/imageproject-2.jpeg'
import IMG3 from '../../assets/images/TicTacToe.jpeg'
import IMG4 from '../../assets/images/proxyServer2.jpeg'
import IMG5 from '../../assets/images/dataTransfer.jpeg'

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
                                <img src={IMG4} alt=''/>
                            </div>
                            <h3>Web & Web Proxy</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Web-Server' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG5} alt=''/>
                            </div>
                            <h3>Pipelined Reliable Transfer Protocol</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Pipelined-Reliable-Transfer-Protocol' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG3} alt=''/>
                            </div>
                            <h3>Tic-Tac-Toe</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Tic-Tac-Toe' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG2} alt=''/>
                            </div>
                            <h3>Memory Lane App</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://csil-git1.cs.surrey.sfu.ca/it-just-works/cmpt-276' className='btn' target='blank'>Github</a>
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

