import * as React from 'react';

import Paragraph from '../paragraph/';

export default class Document extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                Document Component
                <Paragraph/>
            </div>
        );
    }
}