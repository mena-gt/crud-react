import React from 'react';


class FormComponent extends React.Component {
    render () {
        return (
            <form action="">
                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-primary">
                        Back
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-light">
                        Submit
                        </button>
                    </p>
                </div>
                <div className="field">
                    <label className="label" 
                        htmlFor="name">
                        Name
                    </label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            value="" />
                    </div>
                    <p className="help is-danger"></p>
                </div>
                <div className="field">
                    <label className="label" 
                        htmlFor="name">
                        Email
                    </label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            value="" />
                    </div>
                    <p className="help is-danger"></p>
                </div>
            </form>
        );
    }
}

export default FormComponent;