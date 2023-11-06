import '../styles/About.css';
import codyTeaching from '../images/cody-teaching.jpg';

function About() {
    return (
        <section className="about">
            <section className='about-body'>
                <div className='about-cody'>
                    <div className='about-cody-top'>I am a fifth year Ph.D. student in mathematics at the University of Iowa. My advisor is Ryan Kinser. I am interested in problems in quiver representation theory and algebraic geometry. Specifically, I study moduli spaces of representations of algebras and their applications, as well as stability conditions on quiver representations. Recent work of mine includes <a href='https://arxiv.org/abs/2208.00336' className='about-link'>classifying moduli spaces of representations of clannish algebras</a> as well as <a href='https://arxiv.org/abs/2208.02445' className='about-link'>reducing the number of necessary inequalities to check when determining whether a stability function is totally stable for Dynkin quivers.</a></div>
                    <div className='about-cody-bottom'>My CV can be found <a href='https://drive.google.com/file/d/1sivFZbQEFhX5Up4WvopMd4eo_zWWlQCZ/view?pli=1' className='about-link'>here</a>. Please do not hesitate to email me in case you need any more information!</div>
                </div>
                <img src={codyTeaching} alt='cody teaching' className='about-image'/>
            </section>
            <section className='awards'>
                <div className='awards-header'>Awards</div>
                <div className='awards-body'>
                    <div className='award-container'>
                        <span className='award-title'><a href='https://grad.uiowa.edu/funding/fellowships/Iowa-recruitment' className='about-link'>Iowa Recruitment Fellowship</a></span>
                        <span className='award-subtitle'>Fall 2018 - Spring 2023</span>
                    </div>
                    <div className='award-container'>
                        <span className='award-title'><a href='https://grad.uiowa.edu/funding/fellowships/post-comp' className='about-link'>Post Comprehensive Research Fellowship</a></span>
                        <span className='award-subtitle'>Spring 2021</span>
                    </div>
                    <div className='award-container'>
                        <span className='award-title'><a href='https://grad.uiowa.edu/funding/fellowships/ballard-seashore' className='about-link'>Ballard and Seashore Dissertation Fellowship</a></span>
                        <span className='award-subtitle'>Spring 2023</span>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About;