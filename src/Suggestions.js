let obj = [{
    imagem: "assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memes",
    razao: 'Segue você',
    key: 1
},{
    imagem: "assets/img/chibirdart.svg" ,
    nome: "chibirdart",
    razao: 'Segue você',
    key: 2
},{
    imagem: "assets/img/razoesparaacreditar.svg" ,
    nome: "razoesparaacreditar",
    razao: 'Novo no Instagram',
    key: 3
}, {
    imagem: 'assets/img/adorable_animals.svg' ,
    nome: "adorable_animals",
    razao: 'Segue você',
    key: 4
}, {
    imagem: "assets/img/smallcutecats.svg" ,
    nome: "smallcutecats",
    razao: 'Segue você',
    key: 5
}


]


function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
              <img src={props.imagem} alt={props.nome}/>
              <div className="texto">
                <div className="nome">bad.vibes.memes</div>
                <div className="razao">{props.razao}</div>
              </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}

export default function Suggestions() {
    return (
    <div className="sugestoes">
        {obj.map((i) => {
        return <Suggestion key={i.nome} imagem={i.imagem} nome={i.nome} razao={i.razao}/>
    })} 
    </div>
    )
}



