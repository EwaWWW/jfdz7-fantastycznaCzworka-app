import React, {Component} from 'react'

import { Grid } from 'semantic-ui-react'

class UsersView extends Component {

render() {
    return (
        <Grid container>
            <Grid.Column>
                <h1>Lista użytwników</h1>
            </Grid.Column>
        </Grid>
    )

}
}

export default UsersView