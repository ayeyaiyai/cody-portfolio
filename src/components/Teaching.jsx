import '../styles/Teaching.css';

function Teaching() {
    return(
        <section className='section-container' id='teaching'>
            <section className='teaching-body'>
                <div className='teaching-header'>
                    <span className='teaching-title'>Teaching</span>
                    <div className='teaching-underline'></div>
                </div>
                <section className='teaching-statement-body'>
                    <p className='teaching-statement'>Despite the inherent beauty of mathematics, it is a subject that is often maligned by students. As a teacher, it's not uncommon to hear phrases like "I'm not a math person'' or "I'm just bad at math'' from discouraged students. When students are convinced their success in math is beyond their control, it isn't surprising to see why a prevalent attitude towards the subject seems to be one of endurance rather than appreciation; however, as a past convert from math-sufferer to math-appreciator, I know every student can be successful at problem solving in mathematics! While attaining success in math does require work and effort from the student, I believe an equal share is contingent on the teacher, who is responsible for understanding their students as well as fostering an active, inclusive work environment where students, and their needs, are central to the learning process. As a teacher, it is my job to help students become active learners who have the means to control their success, both in and out of the classroom.</p>
                    <p className='full-teaching-statement'>My full teaching statement can be found <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1hO82b6dxz3sQkWZtKGNDaiAcwlmnLVHJ/view' className='link'>HERE.</a></p>
                </section>
                <div className='teaching-header' id='classes-header'>
                    <span className='teaching-title'>Classes</span>
                    <div className='teaching-underline'></div>
                </div>
                <section className='classes-container'>
                    <div className='classes-body'>
                        <div className='classes-header'>Primary Instructor, University of Iowa</div>
                        <div className='classes-list'>
                            <p className='class-paragraph'>MATH 1005: College Algebra, Fall 2021.</p>
                        </div>
                    </div>
                    <div className='classes-body'>
                        <p className='classes-header'>Graduate Teaching Assistant, University of Iowa</p>
                        <div className='classes-list'>
                            <p className='class-paragraph'>MATH 3720: Introduction to Abstract Algebra I, Fall 2022.</p>
                            <p className='class-paragraph'>MATH 1550: Engineer Math I: Single Variable Calculus, Fall 2020.</p>
                            <p className='class-paragraph'>MATH 1560: Engineer Math II: Multivariable Calculus, Spring 2020.</p>
                            <p className='class-paragraph'>MATH 1850: Calculus I, Fall 2019.</p>
                            <p className='class-paragraph'>MATH 1460: Calculus for the Biological Sciences, Spring 2019.</p>
                            <p className='class-paragraph'>MATH 1440: Mathematics for the Biological Sciences, Fall 2018.</p>
                        </div>
                    </div>
                    <div className='classes-body'>
                        <p className='classes-header'>Teaching Practicum, University of Iowa</p>
                        <div className='classes-list'>
                            <p className='class-paragraph'>MATH 5000: Abstract Algebra I, Fall 2022.</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Teaching;