import React, {Component} from 'react'

import PersonsList from './PersonsList'
import persons from '../../../Data/persons'
import wishes from '../../../Data/wishes'


const usersAndWishes = persons.map(person => {
    return {
        id: person.id,
        name: person.name,
        wish: wishes.filter(wish => wish.id === person.idWish),
        date: person.date,
        email: person.email
    }
});


class PersonsView extends Component {
state =  {
 persons: usersAndWishes
}


render() {
    return (
<PersonsList persons={this.state.persons}/>
    )

}
}

export default PersonsView