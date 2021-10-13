const addCharacterButton = document.querySelector('#addCharacter');
const characterContainer = document.querySelector('#characters');

fetch('/api/characters')
  .then(response => response.json())
  .then(data => {
    data.characters.forEach(character => {
      const pEl = document.createElement('p');
      pEl.textContent = `${character.name} is from the game ${character.game}`;
      characterContainer.appendChild(pEl);
    });
  });

addCharacterButton.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  const game = document.querySelector('#game').value;

  fetch('/api/characters',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, game })
    }
  )
    .then(res => console.log(res));
});
