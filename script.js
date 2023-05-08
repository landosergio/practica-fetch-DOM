let a;

let generarNumero = () => Math.round(Math.random() * 250) + 1;

generarPokemon = function () {
  a = generarNumero();
  fetch(`https://pokeapi.co/api/v2/pokemon/${a}/`).then((response) =>
    response
      .json()
      .then((data) =>
        document
          .querySelector(".chori")
          .setAttribute("src", data.sprites.front_default)
      )
  );
};
