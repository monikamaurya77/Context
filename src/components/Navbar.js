import React,{useContext} from 'react';
import ThemeContext from '../Context';
import {Link} from 'react-router-dom';

const Navbar = () => {

//const [isLight, setIsLight] = useState(true);
const {isLight, changeTheme} = useContext(ThemeContext);
//const data = useContext(ThemeContext);

    return(
        <>
        <h1>Geekster</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/service">Service</Link>
        <br />
        <br />
        <button onClick={()=>{changeTheme()}}>Toggle Theme to {isLight?"Dark":"Light"}</button>
         
        </>
    )
}

export default Navbar;