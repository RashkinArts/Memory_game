// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count = 4) {
  const pairNumbers = [];

  for (let i = 0; i < count * 2 ; i++) {
    pairNumbers.push(i + 1)
    pairNumbers.push(i + 1)
  }
  return pairNumbers;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
  }

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame() {
  const arr = shuffle(createNumbersArray())
  const wrapper = document.createElement('div');

  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

   const nowOpenCards = [];


  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement('button');
    card.classList.add('card');
    wrapper.append(card);
    card.disabled = false;

    card.addEventListener('click', () => {
      card.textContent = arr[i];
      nowOpenCards.push(card);
      card.classList.add('card_active')
      card.disabled = true;

      if (nowOpenCards.length === 2) {
        const cards = [...nowOpenCards];

        if (cards[0].textContent !== cards[1].textContent) {
          setTimeout(() => {
            cards[0].textContent = '';
            cards[1].textContent = '';
            cards[0].classList.remove('card_active')
            cards[1].classList.remove('card_active')
            cards[0].disabled = false;
            cards[1].disabled = false;
          }, 500)
        }
        if (document.querySelectorAll(".card_active").length === arr.length) {
          alert("Поздравляю, вы выиграли!");
        }
        nowOpenCards.length = 0;
      }
    })
  }
}

startGame();

