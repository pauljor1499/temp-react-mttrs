import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateNewClass = () => {
    return (
        <div>
            <Button startIcon={<AddIcon />} variant="contained" color="primary" size="standard">
                Enroll New Class
            </Button>
        </div>
    );
};

export default CreateNewClass;
