import {useLocation} from "react-router";
import {PageHeader} from "../components/PageHeader";

export const NotAllowedPage = () => {
    const location = useLocation();

    return (
        <>
            <PageHeader>Restricted!!!</PageHeader>
            <p>You`are not allowed to visit <strong>{location.state?.from}</strong> page.
            Please login first.</p>
        </>
    )
};