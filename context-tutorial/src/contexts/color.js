import React, {createContext, useState} from 'react';

const ColorContext = createContext({
    // 상태는 state, 업데이트는 actions
    // createContext의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋음
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { },
    }
}); // Provider를 사용하지 않았을 때만 사용됨

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;