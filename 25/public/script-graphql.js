const addCharacterButton = document.querySelector('#addCharacter');
const characterContainer = document.querySelector('#characters');

async function deleteChar() {
  await fetch('/api/characters',
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.value })
    }
  );
  location.reload();
}

fetch('/api/characters')
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
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
    .then(res => location.reload());
});
