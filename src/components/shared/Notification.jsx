import React from 'react';

class NotificationComponent extends React.Component {
    constructor (props) {
        super (props);
        this.state = { showOrHide: true };
        this.hide = this.hide.bind (this)
    }

    defaultMessage () {
        return `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`;
    }

    hide () {
        this.setState ({ showOrHide: false });
    }

    render () {
        const { message } = this.props;
        const hideClass = this.state.showOrHide ? 
            'columns' : 'columns is-hidden';
        return (
            <div className={hideClass}>
                <div className="column">
                    <div className="notification is-link">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    { message || this.defaultMessage ()}
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <button 
                                        className="button is-small is-white"
                                        onClick={this.hide}>
                                            Dismiss
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationComponent;