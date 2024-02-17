import React from "react";
import { Typography, List, ListItem, ListItemText, Paper, Box } from "@mui/material";

const questions = [
    {
        id: 1,
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green", "Yellow"],
    },
    {
        id: 2,
        question: "Which programming language do you prefer?",
        choices: ["JavaScript", "Python", "Java", "C++"],
    },
    // Add more questions here
];

const QuestionsList = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box>
                <Typography variant="h6" align="left" gutterBottom>
                    Questions
                </Typography>
                <Typography variant="body2">10 items</Typography>
            </Box>
            <List>
                {questions.map((question) => (
                    <ListItem key={question.id}>
                        <Paper elevation={1} variant="elevation" sx={{ p: 2 }}>
                            <ListItemText
                                primary={question.question}
                                secondary={
                                    <React.Fragment>
                                        {question.choices.map((choice, index) => (
                                            <span key={index}>
                                                {choice}
                                                {index !== question.choices.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </React.Fragment>
                                }
                            />
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default QuestionsList;
