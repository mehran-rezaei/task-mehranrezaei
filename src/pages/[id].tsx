import { GetOneDoctorById } from '@/dataService/doctorProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { faAngleLeft , faStethoscope  , faFileLines , faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DocoterInfoBoxContainer from '../Components/Containers/OneDoctorPage/doctorInfoBox'
import Topsection from '../Components/Containers/OneDoctorPage/tobSection'
import AboutDoctorContainer from '../Components/Containers/OneDoctorPage/aboutDoctor'
import SaatKaryDoctor from '../Components/Containers/OneDoctorPage/saatKaryDoctor'
import Link from 'next/link';

const oneDoctorPage = () => {
    const [oneDoctorData , setOneDoctorata ]= useState<any>([])
    const [pageId , setPageId] = useState<string | any>(undefined)
    const InfoData = [
        { text1: '18 سال' , text2 : 'سابقه طبابت', iconName: faStethoscope, color : 'rgb(134 239 172 / 0.3)' },
        { text1: 'شماره نظام', text2 : '1234567', iconName: faFileLines , color : 'rgb(239 68 68 / 0.2)' },
        { text1: '4.9', text2 : 'رای مراجعین', iconName: faStar  ,color : 'rgb(254 249 195 / 0.5)' }
    ]
    const AboutDoctorData = [
        { text1: 'درباره پزشک'},
        { text1: 'تحصیلات' },
        { text1: 'تجربیات و دستاورد ها' }
    ]
    const SaatKaryData = [
        { text1: 'شنبه' , text2 : '17 تا 19'  },
        { text1: 'یکشنبه' , text2 : '17 تا 19'  },
        { text1: 'دوشنبه' , text2 : '17 تا 19'  },
        { text1: 'سه شنبه' , text2 : '17 تا 19'  },
        { text1: 'چهارشنبه' , text2 : '17 تا 19'  },
    ]
    const router = useRouter()
    useEffect(() => {
        setPageId(router.query.id)
      } , [router.query.id])
    useEffect(() => {
        if(pageId !== undefined){
        GetOneDoctorById(pageId)
        .then(Response => {
            setOneDoctorata([Response.data])
        })}
    } , [pageId])    
    return (
        <div dir='rtl' className='bg-mainBg min-h-screen '>
            {oneDoctorData.length > 0  ? 
            <main className='w-full  ' >
                <header className='flex  shadow-sm justify-between px-5 items-center font-semibold w-full h-14 bg-white'>
                     <h2>پروفایل پزشک</h2>
                     <Link href="/">
                     <FontAwesomeIcon icon={faAngleLeft} size='lg' color='#616161' />
                     </Link>
                </header>
                <Topsection 
                  text1={oneDoctorData[0].tvShow.name} 
                  text2={oneDoctorData[0].tvShow.network}
                  img={oneDoctorData[0].tvShow.image_thumbnail_path} />

                <div className='px-3'>
                <section className='grid gap-x-2 xl:w-1/2  grid-cols-3 text-xs font-semibold mb-5'>
                     {InfoData.map((box)=> (
                        <DocoterInfoBoxContainer
                        key={box.text1}
                         text1={box.text1} text2={box.text2} 
                         iconName={box.iconName} color={box.color} />
                     ))}
                </section>
                <section>
                     {AboutDoctorData.map((box)=> (
                         <AboutDoctorContainer key={box.text1} text1={box.text1} /> ))}
                </section>

                <section >
                    <h1 className='text-sm  mt-5 px-3 font-semibold '>ساعات کاری وجلسات پزشک</h1>
                    <div className='grid grid-cols-3 xl:w-1/2 mt-5 px-2 gap-y-4'>
                          {SaatKaryData.map((box)=> (
                            <SaatKaryDoctor key={box.text1} text1={box.text1} text2={box.text2}/>
                          ))}
                    </div>
                </section>
                <section>
                    <div className='w-full xl:w-1/4 my-5 xl:mr-2'>
                      <button className='w-full h-10 rounded-lg bg-gray-400/40 text-white
                      '>دریافت و ثبت نوبت</button>
                    </div>
                </section>
                </div>
            </main>
             : ''}
        </div>
    );
};

export default oneDoctorPage;