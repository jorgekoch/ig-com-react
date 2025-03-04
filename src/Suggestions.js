import SuggestionItem from './SuggestionItem.js';
export default function Suggestions () {

  const suggestionsData = [
    { image: "./assets/img/bad.vibes.memes.svg", alt: "bad.vibes.memes", user: "bad.vibes.memes", reason: "Segue você" },
    { image: "./assets/img/chibirdart.svg", alt: "chibirdart", user: "chibirdart", reason: "Segue você" },
    { image: "./assets/img/razoesparaacreditar.svg", alt: "razoesparaacreditar", user: "razoesparaacreditar", reason: "Novo no Instagram" },
    { image: "./assets/img/adorable_animals.svg", alt: "adorable_animals", user: "adorable_animals", reason: "Segue você" },
    { image: "./assets/img/smallcutecats.svg", alt: "smallcutecats", user: "smallcutecats", reason: "Segue você" }
  ];


    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

          {suggestionsData.map((suggestion) => 
          <SuggestionItem image={suggestion.image} alt={suggestion.alt} user={suggestion.user} reason={suggestion.reason} />
          )}

        </div>
    )
}