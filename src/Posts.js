import PostItem from "./PostItem.js";
export default function Posts () {

  const postsData = [
    { user: "./assets/img/meowed.svg", userAlt: "meowed", image: "assets/img/gato-telefone.svg", alt: "gato-telefone", likes: "respondeai", likesimg: "assets/img/respondeai.svg", likescount: "101.523" },
    { user: "./assets/img/barked.svg", userAlt: "barked", image: "assets/img/dog.svg", alt: "dog", likes: "adorable_animals", likesimg: "assets/img/adorable_animals.svg", likescount: "99.159" },
    { user: "./assets/img/catanacomics.svg", userAlt: "catanacomics", image: "assets/img/gato-telefone.svg", alt: "gato-telefone", likes: "meowed", likesimg: "assets/img/meowed.svg", likescount: "81.523" },
    { user: "./assets/img/respondeai.svg", userAlt: "respondeai", image: "assets/img/dog.svg", alt: "dog", likes: "respondeai", likesimg: "assets/img/respondeai.svg", likescount: "101.523" },
  ];

    return (
        <div class="posts">

          {postsData.map((post) =>
          <PostItem user={post.user} userAlt={post.userAlt} image={post.image} alt={post.alt} likes={post.likes} likesimg={post.likesimg} likescount={post.likescount} />
          )}

        </div>
    )
};