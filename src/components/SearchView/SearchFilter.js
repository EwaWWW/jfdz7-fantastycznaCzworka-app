import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import wishes from '../../Data/wishes';

class SearchFilter extends Component {
    state = {};


    render() {

        return (
            wishes.map(wish => {
                return (
                    <Button value={wish.category} toggle>
                        {wish.category}
                    </Button>
                )
            }))
    }
}

export default SearchFilter