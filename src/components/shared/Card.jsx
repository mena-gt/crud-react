import React from 'react';

class CardComponent extends React.Component {
    constructor (props)  {
        super (props);
        this.state = {};
    }

    defaultIcon () {
        return 'bx bx-info-circle';
    }

    defaultTitle () {
        return 'NoTitle';
    }


    render () {
        const {icon, title } = this.props;
        const reduceMargin = {
            marginRight: '5px'
        };
        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title level">
                        <div className="level-left">
                            <div className="level-item" style={reduceMargin}>
                                <span className="icon title is-4">
                                    <i className={ icon || this.defaultIcon ()}></i>
                                </span>
                            </div>
                            <div className="level-item">
                                <p className="title is-5">
                                    { title || this.defaultTitle ()}
                                </p>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item"></div>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CardComponent;