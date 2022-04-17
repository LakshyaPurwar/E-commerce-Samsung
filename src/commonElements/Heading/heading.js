import './heading.css';
function Heading(props)
{
    return (
        <div class='heading'>
            {props.children}
        </div>
    );
}
export default Heading;