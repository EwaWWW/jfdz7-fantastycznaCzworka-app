import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import wishes from '../../Data/wishes';

class SearchFilter extends Component {

    onButtonToggle = (e) => {
        const category = e.target.value;
        console.log(category)

    };

    render() {

        return (
            wishes.map(wish => {
                return (
                    <Button value={wish.category}
                            onClick={this.onButtonToggle}
                            toggle>
                        {wish.category}
                    </Button>
                )
            }))
    }
}

export default SearchFilter