import {useRouter} from 'next/router';
import {useCallback} from 'react';
import MainPresenter from '../presenter/Main/MainPresenter';

const test = () => {

    const router = useRouter();

    const onClickMakeRoom = useCallback(()=>{
        router.push("/hello");
    },[])
    
    return (
    
            <MainPresenter
                onClickMakeRoom={onClickMakeRoom}
            />
        
    );
};

export default test;