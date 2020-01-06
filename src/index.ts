import { CharacterCollection } from './CharactersCollection';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numberCollection = new NumberCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const characterCollection = new CharacterCollection('Cbasbca');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
