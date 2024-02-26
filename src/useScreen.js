import {useEffect, useState} from "react";
export default function useScreen() {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize");
        };
    }, []);
    const checkScreenSize = () => {
        if(window.innerWidth > 990) return setScreenSize("Large");
        if(window.innerWidth > 600 && window.innerWidth < 800) return setScreenSize("Medium");
        if(window.innerWidth < 600) return setScreenSize("Small");
    }
    return([screenSize]);
}