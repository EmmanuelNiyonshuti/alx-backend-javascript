// implements a class named Currency

export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw new TypeError('code must be a string');
    } else if (typeof (name) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName)) {
      throw new TypeError('name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    console.log(`${this._name} (${this._code})`);
  }
}
