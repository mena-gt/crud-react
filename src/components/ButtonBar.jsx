import React from 'react';

class ButtonBarComponent extends React.Component {
    render () {
        const { onAdd } = this.props;
        return (
            <div className="level">
                <div className="level-left"></div>
                <div className="level-right">
                    <div className="level-item">
                        <p className="buttons">
                            <button className="button" 
                                onClick={onAdd} >
                                <span className="icon">
                                    <i className='bx bx-plus'></i>
                                </span>
                                <span>Add</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonBarComponent;