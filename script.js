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
    functionKeys: ['BackSpace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'win', 'AltLeft', 'AltRight', 'ControlRight'],
  },

  inputAria: {
    languageToggle: 'en',
    capsLockToggle: false,
  },

  language: {
    en: {
      lowerCase: {
        'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
        'Tab': 'Tab', 'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't', 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p', 'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\', 'Delete': 'del',
        'CapsLock': 'CapsLock', 'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'Semicolon': ';', 'Quote': '\'', 'Enter': 'Enter',
        'ShiftLeft': 'Shift', 'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
      },
      shift: {
        'Backquote': '~', 'Digit1': '!', 'Digit2': '@', 'Digit3': '#', 'Digit4': '$', 'Digit5': '%', 'Digit6': '^', 'Digit7': '&', 'Digit8': '*', 'Digit9': '(', 'Digit0': ')', 'Minus': '_', 'Equal': '+', 'BackSpace': 'BackSpace',
        'Tab': 'Tab', 'KeyQ': 'Q', 'KeyW': 'W', 'KeyE': 'E', 'KeyR': 'R', 'KeyT': 'T', 'KeyY': 'Y', 'KeyU': 'U', 'KeyI': 'I', 'KeyO': 'O', 'KeyP': 'P', 'BracketLeft': '{', 'BracketRight': '}', 'Backslash': '|', 'Delete': 'del',
        'CapsLock': 'CapsLock', 'KeyA': 'A', 'KeyS': 'S', 'KeyD': 'D', 'KeyF': 'F', 'KeyG': 'G', 'KeyH': 'H', 'KeyJ': 'J', 'KeyK': 'K', 'KeyL': 'L', 'Semicolon': ':', 'Quote': '\"', 'Enter': 'Enter',
        'ShiftLeft': 'Shift', 'KeyZ': 'Z', 'KeyX': 'X', 'KeyC': 'C', 'KeyV': 'V', 'KeyB': 'B', 'KeyN': 'N', 'KeyM': 'M', 'Comma': '<', 'Period': '>', 'Slash': '?', 'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
      },
    },

    ru: {
      lowerCase: {
        'Backquote': 'ё', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-', 'Equal': '=', 'BackSpace': 'BackSpace',
        'Tab': 'Tab', 'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к', 'KeyT': 'е', 'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш', 'KeyO': 'щ', 'KeyP': 'з', 'BracketLeft': 'х', 'BracketRight': 'ъ', 'Backslash': '\\', 'Delete': 'del',
        'CapsLock': 'CapsLock', 'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а', 'KeyG': 'п', 'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л', 'KeyL': 'д', 'Semicolon': 'ж', 'Quote': 'э', 'Enter': 'Enter',
        'ShiftLeft': 'Shift', 'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м', 'KeyB': 'и', 'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б', 'Period': 'ю', 'Slash': '.', 'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
      },
      shift: {
        'Backquote': 'Ё', 'Digit1': '!', 'Digit2': '"', 'Digit3': '№', 'Digit4': ';', 'Digit5': '%', 'Digit6': ':', 'Digit7': '?', 'Digit8': '*', 'Digit9': '(', 'Digit0': ')', 'Minus': '_', 'Equal': '+', 'BackSpace': 'BackSpace',
        'Tab': 'Tab', 'KeyQ': 'Й', 'KeyW': 'Ц', 'KeyE': 'У', 'KeyR': 'К', 'KeyT': 'Е', 'KeyY': 'Н', 'KeyU': 'Г', 'KeyI': 'Ш', 'KeyO': 'Щ', 'KeyP': 'З', 'BracketLeft': 'Х', 'BracketRight': 'Ъ', 'Backslash': '/', 'Delete': 'del',
        'CapsLock': 'CapsLock', 'KeyA': 'Ф', 'KeyS': 'Ы', 'KeyD': 'В', 'KeyF': 'А', 'KeyG': 'П', 'KeyH': 'Р', 'KeyJ': 'О', 'KeyK': 'Л', 'KeyL': 'Д', 'Semicolon': 'Ж', 'Quote': 'Э', 'Enter': 'Enter',
        'ShiftLeft': 'Shift', 'KeyZ': 'Я', 'KeyX': 'Ч', 'KeyC': 'С', 'KeyV': 'М', 'KeyB': 'И', 'KeyN': 'Т', 'KeyM': 'Ь', 'Comma': 'Б', 'Period': 'Ю', 'Slash': ',', 'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl', 'win': 'win', 'AltLeft': 'Alt', 'Space': ' ', 'AltRight': 'Alt', 'win': 'win', 'ControlRight': 'Ctrl',
      },
    },
  },



  // method for creating new elements
  createNewElement(tag, tagClass, tagText) {
    const elm = document.createElement(tag);
    elm.className = tagClass;
    elm.innerHTML = tagText;
    return elm;
  },



  // method for create KexBox element, arguments:array keys, array function keys
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
      const keySymbol = this.language[languageToggle]['lowerCase'][elem.dataset.keyCode];
      elem.innerHTML = keySymbol;
    }

    this.inputAria.languageToggle = languageToggle;
    localStorage.setItem('virtualKeyboardLang', languageToggle);
    console.log('method setLanguageLayout - ' + localStorage.getItem('virtualKeyboardLang'));
    
  },


  // method , argument:(not)
  setShiftDownLayout() {
    const arrKeys = this.elements.keyBox.querySelectorAll('.key:not(.key--function)');

    for (let elem of arrKeys) {
      const keySymbol = this.language[this.inputAria.languageToggle]['shift'][elem.dataset.keyCode];
      elem.innerHTML = keySymbol;
    }
  },

  setShiftUpLayout() {
    const arrKeys = this.elements.keyBox.querySelectorAll('.key');

    for (let elem of arrKeys) {
      const keySymbol = this.language[this.inputAria.languageToggle]['lowerCase'][elem.dataset.keyCode];
      elem.innerHTML = keySymbol;
    }
  },

  setCapsLock() {
    const arrKeys = this.elements.keyBox.querySelectorAll('.key:not(.key--function)');

    for (let elem of arrKeys) {
      const keySymbol = elem.innerHTML.toUpperCase();
      elem.innerHTML = keySymbol;
    }
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
    let text = this.elements.textAria.value;
    let st = this.elements.textAria.selectionStart;
    let end = this.elements.textAria.selectionEnd;

    this.elements.textAria.value = text.substring(0, st) + scr + text.substring(end);
    this.elements.textAria.focus();
    this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st + 1;
  },

  //method type Backspace key
  typeBackspace() {
    let text = this.elements.textAria.value;
    let st = this.elements.textAria.selectionStart;
    let end = this.elements.textAria.selectionEnd;

    if (st === end) {
      this.elements.textAria.value = text.substring(0, st - 1) + text.substring(end);
      this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st - 1;

    }
    else {
      this.elements.textAria.value = text.substring(0, st) + text.substring(end);
      this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st;
    }
    this.elements.textAria.focus();
  },

  typeDelete() {
    let text = this.elements.textAria.value;
    let st = this.elements.textAria.selectionStart;
    let end = this.elements.textAria.selectionEnd;

    if (st === end) {
      this.elements.textAria.value = text.substring(0, st) + text.substring(end + 1);
      this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st;

    }
    else {
      this.elements.textAria.value = text.substring(0, st) + text.substring(end);
      this.elements.textAria.selectionStart = this.elements.textAria.selectionEnd = st;
    }
    this.elements.textAria.focus();
  },



  handleFunctionKeys(keyCode) {
    
    switch (keyCode) {
      case 'BackSpace':
        this.typeBackspace();
        break;
      case 'Delete':
        // debugger;
        this.typeDelete();
        break;
      case 'Enter':
        this.type('\n')
        break;
      case 'Tab':
        this.type('\t')
        break;
      case 'ShiftLeft':
        this.setShiftDownLayout();
        break;
      case 'ShiftRight':
        this.setShiftDownLayout();
        break;
      case 'CapsLock':
        let elm = this.elements.keyBox.querySelector('button[data-key-code="CapsLock"]');
        if (!this.inputAria.capsLockToggle) {
          elm.classList.add('turn-on');
          this.setCapsLock();
          this.inputAria.capsLockToggle = true;
        }
        else {
          elm.classList.remove('turn-on');
          this.setShiftUpLayout();
          this.inputAria.capsLockToggle = false;
        }
        break;
    }
  },



  //method handle Event
  handleEvent(event) {
    let elm = this.elements.keyBox.querySelector(`button[data-key-code=${event.code}]`);
    if (!elm) return;

    switch (event.type) {
      case 'keydown':
        elm.classList.add('active');

        if (!(this.elements.functionKeys.includes(elm.dataset.keyCode))) {
          let char = elm.textContent;
          this.type(char);
        }
        if (this.elements.functionKeys.includes(elm.dataset.keyCode)) {
          this.handleFunctionKeys(elm.dataset.keyCode);
        }


        if ((event.ctrlKey && event.altKey)) { //Ctrl+Shift - switch language
          this.switchLanguageLayout();
        };

        event.preventDefault();
        break;

      case 'keyup':
        elm.classList.remove('active');
        // todo
        if (elm.dataset.keyCode === 'ShiftLeft' || elm.dataset.keyCode === 'ShiftRight') {
          this.setShiftUpLayout();
        };
        break;
    }

  },




  // initialization object KeyBoard
  init() {
    //localStorage
    if( localStorage.getItem('virtualKeyboardLang' === null) ){
      console.log('localStorage === null');
      localStorage.setItem('virtualKeyboardLang', 'en');
    }
    this.inputAria.languageToggle = localStorage.getItem('virtualKeyboardLang');
    
    // add title
    this.elements.title = this.createNewElement('h1', 'title', 'Virtual KeyBoard');
    document.body.append(this.elements.title);

    // add text aria
    this.elements.textAria = this.createNewElement('textarea', 'textarea', '');
    document.body.append(this.elements.textAria);
    this.elements.textAria.value = 'enter text here'
    
    // language layout legend 
    this.elements.title = this.createNewElement('p', 'legend', 'Ctrl + Alt - language switch EN/RU');
    document.body.append(this.elements.title);
    
    // add keyBox with keys
    this.elements.keyBox = this.createKeyBox(this.elements.keys, this.elements.functionKeys);
    this.setLanguageLayout(this.inputAria.languageToggle);
    document.body.append(this.elements.keyBox);




    // add EventListener keydown
    window.addEventListener("keydown", (event) => this.handleEvent(event));

    // EventListener keyup
    window.addEventListener("keyup", (event) => this.handleEvent(event));

    // EventListener keyBox
    this.elements.keyBox.addEventListener("mousedown", (event) => {
      let target = event.target;

      if (target.classList.contains('key') && !(target.classList.contains('key--function'))) {
        let char = target.textContent;
        this.type(char);
      }

      if (target.classList.contains('key--function')) {
        this.handleFunctionKeys(target.dataset.keyCode);
      }
    });

    this.elements.keyBox.addEventListener("mouseup", (event) => {
      let target = event.target;

      if (target.dataset.keyCode === 'ShiftLeft' || target.dataset.keyCode === 'ShiftRight') {
        this.setShiftUpLayout();
      }

    });
  },

};



window.addEventListener('DOMContentLoaded', () => {
  KeyBoard.init();
})


// todo
// + keyboard type key content
// + backspace
// + delete
// + enter
// + tab
// + shift
// + capsLock - upperCase
// + save language layout after reload
// + animation keys
// lint 
// gh-pages 
