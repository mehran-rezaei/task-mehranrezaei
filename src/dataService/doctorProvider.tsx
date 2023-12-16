import axiosInstance from "./Configs/axiosInstance";

export function getAllDoctor(page:number) {
  return axiosInstance
    .get(`/api/most-popular?page=${page}`)
    .then((response) => response);
}
export function GetDoctorBySearch(name: string  ){
     return axiosInstance
     .get(`api/search?q=${name}&page=1`)
    .then((response) => response);
}
export function GetOneDoctorById(id: string ){
  return axiosInstance
  .get(`api/show-details?q=${id}`)
 .then((response) => response);
}

