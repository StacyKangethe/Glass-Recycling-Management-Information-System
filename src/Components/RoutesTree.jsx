import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop/Shop';
import DropOffPoints from "./Pages/DropOffPoints";
import WasteCompanies from "./Pages/WasteCompanies";
import RecyclingPlants from './Pages/RecyclingPlants';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import CTA from './Pages/CTA';
import Home from './Pages/Home';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './Pages/cart/Cart';

function RoutesTree() {
    return (
        <div>
            <ShopContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/recycling-plants" element={<RecyclingPlants />} />
                    <Route path="/call-to-action" element={<CTA />} />
                    <Route path="/drop-off-points" element={<DropOffPoints />} />
                    <Route path="/waste-companies" element={<WasteCompanies />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/sign-up" element={<SignUp/>} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </ShopContextProvider>
        </div>
    );
}

export default RoutesTree;