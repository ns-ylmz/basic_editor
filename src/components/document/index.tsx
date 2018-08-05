import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paragraph from '../paragraph/';
import { ParagraphActions } from '../../actions/';

export class Document extends React.Component {
    public render(): JSX.Element {
        console.log('render', this.props);
        return (
            <div>
                Document Component
                <Paragraph/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state.p;

const mapDispatchToProps = (dispatch: any) => ({
    AddParagraph: bindActionCreators(ParagraphActions.AddParagraph, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);