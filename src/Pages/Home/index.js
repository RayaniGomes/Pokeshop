import './Home.css';
import Banner from '../../components/Banner';
import SessaoOfertas from '../../components/SessaoOfertas';
import SessaoPokedex from '../../components/SessaoPokedex';
import SessaoContato from '../../components/SessaoContato';

const Home = () => {
    return (
        <div>
            <section id="home">
                <Banner />
            </section>
            <section id="ofertas">
                <h2 className='titulo'>Ofertas Diárias</h2>
                <SessaoOfertas />
            </section>
            <section id="tipos">
                <h2 className='titulo'>Tipos de Pokémon</h2>
                <SessaoPokedex />
            </section>
            <section id="contato">
                <h2 className='titulo'>Fale conosco</h2>
                <SessaoContato />
            </section>
        </div>
    );
};

export default Home;
