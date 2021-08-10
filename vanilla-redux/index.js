import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 프로젝트 상태에 변화를 일으키는 것을 '액션'이라고 함
// 액션이름은 문자열 형태로, 주로 대문자로 작성. 액션 이름은 고유해야 함.
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수. type을 반드시 가지고 있어야 함.
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => {
  return {
    type: DECREASE,
  };
};

// 프로젝트에서 사용할 초깃값 정의. 형태는 자유
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서는 변화를 일으키는 함수
// 함수의 파라미터로는 state와 action 값을 받아옴
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해 주어야 함
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 함.
// 이 작업을 할 때 spread 여난자를 사용하면 편하다! -> 단, 객체의 구조가 복잡해지면(ex object.something.inside.value) spread 연산자로 불변성을 관리하며 업데이트하는 것이 굉장히 번거로울 수 있음
// 따라서, 리덕스의 상태는 최대한 깊지 않은 구조로 진행하는 것이 좋음!

// 객체의 구조가 복잡해지거나 배열도 함께 다루는 경우 immer 라이브러리를 사용하면 더 쉽게 리듀서를 작성할 수 있음

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태를 불러옴
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render); // subscribe 함수의 파라미터로는 함수 형태의 값을 전달함.
// 이렇게 전달된 함수는 추후 액션이 발생하여 상태가 업데이트될 때마다 호출됨.

// 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
