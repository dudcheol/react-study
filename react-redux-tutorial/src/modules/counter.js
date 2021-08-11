// Ducks 패턴을 사용할 예정
// 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 '모듈'이라고 함.

// 액션 타입 정의
// 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 타입을 정의한 다음에 액션 생성 함수를 만들어 줌.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
// export, export default 차이
// 여러 개 내보내기 , 단 한 개만 내보내기
// 불러오는 방식도 다름
/*
import counter from './counter';
import {increase, decrease} from './counter';
// 한꺼번에 불러오고 싶을 때
import counter, {increase, decrease} from '/counter';
*/
