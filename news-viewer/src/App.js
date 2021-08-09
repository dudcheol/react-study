import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  ;
  
  return (
    // Fragment : Fragements 를 사용하면 DOM 노드에 추가하지 않고 하위의 목록을 그룹화 할 수 있음.
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;