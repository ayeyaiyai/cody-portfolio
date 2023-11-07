import '../styles/Research.css';

function Research() {
    return (
        <section className='.section-container' id='research'>
            <section className='research-body'>
                <div className='current-work-header'>
                    <span className='current-work-title'>Current Work</span>
                    <div className='current-work-underline'></div>
                </div>
                <section className='research-text-container'>
                    <p className='research-paragraph'>My area of research lies in the general area of algebra. Specifically, I am interested in algebraic geometry and its applications to the representation theory of associative algebras. In general, representation theory provides a way to translate problems regarding abstract algebraic structures to problems in linear algebra, which is a subject that is well understood. Applications of representation theory of associative algebras includes Kac-Moody Lie algebras, quantum groups, Coxeter groups and cluster algebras.</p>
                    <p className='research-paragraph'>A fundamental problem in the representation theory of associative algebras involves classifying isomorphism classes of finite dimensional representations of a given algebra; however, "most'' algebras admit isomorphism classes of representations that depend on arbitrarily many parameters, which stands as a major roadblock in solving the aforementioned classification problem.</p>
                    <p className='research-paragraph'>Interpreting the classification problem geometrically provides the means in which one can tackle the continuous parametrization problem mentioned above. More specifically, we can define geometric objects whose points are in correspondence with isomorphism classes of specific types of representations. This could be done using stacks, but much of the geometric intuition is lost in this context, so algebraic varieties are used instead for the parameter spaces.</p>
                    <p className='research-paragraph'>The proceeding paragraph leads naturally to the introduction of moduli spaces of representations of algebras. My main research interest involves describing moduli of representations of tame algebras. For instance, I show moduli of representations of clannish algebras are isomorphic to projects of projective spaces in <a href='https://arxiv.org/abs/2208.00336' className='link research-link'>my solo work.</a> Meanwhile, in order to obtain interesting moduli spaces of representations in the first place, one needs to have a notion of stability for representations with respect to some weight. Stability of quiver representations are the focus of <a href='https://arxiv.org/abs/2208.02445' className='link research-link'>my other completed research project</a>. Namely, we provide a criteria that greatly reduces the number of inequalities needed to consider when proving a stability function is totally stable on Dynkin quivers.</p>
                    <p className='research-paragraph' id='full-research-statement'>My full research statement can be found <a href='https://drive.google.com/file/d/1nIMeyY1rayF4VAe_UmKkaVaIxMV9ILQE/view' className='link research-link'>HERE.</a></p>
                </section>
            </section>
        </section>
    )
}

export default Research;