import { useEffect, useState } from 'react';
import axios from 'axios';
import CardPokedex from '../CardPokedex';
import Modal from '../Modal';
import './ListaPokedex.css'

const SessaoOfertas = () => {
    const [pokemons, setPokemons] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        getPokemons(currentPage);
    }, [currentPage]);

    const getPokemons = async (page) => {
        try {
            const offset = (page - 1) * itemsPerPage;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`);
            const results = response.data.results;
            setTotalPages(Math.ceil(response.data.count / itemsPerPage)); // Atualiza o número total de páginas

            const pokemonsData = await Promise.all(results.map(async (result) => {
                const response = await axios.get(result.url);
                const pokemon = response.data;

                // Fetch species to get evolution chain
                const speciesResponse = await axios.get(pokemon.species.url);
                const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
                const evolutionChainResponse = await axios.get(evolutionChainUrl);
                const evolutionChain = evolutionChainResponse.data.chain;

                const evolutions = extractEvolutions(evolutionChain);

                const moves = pokemon.moves.slice(0, 10).map(move => move.move.name);
                const stats = pokemon.stats.map(stat => ({
                    name: stat.stat.name,
                    base_stat: stat.base_stat
                }));

                const valorOriginal = Math.floor(Math.random() * 400) + 100;
                const valorPromocional = valorOriginal * 0.8;

                return {
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    valorOriginal,
                    valorPromocional,
                    types: pokemon.types.map(type => type.type.name).join(', '),
                    moves,
                    stats,
                    evolutions,
                };
            }));

            setPokemons(pokemonsData);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };

    const extractEvolutions = (chain) => {
        const evolutions = [];
        let current = chain;

        while (current) {
            const speciesName = current.species.name;
            evolutions.push(speciesName);

            if (current.evolves_to.length > 0) {
                current = current.evolves_to[0];
            } else {
                current = null;
            }
        }

        return evolutions;
    };

    const handleShowModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const onCardClick = (pokemon) => {
        handleShowModal(pokemon);
    };

    const handlePageChange = (direction) => {
        setCurrentPage(prevPage => {
            if (direction === 'next' && prevPage < totalPages) {
                return prevPage + 1;
            } else if (direction === 'prev' && prevPage > 1) {
                return prevPage - 1;
            }
            return prevPage;
        });
    };

    return (
        <div>
            <div className='container text-center'>
                <div className="row">
                    {pokemons.map((pokemon) => (
                        <div
                            key={pokemon.name}
                            className="col"
                        >
                            <CardPokedex
                                nome={pokemon.name}
                                imagem={pokemon.image}
                                valorOriginal={pokemon.valorOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                valorPromocional={pokemon.valorPromocional.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                onInfoClick={() => onCardClick(pokemon)}
                                tipo={pokemon.types}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination-controls text-center">
                <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}><i class="bi bi-chevron-double-left"/></button>
                <span> Página {currentPage} de {totalPages} </span>
                <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}><i class="bi bi-chevron-double-right"/></button>
            </div>

            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                pokemon={selectedPokemon}
            />
        </div>
    );
};

export default SessaoOfertas;
