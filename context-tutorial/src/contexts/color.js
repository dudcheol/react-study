import {createContext} from 'react';

const ColorContext = createContext({color: 'black'}); // Provider를 사용하지 않았을 때만 사용됨

export default ColorContext;