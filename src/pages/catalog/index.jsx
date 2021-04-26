import {PageHeader} from "../../components/PageHeader";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import {Navigation} from "../../components/Navigation";
import {catalogRoutes} from "../../routes/catalog";

const links = [
    {
        to: '/catalog/sport',
        label: 'Sport Goods'
    },
    {
        to: '/catalog/gadget',
        label: 'New Gadgets'
    },
    {
        to: '/catalog/media',
        label: 'New Media'
    },
    {
        to: '/catalog/magazin/11?quantity=2',
        label: 'New Magazins'
    },
];

export const CatalogPage = () => {
    const {path: basePath} = useRouteMatch();
    return (
        <>
            <PageHeader>Products page</PageHeader>
            <p>Here you can find all our amazing products</p>
            <Navigation links={links}/>
            <Switch>
                {catalogRoutes.map(({path, ...route}) => {
                    return (<Route key={path} path={basePath + path}{...route}/>);
                })}
            </Switch>
        </>
    );
}