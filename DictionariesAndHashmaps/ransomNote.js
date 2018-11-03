const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
const note = ['two', 'times', 'two', 'is', 'four'];

function checkMagazine(magazine, note) {
  const dictionary = {};
  magazine.forEach(word => {
    if(dictionary[word]) {
      dictionary[word] = dictionary[word] + 1
    } else {
      dictionary[word] = 1;
    }

  });

  let result = true;
  for(let i=0; i<note.length; i++) {
    const word = note[i];
    if(!dictionary[word] || dictionary[word] === 0) {
      result = false;
      break;
    } else {
      dictionary[word] = dictionary[word] - 1;
    }
  }

  return result ? 'Yes' : 'No'
}

console.log(checkMagazine(magazine, note));

/**
 * 문제: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 *
 * 철수는 자신의 note에 적힌 문구를 magazine을 오려 만들려고 한다. magazine에 있는 단어들이 문구를 만들기에 충분한지 구하여라.
 * magazine, note 두개의 문자열 배열이 주어진다. note에 있는 단어들을 magazine에 있는 단어들로 조합이 가능하면 'Yes', 아니면 'No'를 리턴하라.
 * 단어는 대소문자를 구분하고 note 문구에는 같은 단어도 사용될 수 있다.
 *
 * 1<= m, n <= 30000
 *
 * example)
 * magazine: give me one grand today night
 * note: give one grand today
 * 'Yes'
 *
 * 처음에는 단순하게 magazine과 note를 이중 for문으로 순회하면서 note의 단어들이 magazine에 포함되어 있는지를 체크하면 되겠다고 생각했다.
 * 하지만 for문으로 일일이 순회하면서 체크하면 최대 30000 * 30000 번을 순회해야하기 때문에 결코 좋은 방법이라고 할 수 없다.
 * 그래서 object로 magazine의 hash table을 만들었다. key, value로는 각각 단어와 단어의 갯수로 하였다.
 * javascript object는 dictionary-like 데이터 구조를 가지기 때문에 시간복잡도를 O(1)이라고 가정할 수 있다.
 * https://stackoverflow.com/questions/7700987/performance-of-key-lookup-in-javascript-object
 **/
