import './Header.css'

const Header = ({ titulo }) => {
    return (
        <section className='header'>
            <h1>{titulo}</h1>
        </section>
    );
}

export default Header;
