//Grid Container For Body of This month Pick
import { useContext } from 'react';
import tmp from '../../../../data/subNavData';
import SubNavContext from '../../../../context/SubNav/subNavContext'; 
import './Grid.css';


function GridItem(props)
{
    console.log(props.url);
    return <div style={{backgroundImage:`url(${props.url})`,backgroundSize:'auto',backgroundRepeat:'no-repeat',backgroundPositionX:'center',backgroundPositionY:'center'}} className={`grid-item grid-item-${props.itemNumber}`}>{props.itemName}</div>
}


function Grid()
{
    const [clickedItem, updateClickedItem, slide, upadateSlide] = useContext(SubNavContext);

    const itemsArray = tmp.categories.filter((category) => {
        return category.title === clickedItem;
    }).map((individualObject) => {
        return individualObject.items;
    })[0];
    console.log(itemsArray[0]);

    return(
    <div className={`grid-container ${slide}`}>
        {itemsArray.map((item,index)=>{
            return <GridItem itemName={item.name} url={item.url}  key={Math.random()} itemNumber={index+1}  />
        })}
        
    </div>
    );
}
export default Grid;




{/* <div className='grid-item grid-item-1'></div>
        <div className='grid-item grid-item-2'></div>
        <div className='grid-item grid-item-3'></div>
        <div className='grid-item grid-item-4'></div>
        <div className='grid-item grid-item-5'></div> 
        
    */}

    //  ../../../../../


    // ../../../../../resources/BodyImages/New-in/A73.png