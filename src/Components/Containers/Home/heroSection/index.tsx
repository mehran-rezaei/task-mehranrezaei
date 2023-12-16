import React, { useEffect, useState } from "react";
import DoctorListContainer from '../heroSection/doctorListResult'
const index = () => {

  return (
    <div className='px-[20px] xl:px-[70px] mt-[25px] xl:mt-[30px]'>
        <h1 className='text-base xl:text-xl font-semibold mb-5'>لیست پزشکان</h1>
      <DoctorListContainer />
    </div>
  );
};

export default index;
