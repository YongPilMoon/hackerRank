const arr = [3, 7, 4, 6, 5];
// const maxSum = {};
// function maxSubsetRecursiveSum(arr) {
//   const length = arr.length;
//   if(length === 0)
//     return 0;
//
//   const n2 = maxSum[length-2] || maxSubsetRecursiveSum(arr.slice(0, length-2));
//   const n1 = maxSum[length-1] || maxSubsetRecursiveSum(arr.slice(0, length-1));
//   const sum =  Math.max(arr[length-1], n2 + arr[length-1], n1);
//   maxSum[length] = sum;
//   return sum
// }


function maxSubsetSum(arr) {
  let dp = [];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], dp[0]);
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1], arr[i] + dp[i - 2])
  }
  return dp[arr.length-1]
}

console.log(maxSubsetSum(arr));

/**
 * 문제: https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 *
 * 배열에서 인접하지 않은 요소들의합 중 최대값을 구하는 문제이다.
 * [-2, 1, 3, -4, 5] 라는 배열이 주어졌다고 하자.
 * 인접하지 않은 요소들이 만들어질 수 있는 경우와 합을 적어 보면 다음과 같다.
 * [-2, 3, 5]  => 6
 * [-2, 3] => 1
 * [-2, -4] => -6
 * [-2, 5] => 3
 * [1, -4] => -3
 * [1, 5] => 6
 * [3, 5] => 8
 *
 * 이때 최대값은 8이다.
 * 1 < n < 10^5
 * -10^4 < arr[i] < 10^4
 *
 * 다이나믹 프로그래밍에서 가장 중요한 점은 부분들의 해법과 구하려고 하는 해법의 상관 관계를 찾는것이다.
 * 부분들의 해법으로 결과를 구한다는 점에서 merge sort가 잠시 떠올랐다.
 *
 * 이 문제에서 배열의 갯수를 줄여서 생각해보자.
 * arr = [-2] 이면 한개의 요소는 어느것과도 인접하지 않음으로 최대 값은 -2 이다.
 * arr = [-2, 1] 이면 만들어질 수 있는 경우는 [-2], [1] 밖에 없으므로 최대값은 둘 중 큰 값인 1 이다.
 * arr = [-2, 1, 3] 이면 어떻까?
 * 이 때부터 이전 결과들과의 관계를 생각해 볼 수 있다.
 * arr = [-2, 1, 3]의 최대값을 구할 수 있는 경우는 다음과 같다.
 * 1. arr = [-2] 일 때 최대 값에 3을 더한다(n-2의 값은 새로운 요소(3)과 인접하지 않음으로 더 할 수 있다)
 * 2. arr = [-2, 1]의 최대 값이 그대로 최대값이다(n-1의 값은 새로운 요소(3)과 인접함으로 더 할 수 없다)
 * 3. 새로운 요소 자체가 최대값이다(n-2 값이 음수이면 새로운 요소 자체가 최대 값이 될 수 있다.)
 * 위의 3가지를 코드로 만들어 보면 다음과 같다.
 * Math.max(arr[i] + sumSetSum[n - 2], sumSetSum[n - 1], arr[i])
 *
 * 처음에는 이 관계를 파악하고 재귀함수로 코드를 구현하였다. 부분들의 해법을 이용하는 것 자체가 재귀함수를 이용해 표현하면 훨씬 자연 스럽고
 * 직관적이기 때문이다. 하지만 testcase 에서는 성공하였지만 재귀함수의 시간복잡도는 n!을 가져 많은 양의 데이터를 처리하지 못하였다.
 * 그래서 해쉬 테이블을 만들어 좀 줄여보려 했으나 여전히 많은 양의 배열이 주어졌을때는 처리하지 못하였다.
 * 다른 사람의 해법을 보니 재귀로 돌리지 않고 처음부터 관계식을 이용해 hashtable(dp)를 채워나가고
 * 마지막에 해당 해쉬테이블에서 결과 값만 꺼내어서 리턴하였다.
 *
 * 예전에 이러한 기법을 공부한것 같긴한데 오랜만에 DP문제를 접하다 보니 생각이 나지 않았었다.
 *
 **/
