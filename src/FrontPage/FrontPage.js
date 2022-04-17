import Header from "./Components/Header/Header";
import DropdownState from "../context/nav-dropdown/dropdownState";
import Body from "./Components/Body/Body";
import SubNavState from "../context/SubNav/subNavState";
import React from "react";
function FrontPage() {
    return (
        <React.Fragment>
            <DropdownState>
                <Header />
            </DropdownState>
            <SubNavState>
                <Body />
            </SubNavState>
        </React.Fragment>


    );
}
export default FrontPage;