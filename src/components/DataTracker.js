class DataTracker {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
  }

  showMin() {
    return Math.min(...this.values);
  }

  showMax() {
    return Math.max(...this.values);
  }

  showMean() {
    const sum = this.values.reduce((acc, value) => acc + value);
    return (sum / this.values.length).toFixed(2);
  }

  showMode() {
    let counts = {};
    this.values.forEach(value => {
      counts[value] ? counts[value]++ : counts[value] = 1
    });
    return Object.keys(counts).reduce((acc, value) => counts[acc] > counts[value] ? acc : value);
  }
};

export default DataTracker;
