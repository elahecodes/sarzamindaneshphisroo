import { useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
const ScrollToTop = ()=> {
    const searchParams = useSearchParams();
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior : "smooth"
        })
    },[searchParams])
    return (
        <div>

        </div>
    );
}
export default ScrollToTop;