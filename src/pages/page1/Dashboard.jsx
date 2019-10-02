import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import routes from '../../routes/modules/page1'

const renderRoutes = () => routes.children.map((routes) => <Route path={routes.url} component={routes.component} />);

const Dashboard = () => (
    <div>
        <div>Dashboard</div>
        <div>Navbar Page1</div>
        <div>
            Sidebar Page 1
            <ul>
                <li>
                    <Link to="/page1/product">Page 1 Product</Link>
                </li>
                <li>
                    <Link to="/page1/user">Page 1 User</Link>
                </li>
            </ul>
        </div>
        <Switch>
            {renderRoutes()}
        </Switch>
    </div>
);


export default Dashboard;