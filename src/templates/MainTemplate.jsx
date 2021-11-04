import React from 'react';

import NavbarComponent from '../components/shared/Navbar';
import NotificationComponent from '../components/shared/Notification';
import CardComponent from '../components/shared/Card';
import TableComponent from '../components/shared/table/Table';
import TopbarComponent from '../components/shared/topbar/Topbar';
import PaginationComponent from '../components/shared/pagination/Pagination';
import CustomFormComponent from '../components/CustomForm';
import ViewComponent from '../components/shared/view/View';

class MainTemplate extends React.Component {
    constructor (props) {
        super (props);
        const headers = [
            { name: 'Code', field: 'id', sortable: false },
            { name: 'Name', field: 'name', sortable: false },
            { name: 'Username', field: 'username', sortable: false },
            { name: 'Email', field: 'email', sortable: false },
            { name: 'Website', field: 'website', sortable: false },
            { name: 'Actions', field: 'action', sortable: false }
        ];
        this.state = {
            data: [],
            headers: headers,
            firstTab: true,
            secondTab: false,
            thirdTab: false
        };

        this.onCreateNewCustom = this.onCreateNewCustom.bind (this);
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
        const data = [{
            id: 'AFH45HF',
            name: 'First name',
            username:  'FHSk',
            email: 'default@none.com',
            website: 'bydefault.com',
            actions: {
                onDelete: this.onDelete,
                onEdit: this.onEdit,
            }
        }];
        this.setState ({ 
            ...this.state,
            data: data 
        });       
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

    onChangeLimit (e) {
        console.log ('change limit to: ' + e.target.value);
    }

    onChangePage (e) {
        console.log ('change page to: ');
    }

    onSearch (e) {
        console.log ('search: ');
    }

    onSorting (e, value) {
        console.log ('Order by: ', e);
    }

    onSubmit (fields) {
        console.log ('sending: ', fields);
    }

    onCreateNewCustom (e) {
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

    render () {
        const { headers, data, firstTab, secondTab, thirdTab } = this.state;
        return (
            <main>
                <NavbarComponent></NavbarComponent>
                <article className="section">
                    <div className="container">
                        <NotificationComponent 
                            message='' />
                        <CardComponent
                            icon=''
                            title='' >
                            <div className={firstTab?'':'is-hidden'}>
                                <TopbarComponent 
                                    onSearch={this.onSearch} 
                                    onCreateNewCustom={this.onCreateNewCustom} />
                                <TableComponent 
                                    onSorting={this.onSorting}
                                    columns={headers} 
                                    data={data} />
                                <PaginationComponent
                                    start={1}
                                    end={10}
                                    offset={0}
                                    total={100} 
                                    onChangeLimit={this.onChangeLimit} 
                                    onChangePage={this.onChangePage} />
                            </div>
                            <div id="tab-second" className={secondTab?'':'is-hidden'}>
                                <CustomFormComponent 
                                    onSubmit={this.onSubmit} 
                                    onBack={this.onBack} />
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

export default MainTemplate;
