const addCharacterButton = document.querySelector('#addCharacter');
const characterContainer = document.querySelector('#characters');

async function deleteChar() {
  await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation m ($name: String!){
          deleteCharacter(name: $name){
            _id
            name
            game
          }
        }
      `,
      variables: { name: this.value }
    }),
  });
  location.reload();
}

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      query q {
        getCharacters {
          _id
          name
          game
        }
      }
    `,
  }),
})
  .then(response => response.json())
  .then(res => {
    res.data.getCharacters.forEach(character => {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = `${character.name} is from the game ${character.game}`;
      const buttonEl = document.createElement('button');
      buttonEl.value = character.name;
      buttonEl.textContent = `Delete ${character.name}`;
      buttonEl.onclick = deleteChar;
      divEl.appendChild(pEl);
      divEl.appendChild(buttonEl);
      characterContainer.appendChild(divEl);
    });
  });

addCharacterButton.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  const game = document.querySelector('#game').value;

  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation m ($name: String!, $game: String!){
          addCharacter(name: $name, game: $game){
            _id
            name
            game
          }
        }
      `,
      variables: { name, game }
    }),
  })
    .then(res => location.reload());
});
