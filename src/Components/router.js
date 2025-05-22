import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import User from "./Main/User";
import Cart from "./Main/Cart";

const AppRouter = () => {
return (
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/inicio" element={<Main />} />

    <Route path="/user" element={<User />} />
    <Route path="/cart" element={<Cart />} />

    
    </Routes>
);
};

export default AppRouter; 