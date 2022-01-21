import Header from './Header';
import footerImage from '../img/footerImage.png';

const Contact = () => {
  return    (
        <section className='contactContainer'>
            <Header title='Contact' subtitle='Get in touch' />
            <div className="content">
                <article>
                    <p>For contacting me you can by Email and Linkedin link below.</p>
                    <p>You can write to me at any time.</p>
                    <div className="links">
                        <a href="#">igoris.x@inbox.lt</a>
                        <a href="#">Linkedin</a>
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
