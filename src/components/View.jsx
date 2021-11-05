import React from 'react';


class ViewComponent extends React.Component {
    render () {
        const centerStyle = { textAlign: 'center' };
        const { onBack } = this.props;
        return (
            <div>
                <button
                    className="button"
                    onClick={onBack}>
                    Back
                </button>
                <div style={centerStyle}>
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Sin imagen" />
                </div>
                <div className="field-body">
                    <div className="field">
                        <label className="label">First name</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" 
                                />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last name</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Birth date</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Role</label>
                        <div className="control is-clearfix">
                            <input type="text" 
                                readOnly="readonly"
                                className="input is-static" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewComponent;