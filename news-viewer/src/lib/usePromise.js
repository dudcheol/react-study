import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    // useEffect에서 반환하는 함수는 뒷정리 함수(cleanup)이므로 async로 작성하면 안됨.
    // async를 쓰면 promise객체를 반환하게 됨.
    // 대신, 함수 내부에 async 함수를 따로 만들어주어야 함
    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps); // 파라미터로 받아온 deps배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정됨.

    return [loading, resolved, error];
}