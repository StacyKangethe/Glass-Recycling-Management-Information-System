import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav color="primary"> 
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/dropoffpoint'>DropOffPoints</Link>
                <Link to='/recyclingcompanies'>RecyclingCompanies</Link>
                <Link to='/wastecompanies'>WasteCompanies</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
}

export default Navigation;