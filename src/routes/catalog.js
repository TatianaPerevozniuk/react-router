// import {CatalogGadgetPage} from "../pages/catalog/Gadget";
// import {CatalogSportPage} from "../pages/catalog/Sport";
// export const catalogRoutes = [
//     {
//         path: '/sport',
//         component: CatalogSportPage
//     },
//     {
//         path: '/gadget',
//         component: CatalogGadgetPage
//     }
// ]

import {CatalogPageTemplate} from "../pages/catalog/template";
export const catalogRoutes = [
    {
        path: '/:category',
        exact: true,
        component: CatalogPageTemplate
    },
    {
        path: '/:category/:productId',
        component: CatalogPageTemplate
    },
]

