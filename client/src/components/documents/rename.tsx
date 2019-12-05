import React, { Component } from 'react';
import Modal from 'react-modal';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

const mapStateToProps = (state: Types.State) => ({
    renameOpen: state.documents.renameOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeRename: actions.closeRename
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Rename extends Component<Props, {}> {
    render() {
        return (
            <Modal
                isOpen={this.props.renameOpen}
                onRequestClose={this.props.closeRename}
            >
                rename
            </Modal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rename);