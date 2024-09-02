import {useRouteError} from "react-router-dom"
export default function Error(){
    const err = useRouteError();
    console.log(err)
    return (
        <>
        <h1> OOPS! <br /> Something Went Wrong</h1>
        <h2>{err.status}: {err.statusText}</h2>
        </>

    );
}