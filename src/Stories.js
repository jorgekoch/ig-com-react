import StoryItem from "./StoryItem";
export default function Stories () {

  const storiesData = [
    { image: "./assets/img/9gag.svg", alt: "9gag", user: "9gag" },
    { image: "assets/img/meowed.svg", alt: "meowed", user: "meowed" },
    { image: "assets/img/barked.svg", alt: "barked", user: "barked" },
    { image: "assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet" },
    { image: "assets/img/wawawicomics.svg", alt: "wawawicomics", user: "wawawicomics" },
    { image: "assets/img/respondeai.svg", alt: "respondeai", user: "respondeai" },
    { image: "assets/img/filomoderna.svg", alt: "filomoderna", user: "filomoderna" },
    { image: "./assets/img/memeriagourmet.svg", alt: "memeriagourmet", user: "memeriagourmet" }
  ];

    return (
        <div class="stories">

          {storiesData.map((story) => 
          <StoryItem image={story.image} alt={story.alt} user={story.user} />
          )}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
};
