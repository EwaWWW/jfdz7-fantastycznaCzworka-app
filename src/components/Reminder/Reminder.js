import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'


class Reminder extends Component {

    state = { visible: true }
        handleDismiss = () => {
            this.setState({ visible: false })

    }

  render() {

      if (this.state.visible) {

          return (
              <Message info floating compact
                  icon='alarm'
                  size='big'
                  onDismiss={this.handleDismiss}
                  header='Twój znajomy ma niedługo urodziny!'
                  content='IMIE NAZWISKO za X dni ma urodziny !!'
              />
          )
      }
      }
}

export default Reminder