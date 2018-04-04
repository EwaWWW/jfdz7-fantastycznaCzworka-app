import React, {Component} from 'react'
import { Form, Button,Modal, Icon, Dropdown } from 'semantic-ui-react'
import { addPerson} from "../../../state/persons";
import { connect } from 'react-redux';
import wishes from "../../../state/wishes";


const initState = {
    personName:'',
    personDoB: '',
    personEmail: '',
    personWish:'',
    isOpenModal: false
};


class AddPerson extends Component {
    state = initState;
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {

        event.preventDefault();

        const { personName, personDoB, personEmail } = this.state;

        this.props.addPerson(personName, personDoB, personEmail);
        this.setState({isOpenModal: false});
        this.setState(initState);
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
                text:wish.wish
            }
        });




        return (
                <Modal onClose={this.closeModal} open={this.state.isOpenModal} dimmer='blurring' trigger={<Button onClick={this.openModal} floated='right' icon  labelPosition='left' primary size='small'><Icon name='user' /> Dodaj osobę</Button>} closeIcon>
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
                            <Dropdown placeholder='Wyszukaj życzenie' fluid search selection options={searchWishes} />
                            <Form.Field>
                        <Button type='submit'>Dodaj</Button>
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
     {addPerson})(AddPerson)