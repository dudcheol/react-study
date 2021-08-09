import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(null);

    // useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청해본다
    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=db8c12a2fac84f129aabac184a20526d',
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    
    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={ article.url } article={article}></NewsItem>
            ))}
        </NewsListBlock>
    )
};

export default NewsList;