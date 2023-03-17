import { useRouteError } from "react-router-dom"

export function NotFound( ){
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>{ error.statusText || error.message }</h1>
        </>
    )
}