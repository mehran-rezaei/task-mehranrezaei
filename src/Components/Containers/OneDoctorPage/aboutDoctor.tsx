import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface MenuButtonProps {
  text1: string;
}
const index: React.FC<MenuButtonProps> = ({ text1 }) => {
  return (
    <section className='flex my-3 font-semibold text-sm shadow-sm justify-between
         px-5 items-center w-full h-12 rounded-md bg-white'>
      <h2>{text1}</h2>
      <FontAwesomeIcon icon={faAngleLeft} size='lg' color='#616161' />
    </section>
  );
};

export default index;