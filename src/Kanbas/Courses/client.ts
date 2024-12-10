import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    try {
        const { data } = await axiosWithCredentials.get(COURSES_API);
        return data;
    } catch (err) {
        return [];
    }
}; 
export const createCourse = async (course: any) => {
    const response = await axiosWithCredentials.post(COURSES_API, course);
    return response.data;
};  
export const deleteCourse = async (id: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return response.data;
};
export const updateCourse = async (course: any) => {
    const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
};

export const requestEnrollCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/enroll`, {
        courseId
    });
    return response.data;
}