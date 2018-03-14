import React, {Component} from 'react'
import { Form, Button,  Modal, Icon } from 'semantic-ui-react'



class AddPerson extends Component {
    render() {
        return (
            <Modal trigger={<Button floated='right' icon labelPosition='left' primary size='small'><Icon name='user' /> Dodaj użytkownika</Button>}>
                <Modal.Header>Dodaj osobę</Modal.Header>
                <Modal.Content>
                        <Form>
                            <Form.Field>
                            <label>Imię i nazwisko</label>
                            <input placeholder='Imię i nazwisko' />
                        </Form.Field>
                    <Form.Field  type='email'>
                        <label>Email</label>
                        <input placeholder="Email"/>
                    </Form.Field>
                    <Button type='submit'>Dodaj</Button>
                        </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddPerson