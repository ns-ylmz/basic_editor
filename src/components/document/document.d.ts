import { Props } from 'react';

export module IDocument {
    export interface IProps extends Props<{}>, IDispatchProps {
        
    }

    export interface IState { }
    
    export interface IDispatchProps {
        AddParagraph?(payload: IActions.IAddParagrapPayload): IActions.IActionPayload;
        DeleteParagraph?(payload: IActions.IDeleteParagrapPayload): IActions.IActionPayload;
        UpdateParagraph?(payload: IActions.IUpdateParagraphPayload): IActions.IActionPayload;
        OnBlur(i: number): IActions.IActionPayload;
        OnSelect(i: number): IActions.IActionPayload;
        UndoHistory?(): IActions.IActionPayload;
        RedoHistory?(): IActions.IActionPayload;
    }

    export interface IDispatchState {
        count: number;

        currIndex: number;
        currOffset: number;

        indexHistory: Array<number>;
        offsetHistory: Array<number>;

        historyIndex: number;

        list: IParagraphList;
        listHistory: Array<IParagraphList>; 
    }

    export type IParagraphList = Array<IParagrapItem>;

    export interface IParagrapItem {
        id: number; 
        text: string;
    }

    module IActions {
        interface IActionPayload {

        }

        interface IAddParagrapPayload {
            index: number;
            offset: number;
        }

        interface IDeleteParagrapPayload {
            index: number;
        }

        interface IUpdateParagraphPayload{
            text: string;
            index: number;
        }

    }
}