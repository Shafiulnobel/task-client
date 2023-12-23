import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { IoMdExit } from "react-icons/io";
import Cart from '../../Cart/Cart';
import useCart from '../../../hooks/useCart';
import './Navbar.css'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='light-font'>PRODUCTS</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold">D E P O T</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='light-font' to="/">PRODUCTS</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="indicator mx-4">
                    <span className="indicator-item badge badge-primary">{cart.length}+</span>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-ghost light-font">CART</button>
                    <Cart></Cart>
                </div>

                {user ? <button onClick={handleLogOut} className='btn btn-error'>Logout <IoMdExit /></button> : <Link to="/login" className="btn btn-ghost light-font">LOGIN</Link>}
            </div>
        </div>
    );
};

export default Navbar;