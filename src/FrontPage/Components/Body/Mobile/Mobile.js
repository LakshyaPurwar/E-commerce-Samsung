import './Mobile.css';
import SubNav from '../../../../commonElements/Nav/SubNav';
import Heading from '../../../../commonElements/Heading/heading';
function Mobile()
{
    return (
        <div className='mobile'>
            <Heading>Mobile</Heading>
            <SubNav items={['Galaxy S22 Series', 'Galaxy A53 5G', 'Galaxy Tab S8|S8+|S8 Ultra', 'Galaxy Z Fold3|Flip3 5G', 'Galaxy M33 5G']}/>

        </div>
    );
}
export default Mobile;