import React from 'react';


class ButtonComponent extends React.Component {
    render () {
        return (
            <button class="button">
                <span class="icon is-small">
                    <i class='bx bx-basket'></i>
                </span>
            </button>
        );
    }
}

export default ButtonComponent;