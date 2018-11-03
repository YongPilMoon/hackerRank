const n = 8;
const s = 'DDUUDDUDUUUD';

function countingValleys(n, s) {
  let level = 0;
  let vally = 0;
  for(let i=0; i<s.length; i++) {
    const step = s[i];
    if(step === 'U') {
      level++;
      if(level === 0)
        vally++;
    } else {
      level--;
    }
  }
  return vally
}

console.log(countingValleys(n, s));

/**
 * 문제: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * D는 아래로 내려가는 스탭, U는 위로 올라가는 스탭을 나타낸다. 아래로 내려갈 때 depth가 1 내려가고 위로 올라갈때 depth가 1올라간다.
 * 시작은 해수면 레벨에서 시작해서 다시 해수면 레벨에서 끝이난다.
 * 한번 해수면 레벨 아래로 내려가서 다시 해수면 레벨로 올라오는 과정을 1벨리라고 가정할때 모든 스탭을 걷는 동안 몇 번의 벨리를 지났는지 구하여라.
 *
 * 한번의 벨리를 지나려면 해수면 레벨로 내려갔다가 다시 해수면 레벨로 올라와야한다. 즉  depth가 0일때 올라오는 스탭의 수를 모두 구하면 지나간 벨리의
 * 갯수를 구할 수 있다.
 *
 **/

