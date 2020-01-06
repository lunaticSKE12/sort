import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([1000, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
