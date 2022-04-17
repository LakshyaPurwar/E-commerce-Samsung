import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';

import { useState } from 'react';
import { useContext } from 'react';
import dropdownContext from '../../../../context/nav-dropdown/dropdownContext';
import navdata from '../../../../data/navdata';
import {Link} from 'react-router-dom';



function Navbar(props) {

    // const [dropped,setDropped] = useState(false);
    const [dropped, updateDropped, navContent, updateNavContent, setDropped, updateSubDropped] = useContext(dropdownContext);
    function handleHover(hoveredItem) {
        // setDropped(true);
        updateDropped(true);
        updateNavContent(navdata[hoveredItem]);
        // updateNavSubContent();
    }

    return (
        <div className="nav">
            <div className="logo">
                <a href="#" className='logo-link' >Samsung</a>
            </div>
            <div className="nav-products">
                <ul className='nav-products-list'>
                    <li className='nav-products-listItem item-1' onMouseOver={() => { handleHover('Mobile') }} >
                        <a href="#" className="products-item-link item-1-link">
                            Mobiles
                        </a>
                    </li>

                    <li className='nav-products-listItem item-2' onMouseOver={() => { handleHover('TV & AV') }}>
                        <a href="#" className="products-item-link item-2-link">
                            TV & AV
                        </a>
                    </li>

                    <li className='nav-products-listItem item-3' onMouseOver={() => { handleHover('Home Appliances') }}>
                        <a href="#" className="products-item-link item-3-link">
                            Home Appliances
                        </a>
                    </li>

                    <li className='nav-products-listItem item-4' onMouseOver={() => { handleHover('Laptops & Monitors') }}>
                        <a href="#" className="products-item-link item-4-link">
                            Laptops & Monitors
                        </a>
                    </li>
                </ul>
            </div>
            <div className='nav-icons'>
                <ul className='nav-icons-list'>
                    <li className='nav-icon nav-icon-search'>
                        <FaSearch />
                    </li>
                </ul>

                <ul className='nav-icons-list'>
                    <li className='nav-icon nav-icon-cart'>
                        <FaShoppingCart />
                    </li>
                </ul>

                <ul className='nav-icons-list'>
                    <li className='nav-icon nav-icon-user'>
                        <Link to='/user'>
                            <FaRegUser />
                        </Link>
                    </li>
                </ul>
                {/*  */}
            </div>
        </div>
    )

}
export default Navbar;