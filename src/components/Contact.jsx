import '../styles/Contact.css';
import mailIcon from '../images/mail-outline.svg';
import homeIcon from '../images/home-outline.svg';

function Contact() {
    return (
        <section className='contact-container'>
            <div className='contact-body'>
                <div className='contact-header'>
                    <span className='contact-title'>Contact</span>
                    <div className='contact-underline'></div>
                </div>
                <section className='contact-information-container'>
                    <div className='contact-information-body'>
                        <p className='contact-text'>
                            <img src={mailIcon} alt='mail icon' className='contact-image'/>
                            <span className='contact-information-text'>cody.gilbert@slu.edu</span>
                        </p>
                        <div className='contact-text'>
                            <img src={homeIcon} alt='mail icon' className='contact-image'/>
                            <span className='contact-information-text'>Ritter Hall, Room 137 | 220 N Grand Blvd | St. Louis, MO 63108</span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Contact;