import {combineReducers} from 'redux';
import users from './users'
import itemEditing from './itemEditing';
import devices from './devices';
import authenticationService from './authenticationService';

const appReducers=combineReducers({
    users,
    itemEditing,
    devices,
    authenticationService,
});
export default appReducers;