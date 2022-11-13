import React, {useContext} from 'react';
import ThemeContext from '../Context';
import Navbar from './Navbar';
import './Common.css';

const Home = () => {

const {isLight} = useContext(ThemeContext);

    return (
        <div className={isLight?'light' : 'dark'}>
        <Navbar />
            <h4>HOME</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.</p>
        </div>
    )
}

export default Home;