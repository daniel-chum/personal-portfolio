import cn from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import s from './LandingPage.module.css'

const LandingPage = (props) => {

    return (
      <section
        className={
          cn('h-screen px-6 md:px-12 bg-primary transition transform ease-in-out duration-1000',
            'flex justify-center items-center',
            { "-translate-y-full": props.scrolled },

          )
        }
        onWheel={props.scrollDown}
        onTouchStart={props.scrollDown}
        onTouchMove={props.scrollDown}
      >
        <div className="font-open-sans text-word h-1/2">
          <h2 className="text-secondary-dark md:text-xl">Hello! My name is</h2>
          <h1 className={cn(s.catch1, "pt-6 font-lora font-medium text-5xl md:text-7xl lg:text-8xl")}>
            <span>Daniel Chum.</span>
            <br />
            <span className='block pt-1'>I am a Software Engineer.</span>
          </h1>
          <h3 className={cn(s.catch2, "text-xl md:text-2xl lg:text-3xl tracking-tight font-light text-secondary pt-10")}>I analyze problems and implement solutions with code, through and through.</h3>
          <div className={cn(s.catch3, 'flex flex-col items-center pt-16')}>
            <h2 className='text-md lg:text-lg text-secondary-dark'>See more about me.</h2>
            <div className='pt-4 animate-arrowDown' onClick={props.scrollDown}>
              <FontAwesomeIcon icon={faAngleDoubleDown} size='6x' className='text-secondary-dark h-6 cursor-pointer'/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default LandingPage;
