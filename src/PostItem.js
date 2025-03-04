import React, { useState } from 'react';

export default function PostItem (props) {
  const [postliked, setPostlikes] = useState('heart-outline');

  const likePost = () => {
    if (postliked=== "heart-outline") {
      setPostlikes("heart");
    } else {
      setPostlikes("heart-outline");
    }
  };

  const clickPost = () => {
    if (postliked === "heart-outline") {
      setPostlikes("heart");
    }
  };

  const [postsave, setPostsaves] = useState("bookmark-outline");
 
  const savePost = () => {
    if (postsave === "bookmark-outline") {
      setPostsaves("bookmark");
    } else {
      setPostsaves("bookmark-outline");
    }
  };
  
  return (
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.user} alt={props.userAlt}/>
        {props.userAlt}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
    <div class="conteudo">
      <img onClick={clickPost} src={props.image} alt={props.alt}/>
    </div>
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name={postliked} onClick={likePost}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name={postsave} onClick={savePost}></ion-icon>
        </div>
      </div>
  
      <div class="curtidas">
        <img src={props.likesimg} alt={props.likes}/>
        <div class="texto">
          Curtido por <strong>respondeai</strong> e <strong>outras {props.likescount} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
  )}

