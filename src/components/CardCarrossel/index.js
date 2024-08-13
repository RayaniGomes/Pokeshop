import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './CardCarrossel.css'

const CardCarrossel = ({ informacoes = [] }) => {
    const flickityRef = useRef(null);

    useEffect(() => {
        if (flickityRef.current) {
            new Flickity(flickityRef.current, {
                cellAlign: 'left',
                contain: true,
                autoPlay: true,
                wrapAround: true,
                prevNextButtons: true,
                pageDots: true,
            });
        }
    }, []);
    return (
        <div className="carousel" ref={flickityRef}>
            {informacoes.map((infor) => (
                <div className="carousel-cell">
                    <div className='cabecalho'>
                        <img src={infor.src} alt={infor.title} />
                        <h5>{infor.title}</h5>
                    </div>
                    <div className='corpo'>
                        <p >{infor.description}</p>
                    </div>
                    <div className='rodape'>
                        <a href=''>Pokedex</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardCarrossel;
