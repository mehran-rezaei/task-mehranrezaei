import React from 'react';
interface MenuButtonProps {
  text1: string;
  text2: string;
  img: any;
}
const index: React.FC<MenuButtonProps> = ({ text1, text2, img }) => {
  return (

    <section className='px-4 my-4 flex gap-x-6 items-center'>
      <img
        className='h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-[50%]'
        src={img} alt="" />
      <div>
        <h3>{text1}</h3>
        <h3 >{text2}</h3>
      </div>
    </section>

  );
};

export default index;