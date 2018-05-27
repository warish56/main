
import React from 'react'
import ContactStyle from './contactStyle.css'
import CustomButton from '../../elements/buttons/coustomeBtn'
import * as Firebase from '../../database/firebase/firebase'

 class form extends React.Component {

     state = {
         name: '',
         email: '',
         subject: '',
         message: '',

         alerts:{
             success:false,
             error:false
         }
     };


     style = {
         fontSize: '13px',

     };



     onNameChange = (event) => {
         let input = event.target.value;
         this.setState({
             name: input
         })
     };

     onEmailChange = (event) => {
         let input = event.target.value;
         this.setState({
             email: input
         })
     };


     onSubjectChange = (event) => {
         let input = event.target.value;
         this.setState({
             subject: input
         })
     };


     onMessageChange = (event) => {
         let input = event.target.value;
         this.setState({
             message: input
         })
     };


     //toogles the success in the state-alerts
     setAlertSuccess = ()=>{
         let newAlert ={...this.state.alerts ,success:!this.state.alerts.success};

         this.setState({
             alerts:newAlert
         })
     };

     //toogles the error in the state-alerts
     setAlertFailure = ()=>{
         let newAlert ={...this.state.alerts ,error:!this.state.alerts.error};

         this.setState({
             alerts:newAlert
         })
     };



     //function for submitting the feedback on click of send button
     onSubmit = () => {

         console.log('clicked');

         Firebase.submitPost(this.state.name, this.state.email, this.state.subject, this.state.message)
             .then(()=> {

                 // results in a successfull alert on a succces
                     this.setAlertSuccess();

                     // setting a timeout to diable the alert
                     setTimeout(() => {this.setAlertSuccess()}, 2000);
                 }
             )
             .catch(error => {

                 // results in a danger alert on a failure
                 this.setAlertFailure();

                 // setting a timeout to diable the alert
                 setTimeout(() => {this.setAlertFailure()}, 2000);
             })
     };


     render() {

         //setting up the success alert on state-alerts-success true
         let successAlert= this.state.alerts.success ? <div className="alert alert-success text-dark" role="alert">
             <strong>Thank You For The Feedback.</strong>
                    </div> :null;

         //setting up the danger alert on state-alerts-error true
          let failAlert=this.state.alerts.error ?   <div className="alert alert-danger text-dark" role="alert">
                 <strong>Something Went Wrong. Please Try Again</strong>
             </div> : null;



        return (
            <div>

                {successAlert}
                {failAlert}

                <form style={this.style} className="text-left">

                    {/*Name Input*/}
                    <div className="form-group">
                        <label>Your Name (required)</label>
                        <input value={this.state.name} onChange={this.onNameChange} type="text" className="form-control"/>
                    </div>

                    {/*Email Input*/}
                    <div className="form-group">
                        <label>Your Email (required)</label>
                        <input value={this.state.email} onChange={this.onEmailChange} type="email" className="form-control"/>
                    </div>

                    {/*Subject Input*/}
                    <div className="form-group">
                        <label>Subject (required)</label>
                        <input value={this.state.subject} onChange={this.onSubjectChange} type="text" className="form-control"/>
                    </div>

                    {/*Message Input*/}
                    <div className="form-group">
                        <label>Messsage (required)</label>
                        <textarea value={this.state.message} onChange={this.onMessageChange} type="text" className="form-control" rows="9"> </textarea>
                    </div>

                    {/*Submit button*/}
                    <div onClick={this.onSubmit} className="btn" >
                        <CustomButton  textcolor={'white'} bgcolor={'#075aae'} text={'send'}/>

                    </div>

                </form>
            </div>
        )
    }
 }

 export default form;