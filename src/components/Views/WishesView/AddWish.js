import React, { Component } from 'react'
import { Form, TextArea, Button, Header, Modal } from 'semantic-ui-react'
import wishes from '../../../Data/wishes';
import wishesCategories from '../../../Data/wishesCategories';
import '../../../style/AddWish.css'


class AddWish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishText: "",
            wishCategory: wishesCategories.filter(category => category.id === 0)[0].category,
            openModal: false,
            currentId: null
        };
    };

    handleText = (event) => {
        this.setState({wishText: event.target.value})
    };

    handleSubmit = (event) => {
        wishes.push({wish: this.state.wishText, id: this.state.currentId, category: this.state.wishCategory});
        this.setState({openModal: false});
    };

    handleCategory = (event) => {
        this.setState({wishCategory: wishesCategories[event.target.value].category});
    };

    closeModal = (event) => {
        this.setState({openModal: false})
    };

    openModal = (event) => {
        this.setState({openModal: true, currentId: wishes.length +1})
    };

    render() {
        return (
            <React.Fragment>
                <Modal open={this.state.openModal} onClose={this.closeModal}>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Dodawanie życzeń</Header>
                            <Form onSubmit={this.handleSubmit}>
                              <TextArea placeholder='Wpisz treść życzeń' onChange={this.handleText} />
                                 <Form.Field onChange={this.handleCategory} control='select'>
                                     {wishesCategories.map(cat =>
                                         <option value={cat.id}>{ cat.category }</option>
                                     )}
                                 </Form.Field>
                                <Button value="Submit" type='submit'>Zapisz</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddWish