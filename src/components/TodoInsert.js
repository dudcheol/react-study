import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=>{
    const [value, setValue] = useState('');

    // useCallback
    // 인라인 콜백과 그것의 의존성 값의 배열 전달
    // useCallback은 콜백의 메모이제이션된 버전을 반환할 것입니다. 그 메모이제이션된 버전은 콜백의 의존성이 변경되었을 때에만 변경됩니다.
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    }, []);

    // onClick이 아니라 onSubmit으로 한 이유?
    // onSubmit 이벤트의 경우 인풋에서 [Enter]를 눌렀을 때도 발생하기 때문
    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue('') // value 값 초기화
            
            // submit 이벤트는 브라우저에서 새로고침을 발생시킴
            // 이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        },
        [onInsert, value], // onInsert, value가 변경되었을 때 메모이제이션된 버전이 변경됨
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;