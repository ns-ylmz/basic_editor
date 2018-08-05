


export module ParagraphActions {
    export const AddParagraph = (payload: any) => (dispatch: any, getState: any) => {
        let { } = payload;

        dispatch({
            payload,
            type: 'Paragraph_SetReducer'
        })
    };
}
