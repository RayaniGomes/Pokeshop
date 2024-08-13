import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='bodyFooter'>
                <img src='img/logoNav.png' />
                <div className='inforfooter'>
                    <div className='localizacao'>
                        <i class="bi bi-geo-alt-fill p-2"></i>
                        <p>Rua Ali Perto, 35<br />
                            Rio de Janeiro - RJ<br />
                            Brasil - Terra - Via Láctea</p>
                    </div>
                    <div className='email'>
                        <i class="bi bi-envelope-fill p-2"></i>
                        <p>contato@pokeshop.com<br />
                            assistencia@pokeshop.com</p>
                    </div>
                    <div className='d-flex contato'>
                        <p><i class="bi bi-telephone-fill"></i> +55 21 99999-9999</p>
                        <div className='redesFooter'>
                            <a href='#'><i className="bi bi-instagram"></i></a>
                            <a href='#'><i className="bi bi-facebook"></i></a>
                            <a href='#'><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                </div>
            </div>
            <p>PokéShop © Direitos Reservados a Rayani Gomes</p>
        </section >
    )
}

export default Footer