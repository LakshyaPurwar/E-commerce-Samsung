import { useState } from 'react';
import './Dropdown.css';
import './Navbar.css';
import { useContext } from 'react';
import dropdownContext from '../../../../context/nav-dropdown/dropdownContext';
import { IoCloseOutline } from 'react-icons/io5';




function CategoryListItem(props) {

    const [dropped, updateDropped, navContent, updateNavContent, navSubContent, updateNavSubContent,subDropped, updateSubDropped] = useContext(dropdownContext);
    function removeSublist()
    {
        updateSubDropped(false);
    }

    function displayItems(itemName)
    {


        // console.log('Function display items  called');
        const selectedCategories = navContent.categories.filter((individualCategoryObject)=>{
            // console.log(itemName  === individualCategoryObject.title);
            // console.log(individualCategoryObject);
            return (individualCategoryObject.title === itemName);
        });
        const selectedCategoriesItems = selectedCategories.map((individualObject)=>{
            return individualObject.items;
        });//Array of itemsArray of selected Categories

        const selectedCategoryItems = selectedCategoriesItems[0];
        //Array of items that need to be displayed.


        // console.log(selectedCategoryItems);

        // console.log('Selected Category array'+selectedCategory);

        // const subList = selectedCategory.items;
        updateNavSubContent(selectedCategoryItems);
        updateSubDropped(true);
        
        

    }
    return <li className='categories-list-item' onMouseOut={removeSublist} onMouseOver={()=>{displayItems(props.itemName)} }>{props.itemName}       </li>
}

function SubcategoryListItem(props)
{
    return <li className='subCategories-list-item'>
        {props.itemName}
        <hr className='subCategories-list-item-underline' />
    </li>
}



function Dropdown(props) {

    const [dropped, updateDropped, navContent, updateNavContent,navSubContent,updateNavSubContent,subDropped, updateSubDropped] = useContext(dropdownContext);
    console.log(subDropped);
    // console.log(navSubContent +"This is the nav sub content");
    function closeDropdown() {
        updateDropped(false);
    }

    console.log('Nav sub content is '+navSubContent);

    return (

        <div className={`dropdown ${dropped && "dropped-down"}`} >
            <div className='dropdown-left'>
                <div className='dropdown-left-title'>
                    <div class='dropdown-left-title-text'>{navContent.title}
                    <hr className='title-underline'/>
                    </div>



                </div>

                <div className='nav-content-container'>
                    <div className='categories'>
                        <ul className='categories-list'>

                            {/* <ListItem itemName={navContent.categories[0]}/> */}

                            {navContent.categories.map((singleCategory) => {
                                return <CategoryListItem itemName={singleCategory.title} />
                            })}
                        </ul>
                    </div>
                    <div onMouseOver={()=>{updateSubDropped(true)}}  className={`subCategories ${subDropped?'subDropped':''}`}>
                        <ul className='subCategories-list'>

                            {navSubContent.map((individualItemName)=>{
                                return <SubcategoryListItem itemName={individualItemName}/>
                            })}
                             {/* <SubcategoryListItem itemName={navSubContent}/> */}




                            {/* <SubcategoryListItem itemName='subcategory List item'/>
                            <li className='subCategories-list-item'>
                                Subcategory item
                            </li>
                            <li className='subCategories-list-item'>
                                Subcategory item
                            </li>
                            <li className='subCategories-list-item'>
                                Subcategory item
                            </li> */}
                        </ul>
                    </div>

                </div>


            </div>
            <div className='dropdown-right'>
                <div className='dropdown-right-cancel-section'>
                    <div class="cancel-button" onClick={closeDropdown}>
                        <IoCloseOutline />
                    </div>
                </div>
                <div className='dropdown-right-featured-section'>

                </div>
            </div>

        </div>

    )
}
export default Dropdown;