import React, {Component} from 'react'
import { Form, Button,Modal, Icon } from 'semantic-ui-react'
import { addPerson} from "../../../state/persons";
import { connect } from 'react-redux'


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


    }
    renderInput(fieldName, placeHolder,type) {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                onChange={this.handleChange}
                placeholder={placeHolder}
                type={type}
            />
        )
    }
    render() {
        return (
                <Modal dimmer='blurring' trigger={<Button floated='right' icon  labelPosition='left' primary size='small'><Icon name='user' /> Dodaj osobę</Button>} closeIcon>
                    <Modal.Header>Dodaj osobę</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>

                        <Form.Field>
                            <label>Imię i nazwisko</label>
                            {this.renderInput('personName', 'Imię i nazwisko', 'text')}
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            {this.renderInput('personEmail', 'Email', 'email')}
                        </Form.Field>
                        <Form.Field>
                            <label>data</label>
                            <input type="date" name="personDoB" onChange={this.handleChange} value={this.state['personDoB']}/>
                        </Form.Field>
                        <Button type='submit'>Dodaj</Button>
                    </Form>
                    </Modal.Content>
                </Modal>

        )
    }
}

export default connect(
    null, {addPerson})(AddPerson)