import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import {route} from "next/dist/server/router";
import {router} from "next/client";

// first way go to home page with alert click on button
const Errorpage = () => {
   const handleInput = () => {
       alert('Back to home page')
       router.push("/");
    };
// second way automatically goes to home page with alert through timeout
useEffect(()=>{
    setTimeout(()=>{
        // alert('Back to home page')
        router.push('/')
    }, 3000)
}, [])

    return (
        <>
            <Navbar/>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.
                    </p>

                    <a onClick={handleInput}>Back To Homepage</a>
                </div>
            </div>
        </>
    );
};

export default Errorpage;