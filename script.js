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
    value: '',
    languageToggle: 'en',
    capsLockToggle: false,
  },

  language: {
    en: {
      'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
      'Tab': 'Tab', 'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't', 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p', 'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\', 'Delete': 'del',
      'CapsLock': 'CapsLock', 'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'Semicolon': ';', 'Quote': '\'', 'Enter': 'Enter',
      'ShiftLeft': 'Shift', 'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ShiftRight': 'Shift',
      'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': '', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
    },
    ru: {
      'Backquote': 'ё', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
      'Tab': 'Tab', 'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е', 'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'щ', 'KeyP': 'з', 'BracketLeft': 'х', 'BracketRight': 'ъ', 'Backslash': '\\', 'Delete': 'del',
      'CapsLock': 'CapsLock', 'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п', 'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д', 'Semicolon': 'ж', 'Quote': 'э', 'Enter': 'Enter',
      'ShiftLeft': 'Shift', 'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и', 'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б', 'Period': 'ю', 'Slash': '.', 'ShiftRight': 'Shift',
      'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': '', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
    },
  },

  // method for creating new elements
  createNewElement(tag, tagClass, tagText) {
    const elm = document.createElement(tag);
    elm.className = tagClass;
    elm.innerHTML = tagText;
    return elm;
  },

  init() {
    // add title
    this.elements.title = this.createNewElement('h1', 'title', 'Virtual KeyBoard');
    document.body.append(this.elements.title);

    // add text aria
    this.elements.textAria = this.createNewElement('textarea', 'textarea', '');
    document.body.append(this.elements.textAria);

    // add keyBox with keys
    this.elements.keyBox = this.createNewElement('div', 'keyboard', '');

    for (let i = 0; i < this.elements.keys.length; i++) {
      const keysRow = this.createNewElement('div', 'keys-row', '');

      for (let j = 0; j < this.elements.keys[i].length; j++) {
        const key = this.elements.keys[i][j];
        let classesStr = `key ${key}`.toLowerCase();

        // add .key--function for function keys
        if (this.elements.functionKeys.includes(key)) classesStr = `${classesStr} key--function`;

        const keySymbol = this.language[this.inputAria.languageToggle][key];
        const keyElm = this.createNewElement('button', classesStr, keySymbol);
        keysRow.append(keyElm);
      }
      this.elements.keyBox.append(keysRow);
    }
    document.body.append(this.elements.keyBox);

    window.addEventListener("keydown", (event) => {
      let codeClass = event.code.toLowerCase();
      let elm = document.body.getElementsByClassName(codeClass);
     // todo error !!!
      elm.classList.toggle('active');
      
    });




  },

  // handleKeyBoard(event){
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


