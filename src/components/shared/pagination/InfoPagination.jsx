import React from 'react';

class InfoPaginationComponent extends React.Component {
    render () {
        const { start, end, offset, total } = this.props;
        return (
            <p>{start+offset} to {end+offset} of {total} entries</p>
        );
    }
}

export default InfoPaginationComponent;