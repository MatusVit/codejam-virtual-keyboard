(function init() {
  const LANGUAGES = {
    ru: 'ru',
    en: 'en',
  };

  const KeyBoard = {
    elements: {
      title: null,
      textAria: null,
      keyBox: null,
      keys: [
        [
          'Backquote',
          'Digit1',
          'Digit2',
          'Digit3',
          'Digit4',
          'Digit5',
          'Digit6',
          'Digit7',
          'Digit8',
          'Digit9',
          'Digit0',
          'Minus',
          'Equal',
          'Backspace',
        ],
        [
          'Tab',
          'KeyQ',
          'KeyW',
          'KeyE',
          'KeyR',
          'KeyT',
          'KeyY',
          'KeyU',
          'KeyI',
          'KeyO',
          'KeyP',
          'BracketLeft',
          'BracketRight',
          'Backslash',
          'Delete',
        ],
        [
          'CapsLock',
          'KeyA',
          'KeyS',
          'KeyD',
          'KeyF',
          'KeyG',
          'KeyH',
          'KeyJ',
          'KeyK',
          'KeyL',
          'Semicolon',
          'Quote',
          'Enter',
        ],
        [
          'ShiftLeft',
          'KeyZ',
          'KeyX',
          'KeyC',
          'KeyV',
          'KeyB',
          'KeyN',
          'KeyM',
          'Comma',
          'Period',
          'Slash',
          'ArrowUp',
          'ShiftRight',
        ],
        [
          'ControlLeft',
          'MetaLeft',
          'AltLeft',
          'Space',
          'AltRight',
          'ArrowLeft',
          'ArrowDown',
          'ArrowRight',
          'ControlRight',
        ],
      ],
      functionKeys: [
        'Backspace',
        'Tab',
        'Delete',
        'CapsLock',
        'Enter',
        'ShiftLeft',
        'ShiftRight',
        'ControlLeft',
        'MetaLeft',
        'AltLeft',
        'AltRight',
        'ControlRight',
      ],
    },

    inputArea: {
      languageToggle: 'en',
      capsLockToggle: false,
    },

    language: {
      en: {
        lowerCase: {
          Backquote: '`',
          Digit1: '1',
          Digit2: '2',
          Digit3: '3',
          Digit4: '4',
          Digit5: '5',
          Digit6: '6',
          Digit7: '7',
          Digit8: '8',
          Digit9: '9',
          Digit0: '0',
          Minus: '-',
          Equal: '=',
          Backspace: 'Backspace',
          Tab: 'Tab',
          KeyQ: 'q',
          KeyW: 'w',
          KeyE: 'e',
          KeyR: 'r',
          KeyT: 't',
          KeyY: 'y',
          KeyU: 'u',
          KeyI: 'i',
          KeyO: 'o',
          KeyP: 'p',
          BracketLeft: '[',
          BracketRight: ']',
          Backslash: '\\',
          Delete: 'del',
          CapsLock: 'CapsLock',
          KeyA: 'a',
          KeyS: 's',
          KeyD: 'd',
          KeyF: 'f',
          KeyG: 'g',
          KeyH: 'h',
          KeyJ: 'j',
          KeyK: 'k',
          KeyL: 'l',
          Semicolon: ';',
          Quote: '\'',
          Enter: 'Enter',
          ShiftLeft: 'Shift',
          KeyZ: 'z',
          KeyX: 'x',
          KeyC: 'c',
          KeyV: 'v',
          KeyB: 'b',
          KeyN: 'n',
          KeyM: 'm',
          Comma: ',',
          Period: '.',
          Slash: '/',
          ShiftRight: 'Shift',
          ControlLeft: 'Ctrl',
          MetaLeft: 'win',
          AltLeft: 'Alt',
          Space: ' ',
          AltRight: 'Alt',
          ControlRight: 'Ctrl',
          ArrowUp: '&#8593;',
          ArrowRight: '&#8594;',
          ArrowDown: '&#8595;',
          ArrowLeft: '&#8592;',
        },
        shift: {
          Backquote: '~',
          Digit1: '!',
          Digit2: '@',
          Digit3: '#',
          Digit4: '$',
          Digit5: '%',
          Digit6: '^',
          Digit7: '&',
          Digit8: '*',
          Digit9: '(',
          Digit0: ')',
          Minus: '_',
          Equal: '+',
          Backspace: 'Backspace',
          Tab: 'Tab',
          KeyQ: 'Q',
          KeyW: 'W',
          KeyE: 'E',
          KeyR: 'R',
          KeyT: 'T',
          KeyY: 'Y',
          KeyU: 'U',
          KeyI: 'I',
          KeyO: 'O',
          KeyP: 'P',
          BracketLeft: '{',
          BracketRight: '}',
          Backslash: '|',
          Delete: 'del',
          CapsLock: 'CapsLock',
          KeyA: 'A',
          KeyS: 'S',
          KeyD: 'D',
          KeyF: 'F',
          KeyG: 'G',
          KeyH: 'H',
          KeyJ: 'J',
          KeyK: 'K',
          KeyL: 'L',
          Semicolon: ':',
          Quote: '"',
          Enter: 'Enter',
          ShiftLeft: 'Shift',
          KeyZ: 'Z',
          KeyX: 'X',
          KeyC: 'C',
          KeyV: 'V',
          KeyB: 'B',
          KeyN: 'N',
          KeyM: 'M',
          Comma: '<',
          Period: '>',
          Slash: '?',
          ShiftRight: 'Shift',
          ControlLeft: 'Ctrl',
          MetaLeft: 'win',
          AltLeft: 'Alt',
          Space: ' ',
          AltRight: 'Alt',
          ControlRight: 'Ctrl',
          ArrowUp: '&#8593;',
          ArrowRight: '&#8594;',
          ArrowDown: '&#8595;',
          ArrowLeft: '&#8592;',
        },
      },

      ru: {
        lowerCase: {
          Backquote: 'ё',
          Digit1: '1',
          Digit2: '2',
          Digit3: '3',
          Digit4: '4',
          Digit5: '5',
          Digit6: '6',
          Digit7: '7',
          Digit8: '8',
          Digit9: '9',
          Digit0: '0',
          Minus: '-',
          Equal: '=',
          Backspace: 'Backspace',
          Tab: 'Tab',
          KeyQ: 'й',
          KeyW: 'ц',
          KeyE: 'у',
          KeyR: 'к',
          KeyT: 'е',
          KeyY: 'н',
          KeyU: 'г',
          KeyI: 'ш',
          KeyO: 'щ',
          KeyP: 'з',
          BracketLeft: 'х',
          BracketRight: 'ъ',
          Backslash: '\\',
          Delete: 'del',
          CapsLock: 'CapsLock',
          KeyA: 'ф',
          KeyS: 'ы',
          KeyD: 'в',
          KeyF: 'а',
          KeyG: 'п',
          KeyH: 'р',
          KeyJ: 'о',
          KeyK: 'л',
          KeyL: 'д',
          Semicolon: 'ж',
          Quote: 'э',
          Enter: 'Enter',
          ShiftLeft: 'Shift',
          KeyZ: 'я',
          KeyX: 'ч',
          KeyC: 'с',
          KeyV: 'м',
          KeyB: 'и',
          KeyN: 'т',
          KeyM: 'ь',
          Comma: 'б',
          Period: 'ю',
          Slash: '.',
          ShiftRight: 'Shift',
          ControlLeft: 'Ctrl',
          MetaLeft: 'win',
          AltLeft: 'Alt',
          Space: ' ',
          AltRight: 'Alt',
          ControlRight: 'Ctrl',
          ArrowUp: '&#8593;',
          ArrowRight: '&#8594;',
          ArrowDown: '&#8595;',
          ArrowLeft: '&#8592;',
        },
        shift: {
          Backquote: 'Ё',
          Digit1: '!',
          Digit2: '"',
          Digit3: '№',
          Digit4: ';',
          Digit5: '%',
          Digit6: ':',
          Digit7: '?',
          Digit8: '*',
          Digit9: '(',
          Digit0: ')',
          Minus: '_',
          Equal: '+',
          Backspace: 'Backspace',
          Tab: 'Tab',
          KeyQ: 'Й',
          KeyW: 'Ц',
          KeyE: 'У',
          KeyR: 'К',
          KeyT: 'Е',
          KeyY: 'Н',
          KeyU: 'Г',
          KeyI: 'Ш',
          KeyO: 'Щ',
          KeyP: 'З',
          BracketLeft: 'Х',
          BracketRight: 'Ъ',
          Backslash: '/',
          Delete: 'del',
          CapsLock: 'CapsLock',
          KeyA: 'Ф',
          KeyS: 'Ы',
          KeyD: 'В',
          KeyF: 'А',
          KeyG: 'П',
          KeyH: 'Р',
          KeyJ: 'О',
          KeyK: 'Л',
          KeyL: 'Д',
          Semicolon: 'Ж',
          Quote: 'Э',
          Enter: 'Enter',
          ShiftLeft: 'Shift',
          KeyZ: 'Я',
          KeyX: 'Ч',
          KeyC: 'С',
          KeyV: 'М',
          KeyB: 'И',
          KeyN: 'Т',
          KeyM: 'Ь',
          Comma: 'Б',
          Period: 'Ю',
          Slash: ',',
          ShiftRight: 'Shift',
          ControlLeft: 'Ctrl',
          MetaLeft: 'win',
          AltLeft: 'Alt',
          Space: ' ',
          AltRight: 'Alt',
          ControlRight: 'Ctrl',
          ArrowUp: '&#8593;',
          ArrowRight: '&#8594;',
          ArrowDown: '&#8595;',
          ArrowLeft: '&#8592;',
        },
      },
    },

    createNewElement({ tag, tagClass, tagText }) {
      const elements = document.createElement(tag);
      elements.className = tagClass;
      elements.innerHTML = tagText;
      return elements;
    },


    createKeyBox(arrKeys, arrFuncKeys) {
      const keyBox = this.createNewElement({ tag: 'div', tagClass: 'keyboard', tagText: '' });

      for (let i = 0; i < arrKeys.length; i += 1) {
        const keysRow = this.createNewElement({ tag: 'div', tagClass: 'keys-row', tagText: '' });

        for (let j = 0; j < arrKeys[i].length; j += 1) {
          const key = arrKeys[i][j];
          let classesStr = `key ${key}`.toLowerCase();

          if (arrFuncKeys.includes(key)) classesStr = `${classesStr} key--function`;

          const keyElm = this.createNewElement({ tag: 'button', tagClass: classesStr, tagText: '' });
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
      for (let i = 0; i < arrKeys.length; i += 1) {
        const element = arrKeys[i];
        const keySymbol = this.language[languageToggle].lowerCase[element.dataset.keyCode];
        element.innerHTML = keySymbol;
      }
      this.inputArea.languageToggle = languageToggle;
      localStorage.setItem('virtualKeyboardLang', languageToggle);
    },


    // method set uppercase keyboard when downKey Shift, argument:(not)
    setShiftDownLayout() {
      const arrKeys = this.elements.keyBox.querySelectorAll('.key:not(.key--function)');
      for (let i = 0; i < arrKeys.length; i += 1) {
        const element = arrKeys[i];
        const keySymbol = this.language[this.inputArea.languageToggle]
          .shift[element.dataset.keyCode];
        element.innerHTML = keySymbol;
      }
    },


    // method set lowercase keyboard when upKey Shift, argument:(not)
    setShiftUpLayout() {
      const arrKeys = this.elements.keyBox.querySelectorAll('.key');
      for (let i = 0; i < arrKeys.length; i += 1) {
        const element = arrKeys[i];
        const keySymbol = this.language[this.inputArea.languageToggle]
          .lowerCase[element.dataset.keyCode];
        element.innerHTML = keySymbol;
      }
    },


    // method switch lowercase keyboard when upKey CapsLock, argument:(not)
    setCapsLock() {
      const arrKeys = this.elements.keyBox.querySelectorAll('.key:not(.key--function)');

      for (let i = 0; i < arrKeys.length; i += 1) {
        const element = arrKeys[i];
        const keySymbol = element.innerHTML.toUpperCase();
        element.innerHTML = keySymbol;
      }
    },


    // method switch Language Layout for keyboard, argument:(not)
    switchLanguageLayout() {
      if (this.inputArea.languageToggle === LANGUAGES.en) {
        this.inputArea.languageToggle = LANGUAGES.ru;
      } else if (this.inputArea.languageToggle === LANGUAGES.ru) {
        this.inputArea.languageToggle = LANGUAGES.en;
      }
      this.setLanguageLayout(this.inputArea.languageToggle);
    },


    // method type from screen keys
    type(char) {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      this.elements.textAria.value = `${text.substring(0, start)}${char}${text.substring(end)}`;
      this.elements.textAria.selectionStart = start + 1;
      this.elements.textAria.selectionEnd = start + 1;
    },


    typeBackspace() {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      if (start === end) {
        this.elements.textAria.value = text.substring(0, start - 1) + text.substring(end);
        this.elements.textAria.selectionStart = start - 1;
        this.elements.textAria.selectionEnd = start - 1;
      } else {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      }
      this.elements.textAria.focus();
    },


    // method delete symbol in textAria
    typeDelete() {
      const text = this.elements.textAria.value;
      const start = this.elements.textAria.selectionStart;
      const end = this.elements.textAria.selectionEnd;

      if (start === end) {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end + 1);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      } else {
        this.elements.textAria.value = text.substring(0, start) + text.substring(end);
        this.elements.textAria.selectionStart = start;
        this.elements.textAria.selectionEnd = start;
      }
      this.elements.textAria.focus();
    },


    toggleCapsLock() {
      const element = this.elements.keyBox.querySelector('button[data-key-code="CapsLock"]');
      if (!this.inputArea.capsLockToggle) {
        element.classList.add('turn-on');
        this.setCapsLock();
        this.inputArea.capsLockToggle = true;
      } else {
        element.classList.remove('turn-on');
        this.setShiftUpLayout();
        this.inputArea.capsLockToggle = false;
      }
    },


    handleFunctionKeys(keyCode) {
      switch (keyCode) {
        case 'Backspace':
          this.typeBackspace();
          break;
        case 'Delete':
          this.typeDelete();
          break;
        case 'Enter':
          this.type('\n');
          break;
        case 'Tab':
          this.type('\t');
          break;
        case 'ShiftLeft':
          this.setShiftDownLayout();
          break;
        case 'ShiftRight':
          this.setShiftDownLayout();
          break;
        case 'CapsLock':
          this.toggleCapsLock();
          break;
        // no default
      }
    },


    // method handle events of keyBoard: keydown, 'keyup'
    handleEvent(event) {
      const element = this.elements.keyBox.querySelector(`button[data-key-code=${event.code}]`);
      if (!element) return;

      switch (event.type) {
        case 'keydown':
          element.classList.add('active');
          if (!(this.elements.functionKeys.includes(element.dataset.keyCode))) {
            const char = element.textContent;
            this.type(char);
          }
          if (this.elements.functionKeys.includes(element.dataset.keyCode)) {
            this.handleFunctionKeys(element.dataset.keyCode);
          }
          if ((event.ctrlKey && event.altKey)) { // Ctrl+Shift - switch language
            this.switchLanguageLayout();
          }
          event.preventDefault();
          break;

        case 'keyup':
          element.classList.remove('active');
          if (element.dataset.keyCode === 'ShiftLeft' || element.dataset.keyCode === 'ShiftRight') {
            this.setShiftUpLayout();
          }
          break;
        // no default
      }
    },


    // initialization object KeyBoard
    init() {
      // localStorage
      if (!(Object.prototype.hasOwnProperty.call(localStorage, 'virtualKeyboardLang'))) {
        localStorage.setItem('virtualKeyboardLang', 'en');
      }
      this.inputArea.languageToggle = localStorage.getItem('virtualKeyboardLang');

      // add title
      this.elements.title = this.createNewElement({ tag: 'h1', tagClass: 'title', tagText: 'Virtual KeyBoard' });
      document.body.append(this.elements.title);

      // add text aria
      this.elements.textAria = this.createNewElement({ tag: 'textarea', tagClass: 'textarea', tagText: '' });
      document.body.append(this.elements.textAria);
      // this.elements.textAria.value = 'enter text here';

      // language layout legend
      this.elements.title = this.createNewElement({ tag: 'p', tagClass: 'legend', tagText: 'Ctrl + Alt - language switch EN/RU, OS Windows' });
      document.body.append(this.elements.title);

      // add keyBox with keys
      this.elements.keyBox = this.createKeyBox(this.elements.keys, this.elements.functionKeys);
      this.setLanguageLayout(this.inputArea.languageToggle);
      document.body.append(this.elements.keyBox);

      // add EventListener keydown
      window.addEventListener('keydown', (event) => this.handleEvent(event));

      // EventListener keyup
      window.addEventListener('keyup', (event) => this.handleEvent(event));

      // EventListener keyBox
      this.elements.keyBox.addEventListener('mousedown', (event) => {
        const { target } = event;

        if (target.classList.contains('key') && !(target.classList.contains('key--function'))) {
          const char = target.textContent;
          this.type(char);
        }

        if (target.classList.contains('key--function')) {
          this.handleFunctionKeys(target.dataset.keyCode);
        }
      });

      // EventListener keyBox
      this.elements.keyBox.addEventListener('mouseup', (event) => {
        const { target } = event;

        if (target.dataset.keyCode === 'ShiftLeft' || target.dataset.keyCode === 'ShiftRight') {
          this.setShiftUpLayout();
        }

        this.elements.textAria.focus();
      });

      this.elements.textAria.focus();
    },
  };

  window.addEventListener('DOMContentLoaded', () => {
    KeyBoard.init();
  });
}());
