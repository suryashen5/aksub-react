import Dashboard from "../../../pages/page1/Dashboard";
import Product from "../../../pages/page1/Product";
import User from "../../../pages/page1/User";

const BASE_PREFIX = "/page1";

export default {
    parent: [
        {
            url:BASE_PREFIX,
            component: Dashboard
        }
    ],
    children: [
        {
            url:BASE_PREFIX + "/product",
            component: Product
        },
        {
            url:BASE_PREFIX + "/user",
            component: User
        }
    ]
}