import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToFeedPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const history = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToFeedPage(history)
        }
   }, [history])
}

export default useUnprotectedPage