import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해주어야 함
const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;