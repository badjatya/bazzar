// Importing directory data
import directorySectionData from "./directory.data";

const INITIAL_STATE = {
  sections: directorySectionData,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
