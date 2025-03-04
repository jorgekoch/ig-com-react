import React, { useState } from 'react';

export default function User() {
  const [username, setUsername] = useState('catanacomics');

  const usernameChange = () => {
    const newUsername = prompt('Digite o novo nome de usuário:', username);
    if (newUsername) {
      setUsername(newUsername);
    }
  };

  const [userimg, setUserimg] = useState('./assets/img/catanacomics.svg');

  const userimgChange = () => {
    const newUserimg = prompt('Digite o link da imagem de usuário:', userimg);
    if (newUserimg) {
      setUserimg(newUserimg);
    }
  }

  return (
    <div className="usuario">
      <img src={userimg} alt="imagem de perfil" onClick={userimgChange} />
      <div className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon name="pencil" onClick={usernameChange}></ion-icon>
        </span>
      </div>
    </div>
  );
}