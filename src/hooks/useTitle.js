import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `DEPOT - ${title}`;
    },[title])
};

export default useTitle