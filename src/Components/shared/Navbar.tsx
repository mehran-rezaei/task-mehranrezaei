import React from 'react';
import NavbarButtton from '../Common/NavbarButtton';
import { faUserPlus, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import MenuContainer from './menu'
const Navbar = () => {
    const ButtonData = [
        { text: 'ثبت نام ', iconName: faUserPlus },
        { text: 'وارد شوید ', iconName: faArrowRightToBracket }
    ]
    return (
        <header>
            <div className='mx-[70px] py-[25px] hidden sm:flex items-center justify-between'>
                <section
                    className='flex justify-between items-center'>
                    <NavbarButtton text={ButtonData[0].text} iconName={ButtonData[0].iconName} />
                    <NavbarButtton text={ButtonData[1].text} iconName={ButtonData[1].iconName} />
                </section>
                <section>
                    <img src="../../Images/naftlogo.png"
                        style={{ width: '224px', height: 'auto' }} alt="" />
                </section>
            </div>
            {/* menu section : */}
            <MenuContainer />
        </header>
    );
};

export default Navbar;