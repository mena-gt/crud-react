import React from 'react';

import NotificationComponent from '../components/shared/Notification';
import CardComponent from '../components/Card';
import TableComponent from '../components/Table';
import ButtonBarComponent from '../components/ButtonBar';
import ViewComponent from '../components/View';
import FormComponent from '../components/Form';
import FetchData from '../services/fetch';


class IndexTemplate extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            data: [],
            firstTab: true,
            secondTab: false,
            thirdTab: false
        };

        this.onCreate = this.onCreate.bind (this);
        this.onBack = this.onBack.bind (this);
        this.onEdit = this.onEdit.bind (this);
    }

    onEdit (e) {
        console.log ('already to edit');
        this.setState ({ 
            ...this.state,
            firstTab: false,
            secondTab: false,
            thirdTab: true
        }); 
    }

    onDelete (e) {
        console.log ('already to remove');
    }

    async componentDidMount () {  
        /*try {
            let response = await fetch ('https://jsonplaceholder.typicode.com/users');
            let data = await response.json ();
            this.setState ({ 
                ...this.state,
                data: data 
            });
        } catch (error) {
            console.log ('--error--');
            console.log (error);
        }*/
    }

    onSubmit (fields) {
        console.log ('sending: ', fields);
    }

    onCreate (e) {
        this.setState ({
            ...this.state,
            firstTab: false,
            secondTab: true,
            thirdTab: false
        })
    }

    onBack (e) {
        this.setState ({
            ...this.state,
            firstTab: true,
            secondTab: false,
            thirdTab: false
        })
    }

    getAll () {
        const http = new FetchData ();
        http.getData ('127.0.0.1:4000/api/custom')
            .then ((response) => {
                
            })
    }

    render () {
        const { columns } = this.props;
        const { firstTab, secondTab, thirdTab } = this.state;
        return (
            <main>
                <article className="section">
                    <div className="container">
                        <NotificationComponent 
                            message='' />
                        <CardComponent
                            title='Hello World!' >
                            <div className={firstTab?'':'is-hidden'}>
                                <ButtonBarComponent 
                                    onAdd={this.onCreate} />
                                <TableComponent 
                                    columns={columns} />
                            </div>
                            <div id="tab-second" className={secondTab?'':'is-hidden'}>
                                <FormComponent />
                            </div>
                            <div id="tab-third" className={thirdTab?'':'is-hidden'}>
                                <ViewComponent 
                                    onBack={this.onBack} />
                            </div>
                        </CardComponent>
                    </div>
                </article>
            </main>
        );
    }
}

export default IndexTemplate;
