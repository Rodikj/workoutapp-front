import axios from "../axios/axios";

const token = localStorage.getItem("authToken");

interface Exercise {
  name: string;
  description: string;
  pictures: string[];
}

const ExerciseRepository = {
  getExercises: async (muscle: string, equipment: string, page: number): Promise<Exercise[]> => {
    const response = await axios.get<Exercise[]>(`/exercises/get`, {
      params: { muscle, equipment, page },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getSavedExercises: async (userId: string): Promise<Exercise[]> => {
    const response = await axios.get<Exercise[]>(`/exercises/saved/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default ExerciseRepository;