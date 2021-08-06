import React, { useCallback } from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해주어야 함
// key가 필요한 이유? 요소의 변화를 알아차리기 위해
const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style})=>{
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return (
        <List
            className="TodoList"
            width={512} // 전체 크기
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={57} // 항목 높이
            rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
            list={todos} // 배열
            style={{outline: 'none'}} // List에 기본 적용되는 outline 스타일 제거
        />
        // <div className="TodoList">
        //     {todos.map(todo => (
        //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        //     ))}
        // </div>
    );
};

export default React.memo(TodoList);