import { useState } from "react";



export default function User() {
    let [name, setName] = useState('catanacomics');
    let [imagem, setImagem] = useState('assets/img/catanacomics.svg');

    function novonome() {
        let newname = prompt('digite o seu nome de usuário');
        setName(newname);
    }
    function novafoto() {
        let newimagem = prompt('escolha um link de imagem válido');
        setImagem(newimagem)
        
    }


    return (
        <div class="usuario">
        <img src={imagem} alt="imagem de perfil" data-test="profile-img" onClick={novafoto} />
        <div class="texto">
            <span>
                <strong data-test='name'>{name}</strong>
                <ion-icon name="pencil" class='username' data-test='edit-name' onClick={novonome}></ion-icon>
            </span>
        </div>
    </div>
    )
}

