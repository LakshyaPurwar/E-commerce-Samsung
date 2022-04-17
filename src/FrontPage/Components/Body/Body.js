import './Body.css';
import ThisMonthPick from './ThisMonthsPick/ThisMonthPick';
import Mobile from './Mobile/Mobile';
function Body()
{
    return <div className="body">
        <ThisMonthPick></ThisMonthPick>
        <Mobile />
    </div>;
}
export default Body;