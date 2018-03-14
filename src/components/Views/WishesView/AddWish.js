import React, { Component } from 'react'
import { Form, TextArea, Button, Header, Modal } from 'semantic-ui-react'
import wishes from '../../../Data/wishes';
import '../../../style/AddWish.css'


class AddWish extends Component {
    render() {
        const wishesIds = Object.keys(wishes);
        return (
            <React.Fragment>
                <Modal trigger={<Button>Dodaj nowe życzenia</Button>}>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Dodawanie życzeń</Header>
                            <Form>
                              <TextArea placeholder='Wpisz treść życzeń' />
                                 <Form.Field control='select'>
                                     {wishesIds.map(id =>
                                         <option value='1'>{ wishes[id].category }</option>
                                     )}
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