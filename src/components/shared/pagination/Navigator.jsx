import React from 'react';

class NavigatorComponent extends React.Component {

    nextButton () {
        return (
            <button className="pagination-next">Next</button>
        );
    }
    previousButton () {
        return (
            <button className="pagination-previous is-disabled" 
                title="This is the first page">
                    Previous
            </button>
        );
    }

    render () {
        const { onChangePage } = this.props;
        return (
        <div className="pagination" role="navigation" aria-label="pagination">
            {this.nextButton ()}                            
            {this.previousButton ()}
            <ul className="pagination-list">
                <li>
                    <button className="pagination-link is-current" 
                        aria-label="Page 1" aria-current="page">
                        1
                    </button>
                </li>
                <li>
                    <button className="pagination-link" 
                        aria-label="Goto page 2"
                        onClick={onChangePage}>
                        2
                    </button>
                </li>
                <li>
                    <button className="pagination-link" 
                        aria-label="Goto page 3"
                        onClick={onChangePage}>
                        3
                    </button>
                </li>
            </ul>
        </div>
        );
    }
}

export default NavigatorComponent;