import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
interface NavbarButtonProps {
    text: string;
    iconName: any;
}
const index: React.FC<NavbarButtonProps> = ({ text, iconName }) => {
    return (
        <div>
            <Link
                className='text-[14px] text-white cursor-pointer  flex items-center
                justify-between px-[20px] rounded-[19px] ml-1 w-[116px] h-[38px]
                bg-mainBlue'
                href='#'>
                <FontAwesomeIcon icon={iconName} />
                <span>{text}</span>
            </Link>
        </div>
    );
};

export default index;