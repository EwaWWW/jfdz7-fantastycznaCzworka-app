import React, { Component } from 'react'
import { Button, Modal, Form, Dropdown, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {updatePerson} from '../../../state/persons'




export class EditPersonForm extends Component {

    state = {
        personName: this.props.name,
        personDoB: this.props.date,
        personEmail: this.props.email,
        personWish:this.props.wish,
        isOpenModal: false
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }
    handleWish = (e, {value}) => {
        this.setState({
            personWish: value
        })

    }
    handleSubmit = event => {

        event.preventDefault();



        this.props.updatePerson(this.props.id, {
            name: this.state.personName,
            date: this.state.personDoB,
            email: this.state.personEmail,
            wish: this.state.personWish
        });
        this.setState({isOpenModal: false});

    }
    closeModal = () => {
        this.setState({isOpenModal: false})
    }
    openModal = () => {
        this.setState({isOpenModal: true})
    };
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
        const {wishes} = this.props;
        const searchWishes = wishes.map(wish => {
            return {
                text:wish.wish,
                value: wish.wish,
                key: wish.id
            }
        });
        return (
            <Modal onClose={this.closeModal} open={this.state.isOpenModal} dimmer='blurring' trigger={<Button onClick={this.openModal} floated='right' icon  labelPosition='left' primary size='small'><Icon name="edit" /> Edytuj osobę</Button>} closeIcon>
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
                        <p>Wyszukaj życzenie</p>
                        <Dropdown placeholder='Wyszukaj życzenie' onChange={this.handleWish} fluid search selection options={searchWishes} value={this.state.personWish} />
                        <Form.Field>
                            <Button type='submit'>Zapisz edycję</Button>
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect(state =>
    ({
        wishes:state.wishes.wishes
        }),
            {updatePerson})(EditPersonForm)
