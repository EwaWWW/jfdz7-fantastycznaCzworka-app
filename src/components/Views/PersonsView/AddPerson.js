import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Form, Button,  Modal, Icon } from 'semantic-ui-react'



class AddPerson extends Component {
state = {
    personName:'',
    personDoB: '',
    personEmail: ''
}
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault()

        const { personName, personDoB, personEmail } = this.state

        this.props.addPerson(personName, personDoB, personEmail)

        this.setState(state)
    }
    render() {
        return (
            <Modal dimmer='blurring' trigger={<Button floated='right' icon labelPosition='left' primary size='small'><Icon name='user' /> Dodaj osobę</Button>}>
                <Modal.Header>Dodaj osobę</Modal.Header>
                <Modal.Content>
                        <Form>
                            <Form.Field>
                            <label>Imię i nazwisko</label>
                            <input placeholder='Imię i nazwisko' />
                        </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type='email' placeholder="Email"/>
                    </Form.Field>
                    <Form.Field>
                        <label>data</label>
                        <input type="date" name="departed"/>
                    </Form.Field>
                    <Button type='submit'>Dodaj</Button>
                        </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect(
    null,

(AddPerson)