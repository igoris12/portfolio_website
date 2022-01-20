import Header from './Header';
import footerImage from '../img/footerImage.png';

const Contact = () => {
  return    (
        <section className='contactContainer'>
            <Header title='Contact' subtitle='Get in touch' />
            <div className="content">
                <article>
                    <p>asfas</p>
                    <p>adsfsdfasdfads</p>
                    <div className="links">
                        <a href="#">Email</a>
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
