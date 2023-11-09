import { useState } from 'react';
import '../styles/Research.css';
import downArrow from '../images/chevron-down-outline.svg';

function Research() {
    const [isPublicationsVisible, setIsPublicationsVisible] = useState(false);
    const [isInvitedTalksVisible, setIsInvitedTalksVisible] = useState(false);
    const [isWorkshopsVisible, setIsWorkshopsVisible] = useState(false);

    const toggleVisibility = (container) => {
        switch (container) {
            case 'publications':
                setIsPublicationsVisible(!isPublicationsVisible);
                break;
            case 'invited-talks':
                setIsInvitedTalksVisible(!isInvitedTalksVisible);
                break;
            case 'workshops':
                setIsWorkshopsVisible(!isWorkshopsVisible);
                break;
            default:
                break;
        }
    };

    return (
        <section className='.section-container' id='research'>
            <section className='research-body'>
                <div className='current-work-header'>
                    <span className='current-work-title'>Current Work</span>
                    <div className='research-underline'></div>
                </div>
                <section className='research-text-container'>
                    <p className='research-paragraph'>My area of research lies in the general area of algebra. Specifically, I am interested in algebraic geometry and its applications to the representation theory of associative algebras. In general, representation theory provides a way to translate problems regarding abstract algebraic structures to problems in linear algebra, which is a subject that is well understood. Applications of representation theory of associative algebras includes Kac-Moody Lie algebras, quantum groups, Coxeter groups and cluster algebras.</p>
                    <p className='research-paragraph'>A fundamental problem in the representation theory of associative algebras involves classifying isomorphism classes of finite dimensional representations of a given algebra; however, "most'' algebras admit isomorphism classes of representations that depend on arbitrarily many parameters, which stands as a major roadblock in solving the aforementioned classification problem.</p>
                    <p className='research-paragraph'>Interpreting the classification problem geometrically provides the means in which one can tackle the continuous parametrization problem mentioned above. More specifically, we can define geometric objects whose points are in correspondence with isomorphism classes of specific types of representations. This could be done using stacks, but much of the geometric intuition is lost in this context, so algebraic varieties are used instead for the parameter spaces.</p>
                    <p className='research-paragraph'>The proceeding paragraph leads naturally to the introduction of moduli spaces of representations of algebras. My main research interest involves describing moduli of representations of tame algebras. For instance, I show moduli of representations of clannish algebras are isomorphic to projects of projective spaces in <a target="_blank" rel="noopener" href='https://arxiv.org/abs/2208.00336' className='link research-link'>my solo work.</a> Meanwhile, in order to obtain interesting moduli spaces of representations in the first place, one needs to have a notion of stability for representations with respect to some weight. Stability of quiver representations are the focus of <a target="_blank" rel="noopener" href='https://arxiv.org/abs/2208.02445' className='link research-link'>my other completed research project.</a> Namely, we provide a criteria that greatly reduces the number of inequalities needed to consider when proving a stability function is totally stable on Dynkin quivers.</p>
                    <p className='research-paragraph' id='full-research-statement'>My full research statement can be found <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1nIMeyY1rayF4VAe_UmKkaVaIxMV9ILQE/view' className='link research-link'>HERE.</a></p>
                </section>
                
                <section className='work-section'>
                    <div className='work-dropdown' id='publications'>
                        <div className='work-header' onClick={() => toggleVisibility('publications')}>
                            <div className='work-header-top'>
                                <span className={`work-title ${isPublicationsVisible ? 'visible-title' : ''}`}>Publications</span>
                                <div className={`down-arrow-container ${isPublicationsVisible ? 'rotate-arrow' : ''}`}><img src={downArrow} className='down-arrow' alt='down arrow'/></div>
                            </div>
                            <div className='research-underline'></div>
                        </div>
                        <div className={`work-paragraph-container ${isPublicationsVisible ? 'visible' : 'hidden'}`}>
                            <p className='work-paragraph'>[1] Y. Diaz, C. Gilbert, and R. Kinser, “Total stability and Auslander-Reiten theory for Dynkin quivers,” 2022, (Submitted for publication). arXiv: <a target="_blank" rel="noopener" href='https://arxiv.org/abs/2208.02445' className='link research-link'>2208.02445.</a></p>
                            <p className='work-paragraph'>[2] C. Gilbert, “Moduli of Representations of Skewed-Gentle Algebras,” 2022, (Submitted for publication). arXiv: <a target="_blank" rel="noopener" href='https://arxiv.org/abs/2208.00336' className='link research-link'>2208.00336.</a></p> 
                        </div>

                    </div>
                    <div className='work-dropdown' id='invited-talks'>
                        <div className='work-header' onClick={() => toggleVisibility('invited-talks')}>
                            <div className='work-header-top'>
                                <span className={`work-title ${isInvitedTalksVisible ? 'visible-title' : ''}`}>Invited Talks</span>
                                <div className={`down-arrow-container ${isInvitedTalksVisible ? 'rotate-arrow' : ''}`}><img src={downArrow} className='down-arrow' alt='down arrow'/></div>
                            </div>
                            <div className='research-underline'></div>
                        </div>
                        <div className={`work-paragraph-container ${isInvitedTalksVisible ? 'visible' : 'hidden'}`}>
                            <p className='work-paragraph'>Moduli of Representations of Clannish Algebras, October 2022. Maurice Auslander Distinguished Lectures and International Conference.</p>
                            <p className='work-paragraph'>Moduli of Representations of Clannish Algebras, September 2022. Algebra and Geometry Seminar, Iowa State University <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1VHBQxdamNLOVxzLZG9NWLLUBcdzRrn4g/view' className='link research-link'>(Slides).</a></p>
                            <p className='work-paragraph'>Moduli of Representations of Clannish Algebras, September 2022. <a target="_blank" rel="noopener" href='https://www.fd-seminar.xyz/' className='link research-link'>FD Seminar</a> <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1VHBQxdamNLOVxzLZG9NWLLUBcdzRrn4g/view' className='link research-link'>(Slides).</a></p>
                            <p className='work-paragraph'>Moduli of Representations of Clannish Algebras, March 2022. AMS Special Session on Interactions Between Noncommutative Ring Theory and Algebraic Geometry (canceled due to pandemic).</p>
                            <p className='work-paragraph'>Moduli of Representations of Algebras, May 2021. AMS Special Session on Quivers, Tensors, and Their Applications <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1yOp-VdrWYPCyNUkJRZ2RFr57QDexjW4x/view' className='link research-link'>(Slides).</a></p>
                        </div>
                    </div>
                    <div className='work-dropdown' id='workshops'>
                        <div className='work-header' onClick={() => toggleVisibility('workshops')}> 
                            <div className='work-header-top'>
                                <span className={`work-title ${isWorkshopsVisible ? 'visible-title' : ''}`}>Workshops</span>
                                <div className={`down-arrow-container ${isWorkshopsVisible ? 'rotate-arrow' : ''}`}><img src={downArrow} className='down-arrow' alt='down arrow'/></div>
                            </div>
                            <div className='research-underline'></div>
                        </div>
                        <div className={`work-paragraph-container ${isWorkshopsVisible ? 'visible' : 'hidden'}`}>
                            <p className='work-paragraph'>MSRI Summer School 988 Tropical Geometry, August 2022. Saint Mary's College, California.</p>
                            <p className='work-paragraph'>ISM Discovery School on Mutations, July 2022. University in Montreal, Quebec.</p>
                            <p className='work-paragraph'>Summer School of Algebraic Combinatorics, June 2021(Virtual).</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Research;