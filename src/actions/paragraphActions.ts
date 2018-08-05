export module ParagraphActions {
    export const AddParagraph = (payload: any) => (dispatch: any, getState: any) => {
        let { count, historyIndex, list, indexHistory, offsetHistory }  = getState().p;
        let { index, offset } = payload;
        let newArr = [];
        let { id, text } = list[index];

        let newOffset;
        for (let i = 0; i < list.length; i++) {
            if (i === index && offset !== list[i].length-1) {
                newOffset = text.substr(offset).length;
                newArr.push({
                    id,
                    text: text.substr(0, offset)
                });

                newArr.push({
                    id: count + 1,
                    text: text.substr(offset)
                });
                continue;
            }

            if (i === index && offset === list[i].length-1) {
                newArr.push({
                    id,
                    text: text.substr(0, offset)
                });

                newArr.push({
                    id: count + 1,
                    text: ''
                });
                newOffset = 0;
                continue;
            }
            newArr.push(list[i]);
        }

        dispatch({
            payload: {
                save: true,
                count: count + 1,
                currOffset: newOffset,
                currIndex: index + 1,
                list: newArr,
                indexHistory,
                offsetHistory,
                historyIndex: historyIndex + 1
            },
            type: 'Paragraph_SetReducer',
        });

        dispatch({
            payload,
            type: 'Paragraph_SetReducer'
        })
    };

    export const DeleteParagraph = (payload: any) => (dispatch: any, getState: any) => {
        const { currIndex, historyIndex, list, indexHistory, offsetHistory, listHistory } = getState().p;
        const { index } = payload;

        dispatch({
            payload: {
                save: true,
                historyIndex: historyIndex + 1,
                list: list.filter((p: any) => list.indexOf(p) !== index),
                currOffset: list[currIndex - 1].text.length,
                currIndex: currIndex - 1,
                indexHistory,
                offsetHistory,
                listHistory
            },
            type: 'Paragraph_SetReducer'
        });
    };

    export const OnBlur = (payload: any) => (dispatch: any, getState: any) => {
        let { list } = getState().paragraphs;
        let index = payload;
        
        if (list[index].text.length === 0) {
            DeleteParagraph({ index })(dispatch, getState);
        }
    
        return;
    };
    
    export const OnSelect = (payload: any) => (dispatch: any, getState: any) => {
        const { historyIndex, offsetHistory, indexHistory, listHistory } = getState().p;
        const { anchorOffset } = window.getSelection();
    
        const newArr = [...offsetHistory];
        newArr[historyIndex] = anchorOffset;
    
        dispatch({
            payload: {
                currIndex: payload,
                currOffset: anchorOffset,
                offsetHistory: [...newArr],
                indexHistory,
                listHistory
            },
            type: 'Paragraph_SetReducer',
        });
    };

    export const UpdateParagraph = (payload: any) => (dispatch: any, getState: any) => {
        const { currIndex, historyIndex, list, offsetHistory, indexHistory, listHistory } = getState().p;
        const { text, index } = payload;
    
        const { anchorOffset } = window.getSelection();
    
        const newArr = [...list];
        newArr[index] = {
            id: newArr[index].id,
            text
        };
    
        const newListHistory = [...listHistory];
        newListHistory.push(newArr);
        
        console.log('UpdateParagraph', newListHistory, listHistory);
    
        const newIndexHistory = [...indexHistory];
        newIndexHistory.push(currIndex);
    
        const newOffsetHistory = [...offsetHistory];
        newOffsetHistory.push(anchorOffset);
    
        dispatch({
            payload: {
                save: true,
                list: newArr,
                currIndex,
                currOffset: anchorOffset,
                historyIndex: historyIndex + 1,
                offsetHistory: [...newOffsetHistory],
                indexHistory: [...newIndexHistory],
                listHistory: [...newListHistory]
            },
            type: 'Paragraph_SetReducer',
        });
    };
    
    export const UndoHistory = () => (dispatch: any, getState: any) => {
        const { historyIndex, indexHistory, listHistory, offsetHistory } = getState().p;
    
        dispatch({
            payload:{
                currIndex: indexHistory[historyIndex - 1],
                currOffset: offsetHistory[historyIndex - 1],
                historyIndex: historyIndex - 1 ,
                list: listHistory[historyIndex - 1],
                indexHistory,
                offsetHistory,
                listHistory
            },
            type: 'Paragraph_SetReducer',
        })
    };
    
    export const RedoHistory = () => (dispatch: any, getState: any) => {
        const { historyIndex, indexHistory, listHistory, offsetHistory } = getState().p;
    
        dispatch({
            payload:{
                currIndex: indexHistory[historyIndex + 1],
                currOffset: offsetHistory[historyIndex + 1],
                historyIndex: historyIndex + 1 ,
                list: listHistory[historyIndex + 1],
                indexHistory,
                offsetHistory,
                listHistory
            },
            type: 'Paragraph_SetReducer',
        })
    };
}
