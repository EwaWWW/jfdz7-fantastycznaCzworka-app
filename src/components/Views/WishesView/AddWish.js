import React, { Component } from 'react'
import { Form, TextArea, Button, Select, Header, Modal } from 'semantic-ui-react'

class AddWish extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal trigger={<Button>Dodaj nowe życzenia</Button>}>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Dodawanie życzeń</Header>
                            <Form>
                              <TextArea placeholder='Wpisz treść życzeń' />
                                 <Form.Field>
                                     <Select placeholder='Wybierz kategorię życzeń' options="test" />
                                 </Form.Field>
                            </Form>
                        </Modal.Description>
                      <Button type='submit'>Zapisz</Button>
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddWish