import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paragraph from '../paragraph/';
import { ParagraphActions } from '../../actions/';

import { IDocument } from './document';

export class Document extends React.Component<IDocument.IDispatchProps & IDocument.IDispatchState, IDocument.IState> {
    public pRefs: Array<any> = [];

    public componentDidMount(): void {
        const { currIndex } = this.props; 
        let currP = document.getElementsByClassName('document__p')[currIndex] as HTMLElement;
        currP.focus();
    }

    public componentDidUpdate(): void {
        const { currOffset, currIndex,  } = this.props;
        this.pRefs[currIndex].pRef.focus()
        const selection = window.getSelection();
        const { anchorNode } = selection;
        selection.collapse(anchorNode, currOffset);
    }

    public onKeyPressed(event: any, index: number): void {
        const { ctrlKey, key, keyCode } = event;
        const offset = window.getSelection().anchorOffset;
        //console.log('onKeyPressed');
        
        if (event.target.innerHTML.length === 1000) {
            event.preventDefault();
        }

        if (key === 'Enter') {
            event.preventDefault();
            this.props.AddParagraph({ index, offset });
        }

        // b 66
        if (keyCode === 66 && ctrlKey) {
            event.preventDefault();
            console.log('CTRL B pressed');
        }

        if (keyCode === 73 && ctrlKey) {
            event.preventDefault();
            console.log('CTRL I pressed');
        }

        if (keyCode === 89 && ctrlKey) {
            event.preventDefault();
            console.log('CTRL Y pressed');
            this.props.RedoHistory();
        }

        if (keyCode === 90 && ctrlKey) {
            event.preventDefault();
            console.log('CTRL Z pressed');
            this.props.UndoHistory();
        }
    }

    public onInput(event: any, index: number): void {
        const text = event.target.innerHTML;
        console.log('onInput', text);
       
        if (text.length === 0) {
            this.props.DeleteParagraph({ index });
        } else {
            this.props.UpdateParagraph({ text, index })
        }
    }

    public renderParagraphs(): Array<JSX.Element> {
        return this.props.list.map((p, i) => (
            <Paragraph
                ref={(pRef: any) => this.pRefs[i] = pRef}
                key={i}
                index={i}
                text={p.text}
                onKeyDown={e => this.onKeyPressed(e, i)}
                onInput={e => this.onInput(e, i)}
                onBlur={() => this.props.OnBlur(i)}
                onSelect={() => this.props.OnSelect(i)}
            />
        ));
    }


    public render(): JSX.Element {
        console.log('render', this.props);
        return (
            <div className='document__wrapper'>
                <h1 className='document__header'>Document 1</h1>
                {this.renderParagraphs()}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state.p;

const mapDispatchToProps = (dispatch: any) => ({
    AddParagraph: bindActionCreators(ParagraphActions.AddParagraph, dispatch),
    DeleteParagraph: bindActionCreators(ParagraphActions.DeleteParagraph, dispatch),
    OnBlur: bindActionCreators(ParagraphActions.OnBlur, dispatch),
    OnSelect: bindActionCreators(ParagraphActions.OnSelect, dispatch),
    UpdateParagraph: bindActionCreators(ParagraphActions.UpdateParagraph, dispatch),
    UndoHistory: bindActionCreators(ParagraphActions.UndoHistory, dispatch),
    RedoHistory: bindActionCreators(ParagraphActions.RedoHistory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);