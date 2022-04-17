import { useState } from "react";
import dropdownContext from "./dropdownContext";
const DropdownState =(props)=>{

    const[dropped , setDropped] = useState(false);
    const[navContent, setNavContent] = useState({title:'Absolutely Nothing', categories:[{title:'Some Title',items:['Something 1','Something 2']}]});
    //  const [hoveredCategory, setHoveredCategory ] = useState(navContent.categories[0].title);
     const [subDropped, setSubDropped ]= useState(false);
    const [navSubContent, setNavSubContent ] = useState(['Something 1','Something 2']);

    function updateNavContent(newNavContent)
    {
        setNavContent(newNavContent);
    }

    function updateDropped(dropValue)
    {
        setDropped(dropValue);
    }

    function updateNavSubContent(navSubContentList)
    {
        setNavSubContent(navSubContentList);
    }
    function updateSubDropped(flag)
    {
        setSubDropped(flag);
    }
        
    
    return <dropdownContext.Provider value={[dropped, updateDropped, navContent, updateNavContent,navSubContent,updateNavSubContent,subDropped, updateSubDropped]}>
        {props.children}
    </dropdownContext.Provider>
}
export default DropdownState;