import React, {useState, useEffect, useMemo, useRef, useLayoutEffect} from "react";
import useFetchAPI from "./useFetchAPI";
import UseImperativeHandleHook from "./UseImperativeHandleHook";

function showCount(cnt) {
    // for(let i = 0; i <= 2; i++) {
    //     cnt = cnt + 2;
    // }
    let i = 0
    while(i <= 200000000) {
        i++;
    }
    return cnt + 2;;
}

const HooksExampleTwo = () => {
    const [count, setCount] = useState({num: 0});
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    //const countData = showCount(count.num);
    const countData = useMemo(() => {
        return showCount(count.num);
    }, [count]);

    const renderRef = useRef(0);
    const renderRef1 = useRef("");
    const renderRef2 = useRef();
    
    useEffect(() => {
        console.log("Use Effect get called!");
        // setCount({
        //     num: 5
        // });
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
        console.log("Component Mounted and updated called!");
        renderRef.current = renderRef.current + 1;

        // return () => {
        //     console.log("Component WillUnmount called!");
        //     window.removeEventListener("resize");
        // }
    }, [count]);

    useLayoutEffect(() => {
        console.log("Use Layout Effect Called!");
    }, []);

    const increment = () => {
        setCount((prev) => {
            return {
                ...prev, num: prev.num + 1
            }
        });
    }

    const {data, error, loading } = useFetchAPI("https://jsonplaceholder.typicode.com/users");
    if(error) return "Error";
    console.log(loading);
    if(loading) return "Loading";

    return(
        <div>
            <h1>Count is: {count.num}</h1>
            <button onClick={increment}>Increment</button>
            <h1>screenWidth: {screenWidth}</h1>
            <h1>Show Count: {countData}</h1>
            <h1>Use Reference Value Demo: {renderRef.current}</h1>
            <p ref={renderRef1}>{"WebSite Application"}</p>
            <button onClick={() => {renderRef1.current.innerHTML = "React JS"}}>Change Data</button>
            <h1>ImperrativeHandle Hook Demo</h1>
            <UseImperativeHandleHook ref={renderRef2} />
            <button onClick={() => {renderRef2.current.decrement()}}>Decrement</button>
            <br /><br />
            <ul>
                {
                    data?.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default HooksExampleTwo;