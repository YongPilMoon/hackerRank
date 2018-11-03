const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  const sockCount = new Map();
  let pairCount = 0;
  ar.forEach(sock => {
    if(!sockCount.has(sock)) {
        sockCount.set(sock, 1)
    } else {
      sockCount.set(sock, sockCount.get(sock) + 1);
    }
  });

  sockCount.forEach(sock => {
      pairCount = pairCount + parseInt(sock / 2);
    }
  );
  return pairCount
}

console.log(sockMerchant(n, ar));

/**
 * 문제: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * 하나의 배열 요소를 색을 가진 하나의 양말이라고 가정한다. 각 요소의 값은 색을 나타낸다.
 * 예를 들어 [1,2,1,2,1,3,2] 는 1번 컬러 양말 3개, 2번 컬러 양말 3개, 3번 컬러 양말 1개를 가지고 있는 배열이다.
 * 이 때 컬러가 같은 양말이 몇 짝인지 구하여라. 위의 예에서는 1번 컬러 1짝, 2번 컬러 1짝으로 총 2짝이다.
 *
 * 1. 배열을 순환하면서 컬러 별 양말의 갯수를 Map에 저장한다.
 * 2. 저장해야 할 데이터가 컬러값, 갯수로 (key, value) 형태이기 때문에 Map을 이용했다.
 * 3. 컬러별 양말의 갯수가 저장된 Map을 순환하면서 갯수를 2로 나누어 컬러별 양말짝이 몇개인지 구한다.
 * 4. 컬러별 양말짝의 갯수를 모두 더하여 리턴한다.
 **/
