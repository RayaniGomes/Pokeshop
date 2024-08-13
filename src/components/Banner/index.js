import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='imagem'> 
                <img src='img/banner.png'/>
            </div>
            <div className='texto'>
                <img src='img/logoBanner.png' />
                <h3>Capture seus sonhos! <br></br>
                Pokémon esperando por você aqui!</h3>
                <div className='redes'>
                    <a href='#'><i className="bi bi-instagram"></i></a>
                    <a href='#'><i className="bi bi-facebook"></i></a>
                    <a href='#'><i className="bi bi-youtube"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Banner