import { create } from 'zustand'
import { Doctor } from '@/interfaces/doctor'

interface inputStore {
    SearchValue : string,
    setSearchValue : (data:string) => void
    DoctorsData : Doctor[],
    setDoctorsData : (data:Doctor[]) => void
  }

const useDoctorStore = create<inputStore>((set) => ({
    SearchValue : '',
    setSearchValue : (data) => set((state) => ({ SearchValue: state.SearchValue = data })), 
    DoctorsData : [],
    setDoctorsData : (data) => set((state) => ({ DoctorsData: state.DoctorsData = data })), 
 
}))
export default useDoctorStore;