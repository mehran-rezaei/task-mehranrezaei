import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDoctorStore from '@/store/doctorStore';
interface CustomInputProps {
    placeHolderText: string;
}
const index: React.FC<CustomInputProps> = ({ placeHolderText }) => {
    const SearchValue = useDoctorStore((state) => state.SearchValue)
    const setSearchValue = useDoctorStore((state) => state.setSearchValue)

    return (
        <div
            className='flex items-center justify-between bg-[#e4e3e3]  
             h-[35px] xl:h-[42px] xl:min-w-[330px] rounded-[8px] px-[20px]'>
            <input className='placeholder:text-black placeholder:text-sm xl:placeholder:text-base
                 bg-white/0 w-[90%] outline-none text-black'
                value={SearchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text" placeholder={placeHolderText} />
            <FontAwesomeIcon icon={faMagnifyingGlass} size='1x' color='black' />
        </div>

    );
};

export default index;