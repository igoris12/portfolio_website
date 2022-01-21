import Header from './Header';
import footerImage from '../img/footerImage.png';
import {AiFillLinkedin} from 'react-icons/ai';
import {MdMail} from 'react-icons/md';

const Contact = () => {
  return    (
        <section className='contactContainer'>
            <Header title='Contact' subtitle='Get in touch' />
            <div className="content">
                <article>
                    <p>Contacting me you can by Email and Linkedin links below.</p>
                    <p>You can write to me at any time.</p>
                    <div className="links">
                        <a href="mailto:igoris.x@inbox.lt"><MdMail/>igoris.x@inbox.lt</a>
                        <a href="https://www.linkedin.com/in/igoris-ivanovas-839645194"  target="_blank"><AiFillLinkedin/>Linkedin</a>
                    </div>
                </article>
                <div className="image">
                    <img src={footerImage} alt="footerImage" />
                </div>
            </div>
        </section>
        )     
};

export default Contact;
