import React from 'react';


class TableComponent extends React.Component {
    render () {
        const { columns } = this.props;
        return (
            <div className="table-container">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            { columns.map ((column) => {
                                return (<th>{column}</th>);
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className="buttons">
                                    <button className="button" >
                                        <span className="icon">
                                            <i className='bx bxs-edit'></i>
                                        </span>
                                    </button>
                                    <button className="button" >
                                        <span className="icon">
                                            <i className='bx bxs-trash' ></i>
                                        </span>
                                    </button>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="1" className="has-text-centered">
                                No data available in table
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComponent;