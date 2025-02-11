import React, { useEffect, useState } from "react";
import ExerciseRepository from "../repository/ExerciseRepository";
import NavigationBar from "../components/NavigationBar";
import "../styles/ExercisePage.css";

interface Exercise {
  name: string;
  description: string;
  pictures: string[];
}

const ExercisePage: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [muscle, setMuscle] = useState("arms");
  const [equipment, setEquipment] = useState("dumbbell");
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchExercises = async () => {
    setLoading(true);
    try {
      const fetchedExercises = await ExerciseRepository.getExercises(muscle, equipment, page);
      setExercises(fetchedExercises);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searched) {
      fetchExercises();
    }
  }, [page]);

  return (
    <div className="exercise-page">
      <NavigationBar />
      
      <div className="search-section">
        <h1>Find Exercises</h1>
        <div className="filters">
          <select value={muscle} onChange={(e) => setMuscle(e.target.value)}>
            <option value="arms">Arms</option>
            <option value="chest">Chest</option>
            <option value="legs">Legs</option>
            <option value="abs">Abs</option>
            <option value="biceps">Biceps</option>
          </select>

          <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            <option value="dumbbell">Dumbbell</option>
            <option value="bench">Bench</option>
            <option value="barbell">Barbell</option>
          </select>

          <button onClick={fetchExercises}>Search</button>
        </div>
      </div>

      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {!loading && searched && (
        <div className="exercise-grid">
          {exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <div key={index} className="exercise-card">
                <h3 className="exercise-title">{exercise.name}</h3>
                {exercise.pictures.length > 0 && (
                  <img className="exercise-image" src={exercise.pictures[0]} alt={exercise.name} />
                )}
                <p className="exercise-description">{exercise.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No exercises found.</p>
          )}
        </div>
      )}

      {searched && exercises.length > 0 && (
        <div className="pagination">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
            Prev Page
          </button>
          <span>{page}</span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
        </div>
      )}
    </div>
  );
};

export default ExercisePage;