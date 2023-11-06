import '../styles/Header.css';

function Header() {
    return (
        <section className="header">
            <div className='header-body'>
                <div className='header-name'>Cody Gilbert</div>
                <div className='header-links'>
                    <span className='header-link'>About</span>
                    <span className='header-link'>Research</span>
                    <span className='header-link'>Teaching</span>
                    <span className='header-link'>Service</span>
                </div>
            </div>
        </section>
    )
}

export default Header;