/**
 * Created by Wayuki on 03-Feb-17 0003.
 */

export const TEACHER_ACTION_TYPES = {
    SHOW_FORM: 'SHOW_FORM',
    HIDE_FORM: 'HIDE_FORM',
    HANDLE_FORM_FIELD_CHANGE: 'HANDLE_FORM_FIELD_CHANGE',
    SAVE_TEACHER: 'SAVE_TEACHER',
    DELETE_TEACHER: 'DELETE_TEACHER',
    PROCESSING_SAVE_TEACHER: 'PROCESSING_SAVE_TEACHER',
    PROCESSING_DELETE_TEACHER: 'PROCESSING_DELETE_TEACHER',
    SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
};

export const NOTIFICATION_ACTION_TYPES = {
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    RESET_NOTIFICATION: 'RESET_NOTIFICATION',
};

const actionTypes = {
    GET_ALL_TOPICS: 'GET_ALL_TOPICS',
    GET_COURSES_BY_TOPIC_ID: 'GET_COURSES_BY_TOPIC_ID',
    GET_DEFAULT_TOPIC: 'GET_DEFAULT_TOPIC',
    DELETE_TOPIC: 'DELETE_TOPIC',
    SAVE_TOPIC: 'SAVE_TOPIC',
    SAVE_COURSE_BY_TOPIC_ID: 'SAVE_COURSE_BY_TOPIC_ID',
    DELETE_COURSE_BY_TOPIC_ID: 'DELETE_COURSE_BY_TOPIC_ID',
    EMPTY_COURSES: 'EMPTY_COURSES',
};

export default actionTypes;
