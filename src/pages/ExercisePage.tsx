import React, { useEffect, useState } from "react";
import ExerciseRepository from "../repository/ExerciseRepository";

interface Exercise {
  name: string;
  description: string;
  pictures: string[];
}

const ExercisePage: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [muscle, setBodyPart] = useState("arm");
  const [equipment, setEquipment] = useState("dumbells");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const fetchedExercises = await ExerciseRepository.getExercises(muscle, equipment, page);
        setExercises(fetchedExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    console.log("-------------------------------")
    console.log(fetchExercises());
  }, [muscle, equipment, page]);

  return (
    <div>
      <h1>Exercises</h1>
      <div>
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{exercise.name}</h3>
              <p>
                {
                  exercise.description.replace(/<\/?[^>]+(>|$)/g, "")
                }
              </p>
              <div>
                {exercise.pictures.map((pic, idx) => (
                  <img key={idx} src={pic} alt={exercise.name} style={{ width: "150px", height: "150px", marginRight: "10px" }} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default ExercisePage;
