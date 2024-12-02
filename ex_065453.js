class Stat {
  constructor(arr) {
    this.arr = arr;
  }
  get getCount() {
    return this.arr.length;
  }
  get getMax() {
    return this.arr.sort()[this.arr.length - 1];
  }
  get getMin() {
    return this.arr.sort()[0];
  }
  get getSum() {
    let c = 0;
    for (let i of this.arr) {
      c += Number(i);
    }
    return c;
  }
  get getRange() {
    return this.getMax - this.getMin;
  }
  get getMean() {
    return Math.round(this.getSum / this.arr.length);
  }
  get getMode() {
    /**
     * to count numbers use hashmap
     */
    let ht = {};
    let maxEle = null;
    let maxCount = 0;
    this.arr.forEach((e) => {
      ht[e] = (ht[e] || 0) + 1;
      if (ht[e] > maxCount) {
        maxCount = ht[e];
        maxEle = e;
      }
    });
    return maxEle;
  }

  get getMedian() {
    if (this.arr.length % 2 == 1) {
      return this.arr.sort()[Math.round(this.arr.length / 2) - 1];
    } else {
      return (
        (this.arr.sort()[this.arr.length / 2 - 1] +
          this.arr.sort()[this.arr.length / 2]) /
        2
      );
    }
  }
  get getVarience() {
    /**
     * varience=(sfx2/n)-((sfx/n)**2)
     */

    const ht = {};

    const fx = [];
    const fx2 = [];

    let sfx = 0;
    let sfx2 = 0;

    this.arr.forEach((e) => {
      ht[e] = (ht[e] || 0) + 1;
    });
    for (let [k, v] of Object.entries(ht)) {
      fx.push(Number(k) * Number(v));
      fx2.push(Number(k) * Number(k) * Number(v));
    }
    for (let i of fx) {
      sfx += i;
    }
    for (let j of fx2) {
      sfx2 += j;
    }
    let res = sfx2 / this.arr.length - (sfx / this.arr.length) ** 2;
    return res.toFixed(2);
  }
  get getSD() {
    /**
     * sd=sqrt(varience)
     */
    return Math.sqrt(this.getVarience).toFixed(2);
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const Exercise = new Stat(ages);
console.log(ages);
console.log(`count    :`, Exercise.getCount); //25
console.log(`Max      :`, Exercise.getMax); //38
console.log(`Min      :`, Exercise.getMin); //24
console.log(`Sum      :`, Exercise.getSum); //744
console.log(`Range    :`, Exercise.getRange); //14
console.log(`Mean     :`, Exercise.getMean); //30
console.log(`Mode     :`, Exercise.getMode); //26
console.log(`Median   :`, Exercise.getMedian); //29
console.log(`Varience :`, Exercise.getVarience); //17.54
console.log(`SD       :`, Exercise.getSD); //4.19
