/* eslint-disable no-plusplus */
const KeyBoard = {

  elements: {
    title: null,
    textAria: null,
    keyBox: null,
    keys: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '.', '/', 'Shift'],
      ['Ctrl', 'win', 'Alt', 'space', 'Alt', 'win', 'Ctrl'],
    ],
  },

  handles: {
    handle: null,
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
        let classesStr = `key key-${key}`.toLowerCase();
        if (key.length > 1) classesStr = `${classesStr} key--function`;
        const keyElm = this.createNewElement('button', classesStr, key);
        keysRow.append(keyElm);
      }
      this.elements.keyBox.append(keysRow);
    }
    document.body.append(this.elements.keyBox);
  },

};

KeyBoard.init();
