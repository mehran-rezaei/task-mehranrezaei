import React, { useEffect, useState } from 'react';
import MenuButton from '../../Common/menuButton';
import { faHouse, faStethoscope, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '@/Components/Common/customInput';
import { GetDoctorBySearch, getAllDoctor } from '@/dataService/doctorProvider';
import useDoctorStore from '@/store/doctorStore';
import { Button, Dropdown, Input, Menu, Space } from "antd";

const index = () => {
    const SearchValue = useDoctorStore((state) => state.SearchValue)
    const setDoctorsData = useDoctorStore((state) => state.setDoctorsData)
    const Data = [
        { textFarsi: 'خانه', iconName: faHouse },
        { textFarsi: 'پزشکان', iconName: faStethoscope },
        { textFarsi: 'فالو آپ', iconName: faComments },
        { textFarsi: 'پروفایل', iconName: faUser },
    ]
    useEffect(() => {
        if (SearchValue.length > 0) {
            GetDoctorBySearch(SearchValue)
                .then(Response => {
                    setDoctorsData(Response.data.tv_shows)
                    //     const filteredMovies = Response.data.tv_shows.filter((movie :any ) =>
                    //     movie.name.toLowerCase().startsWith(SearchValue.toLowerCase())
                    //   );
                    //   setMoviesData(filteredMovies);
                })
                .catch(err => console.log(err))
        }
        else {
            getAllDoctor(0)
                .then(Response => {
                    console.log(Response.data.tv_shows);
                    setDoctorsData(Response.data.tv_shows)
                })
                .catch(err => console.log(err))
            // setMoviesData([])
        }
    }, [SearchValue])
    return (
        <>
            <div
                className='flex justify-between items-center px-4 xl:px-[75px] shadow-md w-full
             h-[85px] bg-mainBg'>
                <section
                    className='w-1/2 hidden xl:flex items-center justify-around'>
                    {Data.map((item) => (
                        <MenuButton
                            key={item.textFarsi}
                            textFarsi={item.textFarsi}
                            iconName={item.iconName} />
                    ))}
                </section>
                <section className='flex items-center gap-x-5 flex-row-reverse xl:flex-row'>
                    <Button
                        className='text-[14px] text-white border-none
                 py-[1px] px-[40px] h-[35px] bg-mainBlue '>
                        فیلتر
                    </Button>
                    <CustomInput placeHolderText={'جستجو کنید ...'} />
                </section>

            </div>

        </>
    );
};

export default index;