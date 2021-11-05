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
        const { title } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title">
                        <p className="title is-5">
                            { title || this.defaultTitle ()}                            
                        </p>
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