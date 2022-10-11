import { Link, Outlet } from "react-router-dom";


function Layout() {

    return (
<>
<h2>This is Layout Page</h2>
<h4>Select an item from the list below</h4>
<nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/fuel-price">FuelPrice</Link>
        </li>
        <li>
            <Link to="/history">History</Link>
        </li>
    </ul>
</nav>

<Outlet />

</>
    );
}

export default Layout