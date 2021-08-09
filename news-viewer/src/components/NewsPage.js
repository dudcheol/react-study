import React from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || 'all';

    return (
        // Fragment : Fragements 를 사용하면 DOM 노드에 추가하지 않고 하위의 목록을 그룹화 할 수 있음.
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;