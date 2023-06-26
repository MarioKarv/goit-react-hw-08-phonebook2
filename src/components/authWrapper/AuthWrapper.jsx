import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUser } from 'redux/auth/auth-operations';

const AuthWrapper = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return <>{children}</>
}

export default AuthWrapper