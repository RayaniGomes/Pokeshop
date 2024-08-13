import './Card.css';

const Card = ({ nome, imagem, valorOriginal, valorPromocional, onInfoClick, tipo, onComprar }) => {
  return (
    <div className='card'>
      <div className='imagemCard'>
        <img src={imagem} alt={nome} />
      </div>
      <div className='infoCard'>
        <div className='bodyInfo'>
          <div className='infoNome'>
            <h4>{nome}</h4>
            <button onClick={onInfoClick}>?</button>
          </div>
          <p><strong>Tipo: </strong>{tipo}</p>
        </div>
        <div className='footerInfo'>
          <div className='preco'>
            <p>De: R${valorOriginal}</p>
            <h5>Por: R${valorPromocional}</h5>
          </div>
          <button onClick={onComprar}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
