import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

// '/about' 경로가 '/' 규칙에도 일치하기 때문에 exact라는 props를 true로 설정해주어야 함.
// a 태그를 사용하면 안됨! 왜? - 이 태그는 페이지를 전환하는 과정에서 페이지를 '새로 불러오기' 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버림
// 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링하게 됨.
// Link 컴포넌트를 사용해서 페이지를 전환하면 해결할 수 있음! History API를 사용해서 페이지의 주소만 변경해줌. a태그로 이루어져 있지만 페이지 전환을 방지하는 기능이 내장되어 있음.
function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History 예제</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
