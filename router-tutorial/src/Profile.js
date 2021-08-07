import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    pyc: {
        name: '박영철',
        description: '정말 대단해 그정도의 학습량으로 리액트를 도전하다니',
    },
    jusami: {
        name: '이주상',
        description: '보였다 빈틈의 실',
    },
};

// '/profile/pyc'와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어줄 때 해당 값을 props로 받아 와서 조회
// App.js에서 '/profile/:username'이라고 씀으로써 match.params.username으로 현재 username 값을 조회할 수 있음
const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;
