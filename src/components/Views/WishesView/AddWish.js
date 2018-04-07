import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, TextArea, Button, Header, Modal, Icon } from 'semantic-ui-react'

import wishesCategories from '../../../Data/wishesCategories';
import {openCloseModalWish} from "../../../state/modalAddWish";
import {addWish, addWishFireBase} from "../../../state/wishes";

import '../../../style/AddWish.css'


class AddWish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishText: "",
            wishCategory: wishesCategories.filter(category => category.id === 0)[0].category,
            openModal: false,
            completedWish: {wish: "", id: null, category: ""}
        };
    };

    handleText = (event) => {
        this.setState({wishText: event.target.value})
    };

    handleSubmit = (event) => {
        console.log("jeden", this.props.auth.user.uid);
        let wish = {wish: this.state.wishText, id: this.props.wishes.wishes.length +1, category: this.state.wishCategory, userId: this.props.auth.user.uid}
        this.props.addWishFireBase(wish);
        this.props.openCloseModalWish(false);
        this.setState({openModal: false});
    };

    handleCategory = (event) => {
        this.setState({wishCategory: wishesCategories[event.target.value].category});
    };

    closeModal = (event) => {
        this.setState({openModal: false})
    };

    render() {
        return (
            <React.Fragment>
                <Modal open={this.props.modalAddWish} onClose={this.closeModal}>
                    <Modal.Content>
                        <Modal.Description>
                            <Icon className="closeIcon" onClick={() => this.props.openCloseModalWish(false)} name='close'/>
                            <Header>Dodawanie życzeń</Header>
                            <Form onSubmit={this.handleSubmit}>
                              <TextArea placeholder='Wpisz treść życzeń' onChange={this.handleText} />
                                 <Form.Field onChange={this.handleCategory} control='select'>
                                     {wishesCategories.map(cat => cat.id !== 7 &&
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


const mapStateToProps = (store) => {
    console.log("storeAddWIsh", store);
    return {
        modalAddWish: store.modalAddWish.modalAddWish,
        wishes: store.wishes,
        auth: store.auth
    }};

const mapDispatchToProps = dispatch => ({
    addWish: (wish) => dispatch(addWish(wish)) ,
    openCloseModalWish: (data) => dispatch (openCloseModalWish(data)),
    addWishFireBase: (wish) => dispatch(addWishFireBase(wish))
});
export default connect (mapStateToProps, mapDispatchToProps) (AddWish)