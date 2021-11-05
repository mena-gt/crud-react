import React from 'react'
import IndexTemplate from '../templates/IndexTemplate';

class IndexPage extends React.Component {
    render () {
        const columns = [
            'Code', 'Name', 'Email', 'Actions'
        ];
        return (
            <IndexTemplate 
                columns={columns} />
        );
    }
}

export default IndexPage;