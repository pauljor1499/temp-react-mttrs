import React from "react";

export const ClassDetailsContext = React.createContext({ 
    schedState: [],
    currentClassData: {},
    addSchedItem: (schedule) => {}, 
    removeSchedItem: () => {}, 
    resetSchedItems: () => {},
    setSchedState: (schedules) => {},
    setCurrentClassData: (currentClassData) => {},
});

export const useClassDetailsContext = () => {
    const classDetailContext = React.useContext(ClassDetailsContext);

    if (classDetailContext === undefined) {
        throw new Error("useClassDetailsContext must be used within a ClassDetailsContext");
    }

    return classDetailContext;
}