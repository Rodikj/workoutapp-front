import React, { useEffect, useState } from "react";
import CalculatorRepository from "../repository/CalculatorRepository";
import "../styles/CalculatorsPage.css";
import NavigationBar from '../components/NavigationBar';
import "../styles/LoadingAnimation.css";

const userId = localStorage.getItem("userId") || "";

const CalculatorsPage: React.FC = () => {
    const [calculations, setCalculations] = useState({
        bmi: "",
        bmr: "",
        idealBodyWeight: "",
        bodyFatPercentage: "",
        targetHeartRate: "",
        leanBodyMass: ""
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) {
            setError("User ID not found");
            setLoading(false);
            return;
        }

        const fetchCalculations = async () => {
            try {
                const bmi = await CalculatorRepository.getBMI(userId);
                const bmr = await CalculatorRepository.getBMR(userId);
                const idealBodyWeight = await CalculatorRepository.getIdealBodyWeight(userId);
                const bodyFatPercentage = await CalculatorRepository.getBodyFatPercentage(userId);
                const targetHeartRate = await CalculatorRepository.getTargetHeartRate(userId);
                const leanBodyMass = await CalculatorRepository.getLeanBodyMass(userId);

                setCalculations({ bmi, bmr, idealBodyWeight, bodyFatPercentage, targetHeartRate, leanBodyMass });
            } catch (err) {
                setError("Failed to fetch calculations");
            } finally {
                setLoading(false);
            }
        };

        fetchCalculations();
    }, []);

    if (loading) return <div className="loading-spinner"></div>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div className="calculator-container">
        <NavigationBar />
            <h2 className="page-title">Your health stats</h2>
            <div className="calculator-grid">
                <div className="calculator-card">
                    <h3>BMI</h3>
                    <p>{calculations.bmi}</p>
                </div>
                <div className="calculator-card">
                    <h3>BMR</h3>
                    <p>{calculations.bmr}</p>
                </div>
                <div className="calculator-card">
                    <h3>Ideal Body Weight</h3>
                    <p>{calculations.idealBodyWeight}</p>
                </div>
                <div className="calculator-card">
                    <h3>Body Fat Percentage</h3>
                    <p>{calculations.bodyFatPercentage}</p>
                </div>
                <div className="calculator-card">
                    <h3>Target Heart Rate</h3>
                    <p>{calculations.targetHeartRate}</p>
                </div>
                <div className="calculator-card">
                    <h3>Lean Body Mass</h3>
                    <p>{calculations.leanBodyMass}</p>
                </div>
            </div>
        </div>
    );
};

export default CalculatorsPage;
