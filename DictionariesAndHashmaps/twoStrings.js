const s1 = 'hello';
const s2 = 'world';

function twoStrings(s1, s2) {
  const s1Set = new Set();
  const s2Set = new Set();

  for(let i=0; i<s1.length; i++){
    s1Set.add(s1[i]);
  }

  for(let i=0; i<s2.length; i++){
    s2Set.add(s2[i]);
  }

  const interSection = [...s1Set].filter(c => s2Set.has(c));
  return interSection.length ? 'YES' : 'NO';
}


twoStrings(s1, s2);


/**
 * 문제: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 *
 * 두개의 문자열이 주어졌을때 겹치는 문자가 있다면 'YES'를 리턴하고 아니면 'NO'를 리턴한다.
 * 1 <= s1, s2 <= 10^5
 *
 * 각 문자열에서 사용된 알파벳의 종류를 알기 위해 각각 Set에 넣어 중복을 없앤다. 두 Set의 교집합을 구해서 겹치는 알파벳의 유무를 리턴한다.
 **/
