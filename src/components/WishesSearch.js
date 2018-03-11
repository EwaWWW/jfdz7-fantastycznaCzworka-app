import React, {Component} from 'react';
import {Search}  from 'semantic-ui-react';
// import {wishes} from '../Data/wishes'

export default class WishesSearch extends Component {
    render() {
        return (
            <div>
                <div className="szukaj">
                    <Search className="search_input" type="text" placeholder="Wyszukiwarka życzeń!"
                            onChange={this.handleSearch}/>
                </div>

            </div>
        )
    }
}



