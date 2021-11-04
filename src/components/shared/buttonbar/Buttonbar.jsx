import React from 'react';


class ButtonbarComponent extends React.Component {
    render () {
        const { onCreateNewCustom  } = this.props;
        return (
            <p className="buttons">
                <button className="button" 
                    data-tooltip="Add new custom" 
                    onClick={onCreateNewCustom} >
                    <span className="icon">
                        <i className='bx bx-plus'></i>
                    </span>
                </button>
            </p>
        );
    }
}

export default ButtonbarComponent;