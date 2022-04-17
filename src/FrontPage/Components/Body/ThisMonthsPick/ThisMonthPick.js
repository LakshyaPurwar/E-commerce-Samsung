import { useContext, useState } from 'react';
import Heading from '../../../../commonElements/Heading/heading';
import Nav from '../../../../commonElements/Nav/SubNav';
import SubNavContext from '../../../../context/SubNav/subNavContext';
import './ThisMonthPick.css';
import tmp from '../../../../data/subNavData';
import Grid from './Grid';





//The Parent Container of This Month Pick
function ThisMonthPick() {
    const [clickedItem, updateClickedItem] = useContext(SubNavContext);
    setTimeout(()=>{
        const itemsArray = tmp.categories.filter((category) => {
            return category.title === clickedItem;
        }).map((individualObject) => {
            return individualObject.items;
        });

    },3000);

    return (

        <div className='thisMonthPick'>
            <Heading >This Month's Pick</Heading>
            <Nav items={['New-in', 'Mobile', 'TV', 'Appliances', 'Watches & Accessories', 'Tablets']} />
            <div className='grid-super-container'>
                <Grid />
            </div>

            {/* <div className='itemsDisplay'>
                <ul className='itemsDisplay-list'>
                    {itemsArray.map((item)=>{
                        return <li className='itemDisplay-list-item'>{item}</li>;
                    })}
                </ul>
            </div> */}
        </div>
    );
}
export default ThisMonthPick;