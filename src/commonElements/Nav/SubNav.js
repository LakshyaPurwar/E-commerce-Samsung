import './SubNav.css';
import { useContext } from 'react';
import SubNavContext from '../../context/SubNav/subNavContext';


function SubNavListItem(props) {

    const [clickedItem, updateClickedItem, slide, updateSlide] = useContext(SubNavContext);
    function handleClick(newClickedItem) {
        updateSlide('slide-out');
        updateClickedItem(newClickedItem)
        setTimeout(() => {updateSlide('slide-in');}, 200);

        
    }

    return <li className={`subNav-list-item ${clickedItem === props.children ? 'selected' : ''}`} onClick={() => { handleClick(props.children) }}>
        {props.children}
    </li>
}


function SubNav(props) {

    return (
        <div className="subNav">
            <ul className='subNav-list'>
                {props.items.map((item) => {

                    return <SubNavListItem>{item}</SubNavListItem>;
                })}
            </ul>
        </div>
    );
}
export default SubNav;