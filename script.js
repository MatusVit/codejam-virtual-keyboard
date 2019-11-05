/* eslint-disable no-plusplus */
const KeyBoard = {

  elements: {
    title: null,
    textAria: null,
    keyBox: null,
    keys: [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BackSpace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
      ['ControlLeft', 'win', 'AltLeft', 'Space', 'AltRight', 'win', 'ControlRight'],
    ],
    functionKeys: ['BackSpace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'win', 'AltLeft', 'Space', 'AltRight', 'ControlRight'],
  },

  handles: {
    handleKeyBoard: null,
  },

  inputAria: {
    languageToggle: 'en',
    capsLockToggle: false,
  },

  language: {
    en: {
      'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
      'Tab': 'Tab', 'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't', 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p', 'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\', 'Delete': 'del',
      'CapsLock': 'CapsLock', 'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'Semicolon': ';', 'Quote': '\'', 'Enter': 'Enter',
      'ShiftLeft': 'Shift', 'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ShiftRight': 'Shift',
      'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
    },
    ru: {
      'Backquote': 'ё', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
      'Tab': 'Tab', 'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е', 'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'щ', 'KeyP': 'з', 'BracketLeft': 'х', 'BracketRight': 'ъ', 'Backslash': '\\', 'Delete': 'del',
      'CapsLock': 'CapsLock', 'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п', 'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д', 'Semicolon': 'ж', 'Quote': 'э', 'Enter': 'Enter',
      'ShiftLeft': 'Shift', 'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и', 'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б', 'Period': 'ю', 'Slash': '.', 'ShiftRight': 'Shift',
      'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
    },
  },



  // method for creating new elements
  createNewElement(tag, tagClass, tagText) {
    const elm = document.createElement(tag);
    elm.className = tagClass;
    elm.innerHTML = tagText;
    return elm;
  },



  // method for create KexBox element, arguments:(array keys, array function keys)
  createKeyBox(arrKeys, arrFuncKeys) {
    const keyBox = this.createNewElement('div', 'keyboard', '');

    for (let i = 0; i < arrKeys.length; i++) {
      const keysRow = this.createNewElement('div', 'keys-row', '');

      for (let j = 0; j < arrKeys[i].length; j++) {
        const key = arrKeys[i][j];
        let classesStr = `key ${key}`.toLowerCase();

        // add .key--function for function keys
        if (arrFuncKeys.includes(key)) classesStr = `${classesStr} key--function`;

        const keyElm = this.createNewElement('button', classesStr, '');
        keyElm.setAttribute('data-key-code', key);
        keysRow.append(keyElm);
      }
      keyBox.append(keysRow);
    }

    return keyBox;
  },



  // method for make keyboard language layout, argument:('en' or 'ru')
  setLanguageLayout(languageToggle) {
    const arrKeys = this.elements.keyBox.querySelectorAll('.key');

    for (let elem of arrKeys) {
      const keySymbol = this.language[languageToggle][elem.dataset.keyCode];
      elem.innerHTML = keySymbol;
    }

    this.inputAria.languageToggle = languageToggle;
  },


  // method switch Language Layout for keyboard, argument:(not)
  switchLanguageLayout() {
    if (this.inputAria.languageToggle === 'en') {
      this.inputAria.languageToggle = 'ru';
    } else if (this.inputAria.languageToggle === 'ru') {
      this.inputAria.languageToggle = 'en';
    }
    this.setLanguageLayout(this.inputAria.languageToggle);
  },

  //method type from screen keys
  type(scr) {
  // debugger;    
    let text = this.elements.textAria.value;
    let st = this.elements.textAria.selectionStart;
    let end = this.elements.textAria.selectionEnd;

    this.elements.textAria.value = text.substring(0, st) + scr + text.substring(end);
    this.elements.textAria.focus();
    this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st + 1;
  },




  // initialization object KeyBoard
  init() {
    // add title
    this.elements.title = this.createNewElement('h1', 'title', 'Virtual KeyBoard');
    document.body.append(this.elements.title);

    // add text aria
    this.elements.textAria = this.createNewElement('textarea', 'textarea', '');
    document.body.append(this.elements.textAria);
    this.elements.textAria.value = 'enter text here'

    // add keyBox with keys
    this.elements.keyBox = this.createKeyBox(this.elements.keys, this.elements.functionKeys);
    this.setLanguageLayout(this.inputAria.languageToggle);
    document.body.append(this.elements.keyBox);

    // add EventListener keydown
    window.addEventListener("keydown", (event) => {
      let selector = `.key.${event.code.toLowerCase()}`;
      let elm = this.elements.keyBox.querySelector(selector);
      if (!elm) return;
      elm.classList.add('active');
    });

    // EventListener keyup
    window.addEventListener("keyup", (event) => {
      let selector = `.key.${event.code.toLowerCase()}`;
      let elm = this.elements.keyBox.querySelector(selector);
      if (!elm) return;
      elm.classList.remove('active');
    });

    // EventListener keyBox
    this.elements.keyBox.addEventListener("click", (event) => {
      let target = event.target;

      if (target.classList.contains('key')) {
          let char = target.textContent;
          this.type(char);
          return;
        }
    });


    // this.switchLanguageLayout();
  },



  // handleKeyBoard(event) {
  //   let target = ev.target;
  //   while (!(target.classList.contains('key'))) {
  //     if (target.tagName == 'button') {
  //       target.classList.toggle(':active');
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
  // },
};



window.addEventListener('DOMContentLoaded', () => {
  KeyBoard.init();
})


// todo
// 
