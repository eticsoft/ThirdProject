import React from 'react';

// const initialState = {
//     count: 5,
// }

const counterReducer = (state = 0, action) => {
    console.log('counter reducer called', state, action.type);
    switch(action.type) {
        case 'INCREMENT':
            return state+action.payload;
        case 'DECREMENT':
            return state-action.payload;
        default:
            return state;
    };
};

export default counterReducer;