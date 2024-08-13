import CardCarrossel from '../CardCarrossel';

const SessaoPokedex = () => {
    const infoCarrossel = [
        {
            src: 'img/iconTipos/Bug.png',
            title: 'Bug',
            description: 'São formados por insetos, muitos são perigosos e nocivos, outros, mesmo parecendo ser frágeis, podem ajudar muito em várias coisas. Os golpes insetos são muito eficientes em determinadas ocasiões, principalmente para enfrentar pokémons noturnos e psíquicos, que são difíceis de se achar uma fraqueza.'
        },
        {
            src: 'img/iconTipos/Dark.png',
            title: 'Dark',
            description: 'São pokémons que têm costume de aparecer à noite, seus olhos são ótimos para ver, assim, conseguem ser melhores contra os tipos fantasmas e psíquicos, já que eles conseguem enxergar através dos golpes psíquicos e detectar fantasmas invisíveis. Também são conhecidos por serem sombrios. Não tem um golpe noturno que cause um grande estrago, mas cada um tem seu efeito especial.'
        },
        {
            src: 'img/iconTipos/Dragon.png',
            title: 'Dragon',
            description: 'Pokémons do tipo dragão são muito fortes e adoram uma batalha. São muito raros de se achar, mas contam com um grande ataque e uma ótima defesa. Seus golpes podem ser aquáticos, de fogo, de gelo, elétrico, normais, voadores e outros específicos de dragões, tornado eles um oponente difícil de ser derrotado. São difíceis de serem treinados, resistem aos tipos básicos (água, fogo, elétrico e planta). '
        },
        {
            src: 'img/iconTipos/Electric.png',
            title: 'Electric',
            description: 'Os pokémons do tipo elétrico se caracterizam por serem a maioria de cor amarelada e dotadas de grande velocidade, sempre dão choques de descarga elétrica, mas são vulneráveis a pokémons do tipo terra, já que um raio não surte efeito. Têm fraqueza apenas do tipo terra. Poucos deles são mistos com outro tipo. Podem deixar muitos pokémons paralisados com seus ataques.'
        },
        {
            src: 'img/iconTipos/Fairy.png',
            title: 'Fairy',
            description: 'O mais novo tipo, introduzidos na 6ª geração. Muitos pokémons de gerações anteriores foram reclassificados para esse tipo. São representados por seres encantados e que atacam com magia. O tipo surgiu principalmente para equilibrar o tipo dragão, que estava cada vez mais imbatível. Também são bons contra lutadores e noturnos, e não são afetados por golpes do tipo dragão. '
        },
        {
            src: 'img/iconTipos/Fighting.png',
            title: 'Fighting',
            description: 'São pokémons que lutam, como humanos, muitos de seus golpes são fortes. A maioria tem aparência dos humanos (pernas e braços), todos costumam usar golpes de chute, de soco, ou golpes corpo a corpo. É importante ter um desses por serem bons contra normais e noturnos. São melhores atacando, não têm uma boa defesa.'
        },
        {
            src: 'img/iconTipos/Fire.png',
            title: 'Fire',
            description: 'Este é um dos tipos mais queridos entre todos, têm grandes ataques, podendo deixar queimaduras em diversos pokémons. Eles atacam com chamas, têm um bom poder ofensivo, mas fracos na defesa, golpes de água, terra e pedra são comuns e podem fazer um tipo fogo não durar muito na batalha. Com o passar das gerações, cada vez menos pokémons de fogo aparecem.'
        },
        {
            src: 'img/iconTipos/Flying.png',
            title: 'Flying',
            description: 'Este tipo não é de todo o forte, pokémons deste tipo são muito rápidos e podem ser destrutivos com as combinações corretas. Geralmente são mistos com outros tipos, os mais comuns mistos com o tipo normal. É o único tipo que já foi combinado com todos os outros tipos, existem pokémons voadores mistos com qualquer tipo. Golpes de terra não atingem os voadores.'
        },
        {
            src: 'img/iconTipos/Ghost.png',
            title: 'Ghost',
            description: 'É um dos melhores tipos e um dos mais difíceis de serem derrotados. Eles podem desaparecer no meio do nada e tem golpes fantasmagóricos, como a sombra da noite, o pesadelo, entre outros. Seus golpes costumam ter seus efeitos que podem complicar numa batalha. Não existem muitos fantasmas, atualmente é um dos tipos menos abundantes.'
        },
        {
            src: 'img/iconTipos/Grass.png',
            title: 'Grass',
            description: 'Usam golpes ligados a planta, costumam viver em campos e gramados. Os típicos ataques que este tipo possui, são ataques que paralisam, envenenam e adormecem. A maioria dos golpes não são ofensivos, são mais de atordoar o adversário. É o tipo que mais tem fraqueza a outros, mas são difíceis de serem derrotados por elétricos.'
        },
        {
            src: 'img/iconTipos/Ground.png',
            title: 'Ground',
            description: 'Este tipo é bastante necessário em batalhas. O único que tem vantagem a elétrico, seus principais golpes são muito úteis. Eles podem cavar e entrar debaixo da terra, o que lhes dão alguma vantagem, já que o adversário não pode vê-lo debaixo da terra. Poucos sabem, mas é importante saber que terra é fraco contra gelo e forte contra veneno.'
        },
        {
            src: 'img/iconTipos/Ice.png',
            title: 'Ice',
            description: 'Esses pokémons são conhecidos por serem fortes contra dragões, eles podem conseguir congelar o adversários com seus golpes. É preciso saber a hora certa de se usar um pokémon ou um golpe de gelo, pois, quando não estão muito fortes, provavelmente vão estar muito fracos contra o adversário. Dependendo do adversário, pode cair facilmente ou ser duro na queda.'
        },
        {
            src: 'img/iconTipos/Normal.png',
            title: 'Normal',
            description: 'Pokémons do tipo normal são considerados bons para defesa. Seus golpes não têm vantagem a ninguém, mas podem quebrar um galhão. São especiais, a maioria consegue aprender golpes de diversos outros tipos. Costumam ser apenas do tipo normal, quando não, são mistos com o tipo voador, com algumas exceções. Alguns bem interessantes por alguma coisa, tais como Ditto, Smeargle, Spinda, Porygon e suas evoluções, Chatot, Kecleon.'
        },
        {
            src: 'img/iconTipos/Poison.png',
            title: 'Poison',
            description: 'Caracterizam-se por terem uma cor escura, indicando a presença de veneno, é um dos piores tipos comparado aos outros. Se demorarem de serem derrotados, poderão ser um problema, seus maiores ataques são os que envenenam o inimigo. Eram bons apenas contra o tipo planta, mas com a chegada do tipo fada, passaram a ser mais procurados, devido a nova vantagem. Seus golpes são inofensivos contra metálicos.'
        },
        {
            src: 'img/iconTipos/Psychic.png',
            title: 'Psychic',
            description: 'Pokémons deste tipo são extremamente fortes, com habilidades fora do comum, paranormais, mesmo com pouca defesa este tipo segue sendo um dos melhores. Podem fazer coisas tanto incríveis como absurdas, usando seu poder psíquico. Como é um tipo meio afastado, não tem vantagens e desvantagens contra aqueles tipos mais comuns'
        },
        {
            src: 'img/iconTipos/Rock.png',
            title: 'Rock',
            description: 'Caracterizam-se por terem um corpo físico forte, tem uma defesa interessaste, conseguem ser resistentes ao tipo normal. Assim como o tipo planta, pedra é o que mais tem desvantagens (ambos com desvantagens a 5 tipos). Em compensação, eles têm vantagem a 4 tipos. Não vou dizer que eles são bons, mas também não vou dizer que eles não são.'
        },
        {
            src: 'img/iconTipos/Steel.png',
            title: 'Steel',
            description: 'Têm um corpo blindado, ou seja, metalizado. São conhecidos como tanques de guerra, pois atualmente são resistentes a 9 tipos diferentes, e são inafetados por veneno. Eles perderam a resistência que tinham a fantasma e noturno na 6ª geração, para que ficasse um pouco mais equilibrado. São bons contra gelo, pedra e o novo tipo fada. Ficam logo “enferrujados” com golpes de fogo. Também têm fraqueza a lutador e terra.'
        },
        {
            src: 'img/iconTipos/Water.png',
            title: 'Water',
            description: 'A maioria dos pokémons são deste tipo, cerca de 20% dentre todos os pokémons são aquáticos. Eles sabem nadar, tendo assim sempre alguma vantagem ou desvantagem, já que uns só podem lutar na água (como Goldeen, Magikarp e Feebas). Alguns deles são mistos com o tipo terra ou gelo, cobrindo a desvantagem de elétricos e de planta.'
        },
    ];
    return (
        <div className='sessao'>
            <CardCarrossel informacoes={infoCarrossel} />
        </div>
    )
}

export default SessaoPokedex