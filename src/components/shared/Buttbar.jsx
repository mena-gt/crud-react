import React from 'react';

class ButtbarComponent extends React.Component {
    render () {
        return (
            <p class="buttons">
                <a class="button">
                    <span class="icon is-small">
                        <i class='bx bx-basket'></i>
                    </span>
                </a>
                <a class="button">
                    <span class="icon is-small">
                        <i class='bx bx-message-alt-dots'></i>
                    </span>
                </a>
                <a class="button">
                    <span class="icon is-small">
                        <i class='bx bxs-store-alt'></i>
                    </span>
                </a>
            </p>
        );
    }
}

export default ButtbarComponent;