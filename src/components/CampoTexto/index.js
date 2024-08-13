import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    );
};

const CampoMensagem = (props) => {
    const placeholderModificada = `${props.placeholder}`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campoMensagem">
            <label>{props.label}</label>
            <textarea
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    );
};

export { CampoTexto, CampoMensagem };
