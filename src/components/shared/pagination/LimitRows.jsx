import React from 'react';


class LimitRowsComponent extends React.Component {
    render () {
        const { onChangeLimit } = this.props;
        return (
            <div className="field">
                <p className="control">
                    <span className="select">
                        <select defaultValue="10" onChange={onChangeLimit}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </span>
                </p>
            </div>
        );
    }
}

export default LimitRowsComponent;