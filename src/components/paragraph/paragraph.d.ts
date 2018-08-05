import { Props } from 'react';

export module IParagraph {
    export interface IProps extends Props<{}> {
        index: number;
        text: string;
        onKeyDown: (e: any) => void;
        onInput: (e: any) => void;
        onBlur: () => void;
        onSelect: () => void;
    }

    export interface IState { }
    
}