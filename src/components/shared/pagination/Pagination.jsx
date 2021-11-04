import React from 'react';

import InfoPaginationComponent from './InfoPagination';
import LimitRowsComponent from './LimitRows';
import NavigatorComponent from './Navigator';

class PaginationComponent extends React.Component {
    render () {
        const { onChangeLimit, onChangePage } = this.props;
        return (
        <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <InfoPaginationComponent 
                        start={1}
                        end={10}
                        offset={0}
                        total={100} />
                </div>
                <div clas="level-item">
                    <LimitRowsComponent 
                        onChangeLimit={onChangeLimit}/>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <NavigatorComponent 
                        onChangePage={onChangePage} />
                </div>
            </div>
        </div>
        );
    }
}

export default PaginationComponent;