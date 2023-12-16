import React, { useEffect, useState } from 'react';
import useDoctorStore from '@/store/doctorStore';
import Link from 'next/link';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const index = () => {
  const SearchValue = useDoctorStore((state) => state.SearchValue)
  const DoctorsData = useDoctorStore((state) => state.DoctorsData)
  const [showNothingMatch, setShowNothingMatch] = useState<boolean>(false)
  useEffect(() => {
    setShowNothingMatch(false)
    if (DoctorsData.length < 1 && SearchValue.length > 0) {
      setTimeout(() => {
        setShowNothingMatch(true)
      }, 1000);
    }
  }, [SearchValue, DoctorsData])
  return (
    <>
      {SearchValue.length > 0 ?
        <section>
          {DoctorsData.length > 0 ?
            <div>
              <section className='grid grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-4'>
                {DoctorsData.map((movie: any) => (
                  <Link href={`${movie.id}`}
                    className='flex items-center relative text-xs xl:text-sm 
                  font-semibold leading-6 xl:leading-7 gap-x-3 bg-mainBg py-2 xl:py-4 px-3 rounded-md shadow-md'>
                    <img
                      className='h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-[50%]'
                      src={movie.image_thumbnail_path} alt="" />
                    <div>
                      <h3>{movie.name}</h3>
                      <h3 >{movie.network}</h3>
                      <h3>{movie.start_date}</h3>
                    </div>
                    <div className='absolute left-6'>
                      <FontAwesomeIcon icon={faAngleLeft} size='xl' color='#616161' />
                    </div>
                  </Link>
                ))}
              </section>
            </div>
            :
            <div>
              {showNothingMatch ?
                <h4>جستجوی شما با نتیجه ای همراه نبود.</h4> : ''}
            </div>}
        </section> :
        <section
          className='grid grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-4'>
          {DoctorsData.map((movie: any) => (
            <Link href={`${movie.id}`}
              className='flex items-center relative text-xs xl:text-sm 
          font-semibold leading-6 xl:leading-7 gap-x-3 bg-mainBg py-2 xl:py-4 px-3 rounded-md shadow-md'>
              <img
                className='h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-[50%]'
                src={movie.image_thumbnail_path} alt="" />
              <div>
                <h3>{movie.name}</h3>
                <h3 >{movie.network}</h3>
                <h3>{movie.start_date}</h3>
              </div>
              <div className='absolute left-6'>
                <FontAwesomeIcon icon={faAngleLeft} size='xl' color='#616161' />
              </div>
            </Link>
          ))}
        </section>
      }
    </>
  );
};

export default index;