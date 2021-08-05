import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  // id값을 useState가 아닌 useRef를 사용하는 이유? id 값은 렌더링되는 정보가 아니기 때문. 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없다.
  // https://ko.reactjs.org/docs/hooks-reference.html#useref
  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  }, [todos]);

  // 배열의 불변성을 지키면서 배열 원소를 제거해야 할 경우, 배열 내장 함수인 filter를 사용하면 간편함
  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo=>todo.id !== id));
  }, [todos]);

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove}/>
  </TodoTemplate>);
};

export default App;
