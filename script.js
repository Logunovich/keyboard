class Button {
  constructor(value, code, last = false, secondValue = null, changeLang = null, extraClass = null) {
    this.value = value;
    this.code = code;
    this.last = last;
    this.secondValue = secondValue;
    this.changeLang = changeLang;
    this.extraClass = extraClass;
  }
}

const WRAPPER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const KEYBOARD_ROW = document.createElement('div');
const TITLE = document.createElement('div');
const TITLE_TEXT = document.createElement('h1');
const TEXT_AREA = document.createElement('div');
const TEXT_AREA_FIELD = document.createElement('textarea');
const INFO_BLOCK = document.createElement('p');


let curLeng = 'rus';
let curCaps = 's';
let inputVal = `${curLeng}-${curCaps}`;
let isCaps = false;
let activeShift = false;

TEXT_AREA_FIELD.name = "text";
TEXT_AREA_FIELD.classList.add('text__area_field')
TEXT_AREA_FIELD.placeholder = "А я сейчас вам покажу откуда...";
TEXT_AREA_FIELD.cols = "110";
TEXT_AREA_FIELD.rows = "10";

INFO_BLOCK.innerHTML = `Клавиатура создана в операционной системе MacOS <br> 
                        Для переключения языка комбинация: левыe Cmnd + Opt (Win + Alt если вы проверяете с Windows)`

WRAPPER.classList.add('wrapper');
KEYBOARD.classList.add('keyboard');
KEYBOARD_ROW.classList.add('keyboard_row');
TITLE_TEXT.textContent = 'RSS Виртуальная клавиатура';
TITLE.classList.add('title');
TITLE.append(TITLE_TEXT);
TEXT_AREA.classList.add('text__area');
TEXT_AREA.append(TEXT_AREA_FIELD);


document.body.append(WRAPPER);
WRAPPER.append(TITLE);
WRAPPER.append(TEXT_AREA);
WRAPPER.append(KEYBOARD);
KEYBOARD.append(KEYBOARD_ROW);
WRAPPER.append(INFO_BLOCK);

const ALL_BUTTONS = [];

function addBtn(value, code, last = false, secondValue = null, changeLang = null, extraClass = null) {
  const button = new Button(value, code, last, secondValue, changeLang, extraClass);
  ALL_BUTTONS.push(button)
}

addBtn('§', 'Backquote', false, '±', ['>', '<']);
addBtn('1', 'Digit1', false, '!', ['1', '!']);
addBtn('2', 'Digit2', false, '@', ['2', '"']);
addBtn('3', 'Digit3', false, '#', ['3', '№']);
addBtn('4', 'Digit4', false, '$', ['4', '%']);
addBtn('5', 'Digit5', false, '%', ['5', ':']);
addBtn('6', 'Digit6', false, '^', ['6', ',']);
addBtn('7', 'Digit7', false, '&', ['7', '.']);
addBtn('8', 'Digit8', false, '*', ['8', ';']);
addBtn('9', 'Digit9', false, '(', ['9', '(']);
addBtn('0', 'Digit0', false, ')', ['0', ')']);
addBtn('-', 'Minus', false, '_', ['-', '_']);
addBtn('=', 'Equal', false, '+', ['=', '+']);
addBtn('&#8592;', 'Backspace', true, null, null, ['keyboard_btn-last1', 'keyboard_btn-special']);
addBtn('&#8594;', 'Tab', false, null, null, ['keyboard_btn-first2', 'keyboard_btn-special']);
addBtn('q', 'KeyQ', false, 'Q', ['й', 'Й']);
addBtn('w', 'KeyW', false, 'W', ['ц', 'Ц']);
addBtn('e', 'KeyE', false, 'E', ['у', 'У']);
addBtn('r', 'KeyR', false, 'R', ['к', 'К']);
addBtn('t', 'KeyT', false, 'T', ['е', 'Е']);
addBtn('y', 'KeyY', false, 'Y', ['н', 'Н']);
addBtn('u', 'KeyU', false, 'U', ['г', 'Г']);
addBtn('i', 'KeyI', false, 'I', ['ш', 'Ш']);
addBtn('o', 'KeyO', false, 'O', ['щ', 'Щ']);
addBtn('p', 'KeyP', false, 'P', ['з', 'З']);
addBtn('[', 'BracketLeft', false, '{', ['х', 'Х']);
addBtn(']', 'BracketRight', false, '}', ['ъ', 'Ъ']);
addBtn('\\', 'Backslash', true, '|', ['ё', 'Ё']);
addBtn('Caps', 'CapsLock', false, null, null, ['keyboard_btn-first3', 'keyboard_btn-special']);
addBtn('a', 'KeyA', false, 'A', ['ф', 'Ф']);
addBtn('s', 'KeyS', false, 'S', ['ы', 'Ы']);
addBtn('d', 'KeyD', false, 'D', ['в', 'В']);
addBtn('f', 'KeyF', false, 'F', ['а', 'А']);
addBtn('g', 'KeyG', false, 'G', ['п', 'П']);
addBtn('h', 'KeyH', false, 'H', ['р', 'Р']);
addBtn('j', 'KeyJ', false, 'J', ['о', 'О']);
addBtn('k', 'KeyK', false, 'K', ['л', 'Л']);
addBtn('l', 'KeyL', false, 'L', ['д', 'Д']);
addBtn(';', 'Semicolon', false, ':', ['ж', 'Ж']);
addBtn('\'', 'Quote', false, '"', ['э', 'Э']);
addBtn('Enter', 'Enter', true, null, null, ['keyboard_btn-last3', 'keyboard_btn-special']);
addBtn('Shift', 'ShiftLeft', false, null, null, ['keyboard_btn-first4', 'keyboard_btn-special']);
addBtn('`', 'IntlBackslash', false, '~', [']', '[']);
addBtn('z', 'KeyZ', false, 'Z', ['я', 'Я']);
addBtn('x', 'KeyX', false, 'X', ['ч', 'Ч']);
addBtn('c', 'KeyC', false, 'C', ['с', 'С']);
addBtn('v', 'KeyV', false, 'V', ['м', 'М']);
addBtn('b', 'KeyB', false, 'B', ['и', 'И']);
addBtn('n', 'KeyN', false, 'N', ['т', 'Т']);
addBtn('m', 'KeyM', false, 'M', ['ь', 'Ь']);
addBtn(',', 'Comma', false, '<', ['б', 'Б']);
addBtn('.', 'Period', false, '>', ['ю', 'Ю']);
addBtn('/', 'Slash', false, '?', ['/', '?']);
addBtn('&#8593;', 'ArrowUp', false, null, null, ['keyboard_btn-special']);
addBtn('Shift', 'ShiftRight', true, null, null, ['keyboard_btn', 'keyboard_btn-special']);
addBtn('Ctrl', 'ControlLeft', false, null, null, ['keyboard_btn-special']);
addBtn('Opt', 'AltLeft', false, null, null, ['keyboard_btn-special']);
addBtn('Cmnd', 'MetaLeft', false, null, null, ['keyboard_btn-special', 'keyboard_btn-command']);
addBtn(' ', 'Space', false, ' ', [' ', ' '], ['keyboard_btn-space']);
addBtn('Cmnd', 'MetaRight', false, null, null, ['keyboard_btn-special', 'keyboard_btn-command']);
addBtn('Opt', 'AltRight', false, null, null, ['keyboard_btn-special']);
addBtn('&#8592;', 'ArrowLeft', false, null, null, ['keyboard_btn-special']);
addBtn('&#8595;', 'ArrowDown', false, null, null, ['keyboard_btn-special']);
addBtn('&#8594;', 'ArrowRight', true, null, null, ['keyboard_btn-special']);


function changeSymbols() {
  inputVal = `${curLeng}-${curCaps}`;
  KEYBOARD.innerHTML = '';
  KEYBOARD_ROW.innerHTML = '';
  KEYBOARD.append(KEYBOARD_ROW);

  ALL_BUTTONS.forEach((item) => {
    const newBtn = document.createElement('div');
    const keyboardRow = document.querySelectorAll('.keyboard_row');
    newBtn.classList.add(`keyboard_btn`);
    newBtn.id = item.code;
    if (item.extraClass) {
      item.extraClass.forEach(item => {
        newBtn.classList.add(item);
      })
    }
  
    if (item.value.length === 1) {
      switch (inputVal) {
        case 'eng-s': 
          newBtn.innerHTML = item.value;
          break;
        case 'eng-b':
          if (item.code.includes('Key')) {
            newBtn.innerHTML = item.secondValue; 
          } else if (activeShift) {
            newBtn.innerHTML = item.secondValue; 
          } else {
            newBtn.innerHTML = item.value; 
          }
          break;
        case 'rus-s':
          newBtn.innerHTML = item.changeLang[0];
          break;
        case 'rus-b':
          if (item.changeLang[0].charCodeAt() >= 1040 && item.changeLang[0].charCodeAt() <= 1103
              || item.changeLang[0].charCodeAt() === 1025 || item.changeLang[0].charCodeAt() === 1105) {
            newBtn.innerHTML = item.changeLang[1]; 
          } else if (activeShift) {
            newBtn.innerHTML = item.changeLang[1]; 
          } else {
            newBtn.innerHTML = item.value; 
          }
          break;
      }
    } else {
      newBtn.innerHTML = item.value;
    } 
    
    keyboardRow[keyboardRow.length-1].append(newBtn);
  
    if (item.last) {
      const newRow = document.createElement('div');
      newRow.classList.add('keyboard_row');
      KEYBOARD.append(newRow);
    }

    newBtn.addEventListener('click', (e) => {
      textEdit(item)
    })
  });

  const LEFT_SHIFT = document.getElementById('ShiftLeft');
  const RIHGT_SHIFT = document.getElementById('ShiftRight');
  const CAPS_LOCK = document.getElementById('CapsLock');
  const BACKSPACE = document.getElementById('Backspace');

  BACKSPACE.addEventListener('click', () => {
    TEXT_AREA_FIELD.value = TEXT_AREA_FIELD.value.slice(0, TEXT_AREA_FIELD.value.length - 1);
  })

  CAPS_LOCK.addEventListener('click', () => {
    curCaps = curCaps === 's' ? 'b' : 's';
    isCaps = !isCaps;
    changeSymbols();
  });

  LEFT_SHIFT.addEventListener('mousedown', () => {
    curCaps = curCaps === 's' ? 'b' : 's';
    activeShift = true;
    changeSymbols();
    document.getElementById('ShiftLeft').classList.add('active');
  });

  LEFT_SHIFT.addEventListener('mouseup', () => {
    curCaps = curCaps === 's' ? 'b' : 's';
    activeShift = false;
    changeSymbols();
    document.getElementById('ShiftLeft').classList.remove('active');
  });

  RIHGT_SHIFT.addEventListener('mousedown', () => {
    curCaps = curCaps === 's' ? 'b' : 's';
    activeShift = true;
    changeSymbols();
    document.getElementById('ShiftRight').classList.add('active');
  });

  RIHGT_SHIFT.addEventListener('mouseup', () => {
    curCaps = curCaps === 's' ? 'b' : 's';
    activeShift = false;
    changeSymbols();
    document.getElementById('ShiftRight').classList.remove('active');
  });
}

changeSymbols();

function textEdit(item) {
  const curElement = document.activeElement;
  if (curElement.classList[0] === 'text__area_field') {
    return;
  };
  if (item.value.length === 1) {
    switch (inputVal) {
      case 'eng-s': 
      TEXT_AREA_FIELD.value += item.value;
        break;
      case 'eng-b':
        TEXT_AREA_FIELD.value += item.secondValue;
        break;
      case 'rus-s':
        TEXT_AREA_FIELD.value += item.changeLang[0];
        break;
      case 'rus-b':
        TEXT_AREA_FIELD.value += item.changeLang[1];
        break;
    }
  }
}

let activeCommand = false;
let activeOption = false;

const SWITCH_LANG = () => {
  if (activeCommand && activeOption) {
    curLeng = curLeng === 'eng' ? 'rus' : 'eng';
    changeSymbols();
  }
} 

window.addEventListener('keydown', (event) => {
  const keyCode = event.code;
  const owrBtn = ALL_BUTTONS.filter(item => item.code === keyCode);
  textEdit(owrBtn[0]);

  if (owrBtn[0].value === 'Shift') {
    activeShift = true;
    curCaps = curCaps === 's' ? 'b' : 's';
    changeSymbols();
  } else if (owrBtn[0].code === 'MetaLeft' || owrBtn[0].code === 'MetaRigth') {
    activeCommand = true;
  } else if (owrBtn[0].code === 'AltLeft' || owrBtn[0].code === 'AltRigth') {
    activeOption = true;
  }
  SWITCH_LANG();
  document.querySelector(`#${owrBtn[0].code}`).classList.add('active');
}, false);

window.addEventListener('keyup', (event) => {
  const keyCode = event.code;
  const owrBtn = ALL_BUTTONS.filter(item => item.code === keyCode);
  if (owrBtn[0].value === 'Shift') {
    activeShift = false;
    curCaps = curCaps === 's' ? 'b' : 's';
    changeSymbols();
  } else if (owrBtn[0].code === 'MetaLeft' || owrBtn[0].code === 'MetaRigth') {
    activeCommand = false;
  } else if (owrBtn[0].code === 'AltLeft' || owrBtn[0].code === 'AltRigth') {
    activeOption = false;
  }
  SWITCH_LANG();
  document.querySelector(`#${owrBtn[0].code}`).classList.remove('active');
}, false);

window.addEventListener('keydown', (event) => {
  const keyCode = event.code;
  const owrBtn = ALL_BUTTONS.filter(item => item.code === keyCode);
 
  if (owrBtn[0].code === 'CapsLock') {

    curCaps = curCaps === 's' ? 'b' : 's';
    isCaps = !isCaps;
    changeSymbols();
    document.querySelector(`#${owrBtn[0].code}`).classList.add('active');
  } 
}, false);

window.addEventListener('keydown', (event) => {
  const keyCode = event.code;
  const owrBtn = ALL_BUTTONS.filter(item => item.code === keyCode);
 
  if (owrBtn[0].code === 'Backspace') {
    TEXT_AREA_FIELD.value = TEXT_AREA_FIELD.value.slice(0, TEXT_AREA_FIELD.value.length - 1);
  } 
}, false);

