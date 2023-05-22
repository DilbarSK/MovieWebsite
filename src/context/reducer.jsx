const reducer = (state, action) => {
  if (action.type === "HOME-UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      imgsrc: action.payload.imgsrc,
    };
  }
  if (action.type === "ABOUT-UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      imgsrc: action.payload.imgsrc,
    };
  } 
};
export default reducer;
