import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
	function createBulkTodos() {
		const array = [];
		for (let i = 1; i <= 2500; i++) {
			array.push({
				id: i,
				text: `할 일 ${i}`,
				checked: false,
			});
		}
		return array;
	}

	const [todos, setTodos] = useState(createBulkTodos()); // 만약, createBulkTodos를 인자로 주었다면 처음 렌더링 될때만 createBulkTodos 함수가 실행됨.

	// 고윳값으로 사용될 id
	// ref를 사용하여 변수 담기
	// id값을 useState가 아닌 useRef를 사용하는 이유? id 값은 렌더링되는 정보가 아니기 때문. 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없다.
	// https://ko.reactjs.org/docs/hooks-reference.html#useref
	const nextId = useRef(4);

	// setTodos에 새로운 상태를 파라미터로 넣는 것이 아니라, '상태 업데이트를 어떻게 할지' 정의해 주는 업데이트 함수를 넣는다
	// ex) setTodos(number+1) 대신, setTodos(number => number+1)
	const onInsert = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos(todos => todos.concat(todo));
			nextId.current += 1; // nextId 1씩 더하기
		},
		[],
	);

	// 배열의 불변성을 지키면서 배열 원소를 제거해야 할 경우, 배열 내장 함수인 filter를 사용하면 간편함
	const onRemove = useCallback(
		(id) => {
			setTodos(todos => todos.filter((todo) => todo.id !== id));
		},
		[],
	);

	const onToggle = useCallback(
		(id) => {
			setTodos(todos =>
				todos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo,
				),
			);
		},
		[],
	);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
