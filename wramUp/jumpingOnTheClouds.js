const ar = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  let step = 0;
  for(let i=0; i<c.length;) {
    const nextNextCloud = c[i + 2];
    if(i === c.length - 1) // 마지막 구름에 도착했을 때
      return step;

    if(nextNextCloud === undefined) { // 마지막 구름이 도착하지 않았지만 다다음 구름이 존재하지 않았을 때 => 1칸 전진
      return step++;
    }

    i = nextNextCloud !== 1 ? i + 2 : i + 1;
    step++;
  }
  return step
}


console.log(jumpingOnClouds(ar));

/**
 * 문제: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * 철수는 점프를 해서 구름을 건너가야합니다. 0은 안전한 구름 1은 번개 구름을 나타냅니다. 번개 구름으로는 점프 할 수 없습니다.
 * 한번의 점프로 1구름 혹은 2구름 전진할 수 있습니다. 이때 시작 구름부터 마지막 구름까지 갈 수 있는 최소한의 점프 수를 구하시오.
 *
 * 주어진 배열은 건너가야 할 구름을 나타냅니다.
 * 예를 들어 [0, 0, 1, 0, 0, 1, 0] 같은 구름이 주어질 때 최소한 의 점프수는 4 입니다(0 -> 1 -> 3 -> 4 -> 6)
 *
 * 배열의 인덱스는 구름의 위치, i는 철수의 위치로 가정합니다.
 *
 * 철수는 최소한의 점프로 구름의 끝까지 가야하기 때문에 전진할 수 있는 상황이라면 최대한 멀리 전진해야합니다.
 * 0번 인덱스에서 시작하여 다다음 구름의 값이 0이면 2칸 전진하고 아니라면 1칸 전진합니다.
 * 점프수를 세면서 철수가 마지막 위치에 다다르면 값을 리턴합니다.
 *
 **/
