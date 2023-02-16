export const addNotes = (newNote) => {
	return {
		type: "ADD_NOTE",
		payload: newNote,
	};
};

export const deleteNote = (note_id) => {
  return {
    type: "DELETE_NOTE",
    payload: note_id,
  }
}
export const updateNote = (noteData)=>{
  return{
    type: "UPDATE_NOTE",
    payload: {noteData}
  }


}

 export const searchNote = (query)=>{
    
    return{
      type:'SEARCH_NOTE',
      query,
    }

}

