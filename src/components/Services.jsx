import '../styles/Services.css';

function Services() {
    return (
        <section className='section-container' id='services'>
            <section className='services-container'>
                <div className='services-header'>
                    <span className='services-title'>Services</span>
                    <div className='services-underline'></div>
                </div>
                <section className='services-body'>
                    <div className='service-instance'>
                        <p className='services-name'><a target="_blank" rel="noopener" href='https://meetings.ams.org/math/fall2021c/meetingapp.cgi/Session/3832' className='link research-link'>AMS Sectional Meeting Special Session Organizer</a></p>
                        <p className='service-description'>The American Mathematical Society sponsors or co-sponsors several types of scientific meetings each year. Typically there are two sectional meetings in each section each year. These are organized by the cognizant Associate Secretary. A Special Session at a Society meeting is a collection of papers devoted to a single topic or area of mathematics.</p>
                        <p className='service-description'>Co-organized AMS Sectional Meeting Special Session, October 2021, on Quiver Representations: Bridging Theory and Application. AMS Fall Central Sectional Meeting (virtual).</p>
                    </div>
                    <div className='service-instance right-align'>
                        <p className='services-name'><a target="_blank" rel="noopener" href='https://sites.google.com/view/uiowadrp/home' className='link research-link'>Directed Reading Program</a></p>
                        <p className='service-description'>The Directed Reading Program (DRP) is a student-run initiative to pair undergraduate students with graduate student mentors to work on independent study projects in mathematics. This program seeks to involve undergraduates in the larger mathematics community, foster independent learning strategies, and develop mathematical communication skills.</p>
                        <p className='service-description'>I am currently an organizer for DRP (Fall 2023) and was a graduate mentor in Spring 2022.</p>
                    </div>
                    <div className='service-instance'>
                        <p className='services-name'><a target="_blank" rel="noopener" href='https://math.uiowa.edu/graduate-program/math-graduate-board' className='link research-link'>Math Graduate Board</a> and <a target="_blank" rel="noopener" href='https://gss.grad.uiowa.edu/' className='link research-link'>Graduate Student Senate</a></p>
                        <p className='service-description'>The Math Graduate Board (MGB) exists to provide a forum for departmental discourse, to organize departmental events, and to generally enrich the graduate mathematics experience at the University of Iowa. It is an official university student organization established and led entirely by math graduate students.</p>
                        <p className='service-description'>The Graduate Student Senate (GSS) is comprised of grad students, for grad students. It is the duly constituted collegiate association of the Graduate College and is the primary representative, administrative, and service organization for the graduate students at the University of Iowa. It serves as the voice of the graduate student population to the university administration, faculty, and to all other organizations at the University, and within the Iowa City community. </p>
                        <p className='service-description'>Positions held: Webdesigner (2019, MGB), Travel Fund Committee (2022, GSS) and Graduate Student Employment Committee (2022, GSS).</p>
                    </div>
                    <div className='service-instance right-align'>
                        <p className='services-name'><a target="_blank" rel="noopener" href='https://math.uiowa.edu/diversity-and-outreach/sonia-kovalevsky-high-school-mathematics-day' className='link research-link'>Sonia Kovalevsky High School Mathematics Day</a></p>
                        <p className='service-description'>The University of Iowa Mathematics Department organizes an annual Sonia Kovalevsky High School Mathematics Day for high-school aged women, their parents or guardians, and their teachers. The goal of this day is to encourage young women to pursue careers in math and science. We do this by providing female role models and educating the students about the limitless possibilities of fields involving mathematics.</p>
                        <p className='service-description'>I was an organizer for SK Day 2019.</p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Services;