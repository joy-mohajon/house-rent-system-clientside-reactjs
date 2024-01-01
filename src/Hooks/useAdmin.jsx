import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../pages/Auth/useAuth/useAuth';
import useProfileInfo from './useProfileInfo';


const useAdmin = () => {
    // const {user, loading} = useAuth();
    const {userInfo, isLoading} = useProfileInfo();
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', userInfo?.email],
        enabled: !isLoading && !!userInfo?.email && !!localStorage.getItem("access-token"),
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${userInfo?.email}`);
            return res?.data?.admin;
        }
    })


    return [isAdmin, isAdminLoading]
};

export default useAdmin;