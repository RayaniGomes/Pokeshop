import { useState } from 'react';
import { CampoTexto, CampoMensagem } from '../CampoTexto';
import './SessaoContato.css';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleNomeChange = (valor) => setNome(valor);
    const handleTelefoneChange = (valor) => setTelefone(valor);
    const handleEmailChange = (valor) => setEmail(valor);
    const handleMensagemChange = (valor) => setMensagem(valor);

    return (
        <section className='sessaocontato'>
            <form className='formulario'>
                <div className='linha-1'>
                    <CampoTexto
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={handleNomeChange}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Telefone"
                        placeholder="Digite seu telefone"
                        valor={telefone}
                        aoAlterado={handleTelefoneChange}
                    />
                </div>
                <CampoTexto
                    obrigatorio={true}
                    label="Email"
                    placeholder="contato@email.com"
                    valor={email}
                    aoAlterado={handleEmailChange}
                />
                <CampoMensagem
                    obrigatorio={true}
                    label="Mensagem"
                    placeholder="O que você precisa?"
                    valor={mensagem}
                    aoAlterado={handleMensagemChange}
                />
                <div className='botao'>
                    <button>ENVIAR MENSAGEM</button>
                </div>
            </form>
        </section>
    );
}

export default Contato