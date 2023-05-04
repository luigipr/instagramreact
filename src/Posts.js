let obj = [
    {
        imagemuser: "assets/img/meowed.svg",
        altuser: 'meowed' ,
        imagempost: "assets/img/gato-telefone.svg" ,
        altpost: 'gato-telefone' ,
        imagemliked: "assets/img/respondeai.svg",
        nomeliked: 'respondeai',
        liked: '101.523',
        key: 1
    }, {
        imagemuser: "assets/img/barked.svg",
        altuser: 'barked' ,
        imagempost: "assets/img/dog.svg" ,
        altpost: 'dog' ,
        imagemliked: "assets/img/adorable_animals.svg",
        nomeliked: 'adorable_animals',
        liked: '101.523',
        key: 2
    }

]

function Post(props) {
    console.log(props)
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
            <img src={props.imagempost} alt={props.altpost}/>
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
                <img src={props.magemliked} alt={props.nomeliked}/>
                <div class="texto">
                    Curtido por <strong>{props.nomeliked}</strong> e <strong>outras {props.liked} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default function Posts() {
    return (
    <div class="posts">
        {obj.map((i) => {
        return <Post key='i' imagemuser={i.imagemuser} altuser={i.altuser} imagempost={i.imagempost} altpost={i.altpost} imagemliked={i.imagemliked} nomeliked={i.nomeliked} />
    })} 
    </div>
    )
}













