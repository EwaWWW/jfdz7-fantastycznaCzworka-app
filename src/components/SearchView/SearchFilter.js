import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import wishes from '../../Data/wishes';

class SearchFilter extends Component {
    state = {};

    handleClick = () => this.setState({ active: !this.state.active });


    render() {

        const { active } = this.state;
        return (
            wishes.map(wish => {
                return (
                    <Button key={wish.id} color='red' toggle active={active} onClick={this.handleClick}>
                        {wish.category}
                    </Button>
                )
            }))
    }
}

export default SearchFilter