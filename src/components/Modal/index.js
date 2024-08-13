import React, { useState, useEffect } from 'react';
import { Modal, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import './Modal.css';

const ModalPokemon = ({ show, handleClose, pokemon }) => {
    const [evolutionImages, setEvolutionImages] = useState([]);

    useEffect(() => {
        const fetchEvolutionImages = async () => {
            if (!pokemon || !pokemon.evolutions || !Array.isArray(pokemon.evolutions)) return;

            const images = {};
            for (const evolution of pokemon.evolutions) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution}/`);
                images[evolution] = response.data.sprites.other.dream_world.front_default;
            }
            setEvolutionImages(images);
        };
        
        fetchEvolutionImages();
    }, [pokemon]);
    
    if (!pokemon) return null;
    const index = 1;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='title'>{pokemon.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Fraquezas:</h3>
                <ul>
                    {pokemon.weaknesses && pokemon.weaknesses.map((weakness) => (
                        <li key={weakness}>{weakness}</li>
                    ))}
                </ul>

                <h3>Ataques:</h3>
                <ul>
                    {pokemon.moves && pokemon.moves.map((move, index) => (
                        <li key={index}>{move}</li>
                    ))}
                </ul>

                <h3>Evoluções:</h3>
                <ul className='evolution'>
                    {pokemon.evolutions && pokemon.evolutions.map((evolution, index) => (
                        <li key={evolution}>
                            <p><strong>{`${index + 1}`}º </strong>{evolution}</p>
                            
                            <img
                                src={evolutionImages[evolution] || 'placeholder-image-url'}
                                alt={evolution}
                                style={{ width: '100px', height: '100px', marginLeft: '10px' }}
                            />
                        </li>
                    ))}
                </ul>
                <h3>Atributos:</h3>
                <div className="tabela">
                    <table>
                        <tbody>
                            {pokemon.stats && pokemon.stats.map(stat => (
                                <tr key={stat.name}>
                                    <td className='atributos'>{stat.name}</td>
                                    <td className='progresso'>
                                        <ProgressBar now={stat.base_stat} max={100} label={`${stat.base_stat}`} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPokemon;
