import {useAuthStore} from "@/stores/useAuthStore.ts";

export const AdminPage = () => {

    const  {isAdmin, isLoading} = useAuthStore()

    if(!isAdmin && isLoading) return <div>Unauthorized</div>

    return (
        <div className="">Admin Page</div>
    );
};