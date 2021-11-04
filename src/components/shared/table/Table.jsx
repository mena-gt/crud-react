import React from 'react';
import HeaderComponent from './Header';


class TableComponent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {};
    }

    buildBody () {
        const header = this.props.columns;
        const data = this.props.data;
        return (
            <tbody>
                {data.map ((item) => {
                    return (
                        <tr key={item.id}>
                            <td><input type="checkbox" /></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                            <td>
                                <button className="button" 
                                    data-tooltip="Add new custom" 
                                    onClick={item.actions.onEdit} >
                                    <span className="icon">
                                        <i className='bx bxs-edit'></i>
                                    </span>
                                </button>
                                <button className="button" 
                                    data-tooltip="Add new custom" 
                                    onClick={item.actions.onDelete} >
                                    <span className="icon">
                                        <i className='bx bxs-trash' ></i>
                                    </span>
                                </button>
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td colSpan={header.length + 1} className="has-text-centered">
                        No data available in table
                    </td>
                </tr>
            </tbody>
        );
    }

    render () {
        const { onSorting, columns } = this.props;
        return (
        <div className="table-container">
            <table className="table is-fullwidth">
                <HeaderComponent 
                    columns={columns}
                    onSorting={onSorting} />
                {this.buildBody ()}
            </table>
        </div>
        );
    }
}

export default TableComponent;