import { combineReducers } from "redux";
import  userReducer  from "./user_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  artists: artistsReducer
});

export default entitiesReducer;