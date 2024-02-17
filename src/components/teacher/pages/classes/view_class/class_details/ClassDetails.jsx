import "./ClassDetails.scss";
import classImage from "../../../../../../assets/sample1.jpg";
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  DialogContent,
  Fade,
  Modal,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TeacherClasses, {
  _deleteClass,
  _updateClass,
} from "../../../../../../store/slices/teacher/TeacherClasses";
import React, { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { TransitionGroup } from "react-transition-group";
import TeacherSpecificClass, {
  _fetchSpecificClass,
} from "../../../../../../store/slices/teacher/TeacherSpecificClass";
import Collapse from "@mui/material/Collapse";
import EditClassComponent from "./components/EditClassComponent";
import { ClassDetailsContext } from "../context/Context";
import dayjs from "dayjs";
import SimpleLoading from "../../../../../commons/components/loading/SimpleLoading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const ClassDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [schedState, setSchedState] = useState([]);
  const [currentClassData, setCurrentClassData] = useState({
    uuid: "",
    updated_at: "",
    description: "",
    code: "",
    teacher_id: "",
    created_at: "",
    title: "",
    section: "",
    schedules: [],
    students: [],
  });

  const { specificClassData, isLoading, hasErrors } = useSelector(
    (state) => state.TeacherSpecificClass
  );

  useEffect(() => {
    if (specificClassData === null) {
      dispatch(_fetchSpecificClass(location.state.classUUID));
    }
  }, []);

  useEffect(() => {
    if (specificClassData) {
      setSchedState(specificClassData.schedules);
      setCurrentClassData(specificClassData);
    }
  }, [specificClassData]);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeleteClass = () => {
    dispatch(_deleteClass(location.state.classUUID)).then((response) => {
      if (response.payload) {
        handleCloseDeleteDialog();
        navigate("/teacher/classes");
        enqueueSnackbar("Successfully deleted class", { variant: "success" });
      }
    });
  };

  // Schedule Item context values for child components

  const addSchedItem = (schedule) => {
    setSchedState([...schedState, schedule]);
  };
  const removeSchedItem = (index) => {
    setSchedState(schedState.filter((_, i) => i !== index));
  };
  const resetSchedItems = () => {
    setSchedState([]);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <ClassDetailsContext.Provider
        value={{
          schedState,
          currentClassData,
          addSchedItem,
          removeSchedItem,
          resetSchedItems,
          setSchedState,
          setCurrentClassData,
        }}
      >
        <SimpleLoading showLoading={isLoading} />
        <Collapse in={Boolean(hasErrors)}>
            <Alert sx={{ borderRadius: 0 }} severity="error">
              <AlertTitle>Error</AlertTitle>
              {hasErrors}
            </Alert>
          </Collapse>
        <Box className="teacher-class-details-content">
          <Box className="class-content">
            <Box className="class-header">
              <Box className="class-image">
                <img src={classImage} alt="classImage" />
              </Box>
              <Box className="class-text">
                <Box className="text-item">
                  <Typography variant="subtitle2">Title</Typography>
                  <Typography variant="subtitle1">
                    {currentClassData.title}
                  </Typography>
                </Box>
                <Divider orientation="horizontal" />
                <Box className="text-item">
                  <Typography variant="subtitle2">Code</Typography>
                  <Typography variant="subtitle1">
                    {currentClassData.code}
                  </Typography>
                </Box>
                <Divider orientation="horizontal" />
                <Box className="text-item">
                  <Typography variant="subtitle2">Description</Typography>
                  <Typography variant="subtitle1" className="class-description">
                    {currentClassData.description}
                  </Typography>
                </Box>
                <Divider orientation="horizontal" />
                <Box className="text-item">
                  <Typography variant="subtitle2">Date created</Typography>
                  <Typography variant="subtitle1">
                    {dayjs(currentClassData.created_at).format("LL")}
                  </Typography>
                </Box>
                <Divider orientation="horizontal" />
                <Box className="class-schedules">
                  <Typography variant="subtitle2">Schedules</Typography>
                  <TransitionGroup>
                    {currentClassData.schedules.map((item, index) => (
                      <Collapse
                        sx={{
                          mb: 1,
                        }}
                        key={index}
                      >
                        <Paper
                          elevation={1}
                          key={item.day}
                          className="schedule-item"
                        >
                          <Typography variant="body1">{item.day}</Typography>
                          <Typography variant="body2">
                            {item.time_start + " - " + item.time_end}
                          </Typography>
                        </Paper>
                      </Collapse>
                    ))}
                  </TransitionGroup>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="class-widgets">
            <Box className="class-settings">
              <Button
                onClick={() => setOpen(true)}
                variant="outlined"
                color="secondary"
                fullWidth
              >
                Edit Class
              </Button>
              <Button
                onClick={() => setOpenDeleteDialog(true)}
                variant="outlined"
                color="error"
                fullWidth
              >
                Delete Class
              </Button>
            </Box>
          </Box>

          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <DialogContent>
                <EditClassComponent close={handleClose} />
              </DialogContent>
            </Fade>
          </Modal>
          <Dialog
            open={openDeleteDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDeleteDialog}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="xs"
          >
            <DialogTitle>{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Do you want to delete this class?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="error" onClick={handleCloseDeleteDialog}>
                No
              </Button>
              <Button onClick={handleDeleteClass}>Yes</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </ClassDetailsContext.Provider>
    </SnackbarProvider>
  );
};

export default ClassDetails;
