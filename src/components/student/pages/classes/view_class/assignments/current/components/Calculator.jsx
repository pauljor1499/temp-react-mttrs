import { useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";

const Calculator = () => {
    const [expression, setExpression] = useState("");

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const handleClear = () => {
        setExpression("");
    };

    const handleCalculate = () => {
        try {
            const result = eval(expression);
            setExpression(result.toString());
        } catch (error) {
            setExpression("Error");
        }
    };

    return (
        <Paper sx={{ p: 2 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={expression}
                        onChange={(e) => setExpression(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={3}>
                    <Button onClick={() => handleButtonClick("7")}>7</Button>
                </Grid> */}
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={handleClear}>
                        AC
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => handleButtonClick("+")}>
                        +
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => handleButtonClick("-")}>
                        -
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => handleButtonClick("*")}>
                        X
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => handleButtonClick("/")}>
                        /
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={handleCalculate}>
                        =
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Calculator;
