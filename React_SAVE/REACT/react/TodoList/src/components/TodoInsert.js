import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    background: #495057;
    
    input {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;
        &::placeholder {
            color: #dee2e6;
        }
        flex: 1;
    }
    button {
        background: none;
        outline: none;
        border: none;
        background: #868e96;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            background: #adb5bd;
        }
    }
`;

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    /* onClick 대신 onSubmit을 이용하는 이유는 onClick은 onKeyPress 이벤트를 통해
    enter를 감지하는 로직을 따로 만들어야 한다. 반면에 onSubmit은 인풋에서 enter를
    눌렀을 때도 발생하기 때문이다.(중요) */
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            // 이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <Form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
             value={value}
             onChange={onChange} 
            />
            <button type="submit">
                <MdAdd />
            </button>
        </Form>
    );
};

export default TodoInsert;