const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.arr.length ||
      typeof position != 'number'
    ) {
      this.arr = [];
      throw new Error('Error');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let arr = this.arr.join('~~');
    this.arr = [];
    return arr;
  },
};

module.exports = chainMaker;
