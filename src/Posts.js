import PostItem from "./PostItem.js";
export default function Posts () {

  const postsData = [
    { user: "./assets/img/meowed.svg", userAlt: "meowed", image: "assets/img/gato-telefone.svg", alt: "gato-telefone", likes: "respondeai", likesimg: "assets/img/respondeai.svg", likescount: "101523" },
    { user: "./assets/img/barked.svg", userAlt: "barked", image: "assets/img/dog.svg", alt: "dog", likes: "adorable_animals", likesimg: "assets/img/adorable_animals.svg", likescount: "99159" },
    { user: "./assets/img/catanacomics.svg", userAlt: "catanacomics", image: "assets/img/gato-telefone.svg", alt: "gato-telefone", likes: "meowed", likesimg: "assets/img/meowed.svg", likescount: "81523" },
    { user: "./assets/img/respondeai.svg", userAlt: "respondeai", image: "assets/img/dog.svg", alt: "dog", likes: "catanacomics", likesimg: "assets/img/catanacomics.svg", likescount: "101523" },
  ];

    return (
        <div class="posts">

          {postsData.map((post) =>
          <PostItem user={post.user} userAlt={post.userAlt} image={post.image} alt={post.alt} likes={post.likes} likesimg={post.likesimg} likescount={post.likescount} />
          )}

        </div>
    )
};