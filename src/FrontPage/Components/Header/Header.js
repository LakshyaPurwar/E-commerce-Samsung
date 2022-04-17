import Caraousel from "./Carausel/Caraousel";
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown";

function Header()
{
    // let drop = false;
    // function handleHover(dropped)
    // {
    //     drop = dropped;
    // }

    return (<div className="Header">
        {/* <Navbar /> */}
        {/* <Dropdown /> */}
        <Caraousel />
        
    </div>);
}
export default Header;

// onHover={handleHover}