import React from 'react';


class HeaderComponent extends React.Component {
    render () {
        const { columns, onSorting } = this.props;
        return (
        <thead>
            <tr>
                <th><input type="checkbox" /></th>
                {columns.map ((column) => {
                    return (
                        <th key={column.field}
                            onClick={onSorting.bind (this, column.field)}>
                            {column.name}
                        </th>
                    );
                })}
            </tr>
        </thead>
        );
    }
}

export default HeaderComponent;