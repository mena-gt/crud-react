import React from 'react';

import SearchInputComponent from './SearchInput';
import ButtonbarComponent from '../buttonbar/Buttonbar';


class TopbarComponent extends React.Component {
    render () {
        const { onSearch, onCreateNewCustom  } = this.props;
        return (
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <SearchInputComponent 
                            onSearch={onSearch} />
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <ButtonbarComponent 
                            onCreateNewCustom={onCreateNewCustom} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TopbarComponent;