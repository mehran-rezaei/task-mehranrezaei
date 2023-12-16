import React from 'react';
import { faHouse, faStethoscope, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import MenuButton from '../../Common/menuButton';
const index = () => {
    const Data = [
        { textFarsi: 'خانه', iconName: faHouse },
        { textFarsi: 'پزشکان', iconName: faStethoscope },
        { textFarsi: 'فالو آپ', iconName: faComments },
        { textFarsi: 'پروفایل', iconName: faUser },
    ]
    return (
        <footer className='xl:hidden fixed  bottom-0  bg-white h-[80px] py-5 w-full'>
            <section
                className='w-full   flex items-center justify-around bg-white'>
                {Data.map((item) => (
                    <MenuButton
                        key={item.textFarsi}
                        textFarsi={item.textFarsi}
                        iconName={item.iconName} />
                ))}
            </section>
        </footer>
    );
};

export default index;