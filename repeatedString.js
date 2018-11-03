const s = 'aba';
const n = 10;

const getACount = (s) => (s.match(/a/g) || []).length;
function repeatedString(s, n) {
  const aCount= getACount(s);
  const repeatCount = parseInt(n/s.length);
  const remainCount = getACount(s.substring(0, n % s.length));

  return aCount * repeatCount + remainCount
}

console.log(repeatedString(s, n));

/**
 * 문제: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * 한개의 문자열과 길이가 주어진다. 문자열은 반복해서 늘어나면서 주어진 길이만큼의 새로운 문자열을 만든다.
 * 예를 들어 문자열 'aba', 숫자 10이 주어지면 'abaabaabaa'가 만들어 진다.
 * 이 때 새로만들어진 문자열에서 'a'의 갯수를 구하여라
 *
 * 1. 주어진 문자열에서 'a'의 갯수를 구한다.
 * 2. 문자열이 몇번 반복되고 어느 부분에서 잘리는지 구한다.
 * 3. 문자열의 잘린 부분까지 'a'가 몇번 반복되는지 구한다.
 * 4. 문자열에서 'a'갯수 * 반복횟수 + 잘린부분의 'a'의 갯수를 구한다.
 **/
