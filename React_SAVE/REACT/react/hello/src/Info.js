import React from 'react';
import useInputs from './useInputs';

/*const Info = () => {
    const[name, setName] = useState('');
    const[nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => { 
            // 컴포넌트가 unmount 될 때 cleanup를 실행
            // () => {} <arrow 함수>와 function() {} <기본 함수형>은 this가 arrow함수는 부모의 this를, function은 자체 this를 사용할 수 있다는 점에서 차이가 있다.
            console.log('cleanup');
            console.log(name);
        };
        // 함수의 두 번째 파라미터에 빈 배열을 추가해주면 mount(화면에 나타날 때)될 때만 실행할 수 있다.
    }); 

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNcikname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNcikname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname} 
                </div>
            </div>
        </div>
    );
};*/

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    
    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}></input>
                <input name='nickname' value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};


export default Info;