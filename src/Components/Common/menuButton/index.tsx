import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface MenuButtonProps {
    textFarsi: string;
    iconName: any;
}
const index: React.FC<MenuButtonProps> = ({ textFarsi, iconName }) => {
    return (
        <div >
            <a className='flex flex-col xl:flex-row items-center gap-x-2 xl:gap-x-3.5 font-medium' href="#">
                <section>
                    <FontAwesomeIcon icon={iconName} size='lg' color='#616161' />
                </section>
                <section>
                    <span className='text-[12px] xl:text-[15px] text-[#616161]'>
                        {textFarsi}
                    </span>
                </section>
            </a>
        </div>
    );
};

export default index;