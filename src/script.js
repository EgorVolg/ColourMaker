const cols = document.querySelectorAll(".col"); // Передаем в JS класс колонок
const text = document.querySelectorAll(".col_h1"); // Передаем в js класс текста h1

document.addEventListener("keydown", (event) => {
  event.preventDefault(); // отменяем дефолтное поведение, чтобы при клике не менялся класс
  if (event.code.toLowerCase() === "space") {
    // меняем цвета по кнопке
    setRandomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type; // определяем тип (open\ lock)

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i" // приводим к нижнему регистру
        ? event.target
        : event.target.children[0]; // первый ребенок кнопки (текст)
    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  }
  if (type === "copy") {
    copyToClickboard(event.target.textContent);
  }
});

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text); //copy по клику
}

const generateColor = () => {
  const hexCodes = "0123456789ABCDEF"; // ВСЕ НЕОБХОДИМЫЕ символы для генерации цвета
  let color = ""; // создаем строку color

  for (let i = 0; i < 6; i++) {
    // в for задаем параметры color
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]; // Символ, который необходимо забрать случайным образом
  }

  return "#" + color;
};

function setRandomColors(isInitial, index) {
  const colors = isInitial ? getColorsFromHash() : [];
  cols.forEach((col) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock");
    const colH1Text = col.querySelector("h1");
    const button = col.querySelector("button");
    const color = isInitial
      ? colors[index]
        ? colors[index]
        : generateColor()
      : generateColor();

    if (isLocked) {
      colors.push(text.textContent); //добавляем в массив colors выбранные цвета
      return;
    } // если класс 'fa-lock', то не меняем ничего

    if (!isInitial) {
      colors.push(color);
    }

    colH1Text.textContent = color;
    col.style.background = color;

    setTextColor(button, text, color);
  }); // на каждой итерации получаем колонку и меняем ее фон + выводим текст
  updateHash(colors);
}

function setTextColor(text) {
  text.style.color = "black";
}

function updateHash(colors = []) {
  document.location.hash = colors; //обращаемся к hash
  const colorsMap = colors.toString().substring(1);
  return colorsMap;
}

function getColorsFromHash() {
  if (document.location.hash.length > 7) {
    document.location.hash
      .substring(1)
      .split("-")
      .map((col) => "#" + col);
  }
  return [];
}

setRandomColors(true);
generateColor();
