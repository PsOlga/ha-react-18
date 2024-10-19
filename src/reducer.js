// contactsReducer.js
const initialState = {
    submissions: [],
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_CONTACT':
            return {
                ...state,
                submissions: [...state.submissions, action.payload],
            };
        default:
            return state;
    }
};

export default contactsReducer;


