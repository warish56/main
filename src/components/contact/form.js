
import React from 'react'
import ContactStyle from './contactStyle.css'
import CustomButton from '../../elements/buttons/coustomeBtn'
import * as Firebase from '../../database/firebase/firebase'

 class form extends React.Component {

     state = {
         name: '',
         email: '',
         subject: '',
         message: ''
     }


     style = {
         fontSize: '13px',

     };

     onNameChange = (event) => {
         let input = event.target.value;
         this.setState({
             name: input
         })
     }

     onEmailChange = (event) => {
         let input = event.target.value;
         this.setState({
             email: input
         })
     }


     onSubjectChange = (event) => {
         let input = event.target.value;
         this.setState({
             subject: input
         })
     }


     onMessageChange = (event) => {
         let input = event.target.value;
         this.setState({
             message: input
         })
     }


     onSubmit = () => {

         console.log('clicked');

         Firebase.submitPost(this.state.name, this.state.email, this.state.subject, this.state.message)
             .then(
                 alert('Subbmitted ')
             )
             .catch(error => {
                 alert('Error: ' + error)
             })
     }


     render() {
        return (
            <div>

                <form style={this.style} className="text-left">

                    <div className="form-group">
                        <label>Your Name (required)</label>
                        <input value={this.state.name} onChange={this.onNameChange} type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Your Email (required)</label>
                        <input value={this.state.email} onChange={this.onEmailChange} type="email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Subject (required)</label>
                        <input value={this.state.subject} onChange={this.onSubjectChange} type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Messsage (required)</label>
                        <textarea value={this.state.message} onChange={this.onMessageChange} type="text" className="form-control" rows="9"> </textarea>
                    </div>

                    <div onClick={this.onSubmit} >
                        <CustomButton  textcolor={'white'} bgcolor={'#075aae'} text={'send'}/>

                    </div>

                </form>
            </div>
        )
    }
 }

 export default form;