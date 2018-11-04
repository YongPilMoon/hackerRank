// const input = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
const input = 'xxxaabbccrry';

function isValid(s) {
  const alphabetCount = new Map();
  const alphabetCountArr = [];
  for(let i=0; i<s.length; i++) {
    if(!alphabetCount.has(s[i])) {
       alphabetCount.set(s[i], 1);
    } else {
      alphabetCount.set(s[i], alphabetCount.get(s[i]) + 1);
    }
  }
  alphabetCount.forEach(value => {
    alphabetCountArr.push(value);
  });

  const maxValue = Math.max(...alphabetCountArr);
  const minValue = Math.min(...alphabetCountArr);

  const maxValueArr = [...alphabetCount.values()].filter(v => v === maxValue);
  const minValueArr = [...alphabetCount.values()].filter(v => v === minValue);


  if(maxValue === minValue ||
    (maxValue - minValue === 1 && maxValueArr.length === 1) ||
    (maxValueArr.length === alphabetCountArr.length - 1 && minValueArr.length === 1)) {
    return 'YES'
  } else {
    return 'NO'
  }
}

console.log(isValid(input));

/**
 * 문제: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 *
 * 문자열이 주어졌을때 문자열을 구성하는 모든 문자가 같은 빈도수로 사용되었다면 'YES'를 출력하고 그렇지 않다면 'No'를 출력하라.
 * 단 1개의 문자는 1번 제거 될 수 있다.
 * 예를 들어 'abc'는  문자 a, b, c가 1번씩 사용되었기 때문에 'YES'를 출력해야한다. 그리고 'aabc'는 a는 2번, b는 1번, c는 1번 사용됬기 때문에
 * 'NO'를 출력해야한다. 그러나 조건에서 1개의 문자는 1번 제거 될 수 있다고 하였기 때문에 여기서 'a'는 1번 제거 될 수 있고 a 1번, b 1번, c 1번으로
 * 'abbc'는 YES'를 출력해야한다.
 *
 * 주어진 조건을 정확히 이해해서 꼼꼼하게 여러 경우를 살펴보아야하는 문제이다.
 * 일단 문자열에서 사용돈 각 문자의 횟수를 파악하기위해 Map에 문자와 문자가 사용된 횟수를 저장한다.
 * 그리고 사용된 문자의 최대 횟수, 최소 횟수, 최대 횟수가 같은 문자의 수, 최소 횟수가 같은 문자의 수를 구한다.
 * 예를 들어 'xxaabbccrry'의 최대 횟수는 2, 최소 횟수는 1, 최대 횟수가 같은 문자의 수는 5, 최소 횟수가 같은 문자의 수는 1이다.
 *
 * 이때 'YES'를 출력하는 경우는 다음과 같다.
 * 1. 최대 횟수와 최소 횟수가 같을 때 => 모든 문자가 같은 빈도로  사용된 경우
 * 2. 최대 횟수와 최소 횟수의 차가 1 이고 최대 횟수의 같은 문자의 수가 1개일 때 =>  최대 횟수의 문자를 하나 제거하면 모두 같아진다.
 * 3. 최소 횟수읜 문자가 1개이고 그외 나머지 문자가 모두 최대 횟수일 때 => 최소 횟수의 문자를 제거하면 모두 같아진다.
 *
 * 그 외의 경우에는 'NO'를 출력한다.
 **/
