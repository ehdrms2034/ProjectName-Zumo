import {useRouter} from 'next/router';
import {useCallback, useState} from 'react';
import MainPresenter from '../presenter/Main/MainPresenter';

const test = () => {

    const router = useRouter();

    const [makeModalStatus,setMakeModalStatus] = useState<boolean>(false);

    const onClickMakeRoom = useCallback(()=>{
        setMakeModalStatus(true);
    },[]);

    const onHandleMakeRoom = useCallback(()=>{
        router.push('/rtc');
    },[]);
    
    return (
    
            <MainPresenter
                onClickMakeRoom={onClickMakeRoom}
                makeModalStatus={makeModalStatus}
                setMakeModalStatus={setMakeModalStatus}
                onHandleMakeRoom={onHandleMakeRoom}
            />
        
    );
};

export default test;