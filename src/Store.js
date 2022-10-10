import { createStore } from "redux";
import reduces from "./Redux/Reducers/Index";

const store = createStore(reduces, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store