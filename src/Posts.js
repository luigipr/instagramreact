import { useState } from "react";

let obj = [
    {
        imagemuser: "assets/img/meowed.svg",
        altuser: 'meowed' ,
        imagempost: "assets/img/gato-telefone.svg" ,
        altpost: 'gato-telefone' ,
        imagemliked: "assets/img/respondeai.svg",
        nomeliked: 'respondeai',
        likes: 11,
        key: 1
    }, {
        imagemuser: "assets/img/barked.svg",
        altuser: 'barked' ,
        imagempost: "assets/img/dog.svg" ,
        altpost: 'dog' ,
        imagemliked: "assets/img/adorable_animals.svg",
        nomeliked: 'adorable_animals',
        likes: 133,
        key: 2
    },{
        imagemuser: "assets/img/rivalry.jpg",
        altuser: 'rivalry' ,
        imagempost: "assets/img/loudwin.jpeg" ,
        altpost: 'loud win' ,
        imagemliked: "assets/img/inter.png",
        nomeliked: 'inter',
        likes: 101,
        key: 2
    }


]


function Post(props) {


    
    console.log(props)
    let [classesalvar, setClassesalvar] = useState("bookmark-outline");
    function Salvar() {
    

        if (classesalvar === "bookmark-outline") {
            setClassesalvar("bookmark")
        } else {
            setClassesalvar("bookmark-outline")
        }
    }

    let [classelike, setClasselike] = useState('branco')
    let [like, setLike] = useState("heart-outline")
    let [likes, setlikes] = useState(props.likes)

    function likecount (index) {
        console.log(index);
        if (classelike === 'branco') {
            setClasselike('vermelho')
            setLike("heart")
            setlikes(likes+1)


        } else {
            setClasselike('branco')
            setLike("heart-outline")
            setlikes(likes-1)
        }

    }


    return (
        <div class="post" data-test='post'>
            <div class="topo">
            <div class="usuario">
                <img data-test='post-image' src={props.imagemuser} alt={props.altuser}/>
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
                <ion-icon name={like} data-test='like-post' onClick={() => likecount(props.index)} class={classelike}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name={classesalvar} data-test='save-post' onClick={Salvar}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imagemliked} alt={props.nomeliked}/>
                <div class="texto">
                    Curtido por <strong>{props.nomeliked}</strong> e <strong>outras <span data-test='likes-number'>{likes}</span> pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default function Posts() {
    return (
    <div class="posts">
        {obj.map((i, index) => {
    return <Post key='i' imagemuser={i.imagemuser} altuser={i.altuser} imagempost={i.imagempost} altpost={i.altpost} imagemliked={i.imagemliked} nomeliked={i.nomeliked} likes={i.likes} index={index} />
    })} 
    </div>
    )
}













