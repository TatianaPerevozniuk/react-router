import {PageHeader} from "../../components/PageHeader";
import {useLocation, useParams} from "react-router";

const products = {
    11: {
        name: 'Product1'
    },
    22: {
        name: 'Product2'
    },
}

export const CatalogPageTemplate = () => {
    const { category, productId } = useParams();
    const { search } = useLocation();
    const { quantity } = new URLSearchParams(search);
    console.log(quantity);

    return (
        <>
            <PageHeader level='h2'>{category} Goods</PageHeader>
            <p>Our list of {category} goods</p>
            <strong>{products[productId]?.name ?? ''}</strong>
            <strong>Quantity: {}</strong>
        </>

    );
}