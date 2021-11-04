import React from 'react';


class SearchInputComponent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            q: ''
        };
    }
    render () {
        const { onSearch } = this.props;
        return (
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input is-small" 
                        type="text" 
                        placeholder="Find a user"
                        value={this.state.q}
                        onChange={onSearch} />
                </div>
            </div>
        );
    }
}

export default SearchInputComponent;