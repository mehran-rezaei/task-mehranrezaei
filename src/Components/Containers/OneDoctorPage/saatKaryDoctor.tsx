import React from 'react';

interface MenuButtonProps {
    text1: string;
    text2: string;
}
const index: React.FC<MenuButtonProps> = ({ text1, text2 }) => {
    return (
        <div className='w-24  xl:w-48 flex items-center justify-center flex-col 
        text-sm leading-6 font-semibold h-20 rounded-xl
         border-blue-800 border-2'>
            <h2 className='text-blue-800'>{text1}</h2>
            <h2>{text2}</h2>
        </div>
    );
};

export default index;