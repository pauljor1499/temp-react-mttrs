/* eslint-disable react/prop-types */
import { useState } from "react";
import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Box, Paper } from "@mui/material";
import { useEffect } from "react";
import QuestionTimer from "./QuestionTimer";

const QuestionList = ({ setShowQuestions }) => {
    const [seconds, setSeconds] = useState(120);
    const [answers, setAnswers] = useState({});
    const [answeredCount, setAnsweredCount] = useState(0);
    const [showShadow, setShowShadow] = useState(false);

    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: "Mars",
        },
        {
            id: 3,
            question: 'Who wrote "To Kill a Mockingbird"?',
            options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Charles Dickens"],
            correctAnswer: "Harper Lee",
        },
        {
            id: 4,
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            correctAnswer: "H2O",
        },
        {
            id: 5,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            id: 6,
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
            correctAnswer: "Leonardo da Vinci",
        },
        {
            id: 7,
            question: "What is the tallest mammal?",
            options: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
            correctAnswer: "Giraffe",
        },
        {
            id: 8,
            question: "What is the currency of Japan?",
            options: ["Yen", "Dollar", "Euro", "Pound"],
            correctAnswer: "Yen",
        },
        {
            id: 9,
            question: "Which gas do plants use to produce energy?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon dioxide",
        },
        {
            id: 10,
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Rosa Parks", "Mother Teresa", "Jane Goodall"],
            correctAnswer: "Marie Curie",
        },
    ];

    const handleOptionChange = (questionId, value) => {
        setAnswers({
            ...answers,
            [questionId]: value,
        });
        if (!answers[questionId]) {
            setAnsweredCount(answeredCount + 1);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowShadow(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSubmit = () => {
        console.log("Answers:", answers);
        setShowQuestions(false);
    };

    return (
        <Box>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "sticky",
                    top: 0,
                    marginBottom: "1rem",
                    padding: "0 2%",
                    backgroundColor: "#ffff",
                    zIndex: 2,
                    boxShadow: showShadow ? "0px 2px 5px 0px rgba(0, 0, 0, 0.5)" : "none",
                }}
            >
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                    Questions
                </Typography>
                <Typography variant="body1">
                    Answered {answeredCount} out of {questions.length} questions
                </Typography>
                <Typography variant="body1">
                    <QuestionTimer seconds={seconds} setSeconds={setSeconds} />
                </Typography>
                <Button disabled={seconds === 0} variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Answers
                </Button>
            </Box>
            {questions.map((question) => (
                <Box key={question.id} sx={{ p: 2 }}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <Typography>{question.question}</Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label={`question-${question.id}`}
                                name={`question-${question.id}`}
                                value={answers[question.id] || ""}
                                onChange={(event) => handleOptionChange(question.id, event.target.value)}
                            >
                                {question.options.map((option, index) => (
                                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Box>
            ))}
        </Box>
    );
};

export default QuestionList;
