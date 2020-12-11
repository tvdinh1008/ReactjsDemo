import {combineReducers} from 'redux';
import users from './users'
import itemEditing from './itemEditing';
import devices from './devices';

const appReducers=combineReducers({
    users,
    itemEditing,
    devices
});
export default appReducers;