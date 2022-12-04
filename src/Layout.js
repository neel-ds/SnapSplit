import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Bill</Link>
        </nav>
        <Outlet />
        </div>
    );
    }

export default Layout;