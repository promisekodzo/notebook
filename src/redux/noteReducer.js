let initialState = {
  notes: [],

  query: "",
};

let notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      const unDeletedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return { ...state, notes: unDeletedNotes };
    case "UPDATE_NOTE":
      const updatedNote = state.notes.map((note) => {
        if (note.id === action.payload.noteData.id) {
          return action.payload.noteData;
        } else {
          return note;
        }
      });
      return { ...state, notes: updatedNote };

    case "SEARCH_NOTE": {
      const { query } = action;
      return { ...state, query };
    }

    default:
      return state;
  }
};

export default notesReducer;
