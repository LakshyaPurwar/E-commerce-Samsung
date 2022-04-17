import { useState } from "react";
import SubNavContext from "./subNavContext";
function SubNavState(props)
{
    const [clickedItem, setClickedItem ] = useState('New-in');
    const [slide, setSlide ] = useState('on');
    function updateSlide(newSlideState)
    {
        setSlide(newSlideState);
    }
    function updateClickedItem(newClickedItem)
    {
        setClickedItem(newClickedItem);
    }
    return (
        <SubNavContext.Provider value={[clickedItem , updateClickedItem, slide, updateSlide]} >
            {props.children}
        </SubNavContext.Provider>
    );
}
export default SubNavState;