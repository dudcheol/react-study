import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    // Provider를 사용할 때는 value를 반드시 명시해야 제대로 작동함
    <ColorContext.Provider value={{color:'red'}}>
      <ColorBox></ColorBox>
    </ColorContext.Provider>
  );
}

export default App;
