const input = 'AABAAB';

function alternatingCharacters(s) {
  let deleteCount = 0;
  for(let i=0; i<s.length; i++){
    if(s[i] === s[i+1])
      deleteCount++;
  }
  return deleteCount
}


console.log(alternatingCharacters(input));


/**
 * 문제: https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 *
 * A,B로만 이루어진 문자열이 있다.
 * 문자를 지워 같은 문자가 연속으로 나오지 않는 문자열로 바꾸려면 최소 몇번 지워야 하는지 구하여라.
 *
 * example)
 * AABAAB => ABAB
 * 첫번 째 'A'와 네번 째 'A'를 지우면 같은 문자가 연속으로 나오지 않는 문자열로 바꿀수 있다.
 * 최소 횟수인 2를 리턴한다.
 *
 * 문자열을 순환하면서 인접한 두 문자를 비교한다. 인접한 두 문자가 같으면 deleteCount를 센다.
 *
 **/

