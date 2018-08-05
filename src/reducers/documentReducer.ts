const INITIAL_STATE = {

};

export const DocumentReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'Document_SetReducer':
            return {
                ...state,
                ...action.payload
            };

        case 'Document_ResetReducer':
            return INITIAL_STATE;

        default:
            return state;
    }
};