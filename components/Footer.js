import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
  return (
    <footer className='pb-10 bg-primary-dark text-word font-open-sans space-y-2'>
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/sw-chum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}  className='text-secondary h-6 cursor-pointer'/>
        </a>
        <a
          href="https://github.com/daniel-chum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare}  className='text-secondary h-6 cursor-pointer'/>
        </a>
      </div>
      <p className='text-center font-semibold'>szewen.chum@gmail.com</p>
    </footer>
  );
}

export default Footer;