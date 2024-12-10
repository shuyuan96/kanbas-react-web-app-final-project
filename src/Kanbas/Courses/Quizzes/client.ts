import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findAllQuizzes = async() => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}`);
    return response.data
}

export const findQuizzesByCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
    console.log(response);
    return response.data;
};

export const findQuizById = async (quizId: string) => {
    try {
      console.log("Quiz ID:", quizId);
      console.log("API Endpoint:", `${QUIZZES_API}/${quizId}`);
      
      const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
      
      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in findQuizById:", error);
      throw error;
    }
  };
  
export const createQuiz = async (courseId: string, quiz: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data;
};

export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
}

export const updateQuiz = async (quiz: any, quizId: string) => {
    const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quizId}`, quiz);
    console.log(response)
    return response.data; 
}