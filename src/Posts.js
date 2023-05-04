obj = [
    {
        imagemuser: "assets/img/meowed.svg",
        altuser: 'meowed' ,
        imagempost: "assets/img/gato-telefone.svg" ,
        altpost: 'gato-telefone' ,
        imgliked: "assets/img/respondeai.svg",
        nomeliked: 'respondeai'
    }, {
        imagemuser: "assets/img/barked.svg",
        altuser: 'barked' ,
        imagempost: "assets/img/dog.svg" ,
        altpost: 'dog' ,
        imagemliked: "assets/img/adorable_animals.svg",
        nomeliked: 'adorable_animals'
    }

]

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={props.imagemuser} alt={props.altuser}/>
                {props.altuser}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
            <img src={props.imagempost} alt={altpost}/>
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={imagemliked} alt={nomeliked}/>
                <div class="texto">
                    Curtido por <strong>{nomeliked}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default function Posts() {
    <div class="posts">
        {obj.map((i) => {
        return <Post imagemuser={i.imagemuser} altuser={i.altuser} imagempost={i.imagempost} altpost={i.altpost} imagemliked={i.imagemliked} nomeliked={i.nomeliked} />
    })} 
    </div>
}













<