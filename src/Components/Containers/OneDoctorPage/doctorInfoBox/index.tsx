import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MenuButtonProps {
    text1: string;
    text2: string;
    iconName: any;
    color: any
}
const index: React.FC<MenuButtonProps> = ({ text1, text2, iconName, color }) => {
    return (
        <div className='bg-white flex py-2 xl:py-3 items-center justify-between
                     flex-col rounded-xl shadow-lg w-24 xl:w-48 h-24 xl:h-28'>
            <div className={`p-2 rounded-md mb-2`}
            style={{backgroundColor: color}}>
                <FontAwesomeIcon icon={iconName} size='xl' color='#616161' />
            </div>
            <h2 className='flex flex-col text-[10px]
                         xl:text-xs xl:leading-5 text-center leading-4'>
                <span>{text1}</span>
                <span>{text2}</span>
            </h2>
        </div>
    );
};

export default index;