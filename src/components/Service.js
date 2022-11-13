import React, {useContext} from 'react';
import ThemeContext from '../Context';
import Navbar from './Navbar';
import './Common.css';

const Service = () => {

    const {isLight} = useContext(ThemeContext);

    return(
        <div className={isLight?'light' : 'dark'}>
        <Navbar />
        <h2>Our Service are not available currently.</h2>
        </div>
    );
}

export default Service;