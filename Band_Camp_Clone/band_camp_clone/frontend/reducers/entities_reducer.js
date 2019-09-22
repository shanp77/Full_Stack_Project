import { combineReducers } from "redux";
import  userReducer  from "./user_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from './tracks_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  albums: albumsReducer,
  tracks: tracksReducer
});

export default entitiesReducer;