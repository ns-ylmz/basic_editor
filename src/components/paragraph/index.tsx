import * as React from 'react';

import { IParagraph } from './paragraph';

export default class Paragraph extends React.Component<IParagraph.IProps, IParagraph.IState> {
    public pRef: any = null;

    public render(): JSX.Element {
        return (
            <p
                ref={pRef => this.pRef = pRef}
                className='document__p'
                key={this.props.index}
                style={{ width: '600px', height: 'auto' }}
                contentEditable
                onKeyDown={e => this.props.onKeyDown(e)}
                onInput={e => this.props.onInput(e)}
                onBlur={() => this.props.onBlur()}
                onSelect={() => this.props.onSelect()}
            >
                {this.props.text}
            </p>
        );
    }
}