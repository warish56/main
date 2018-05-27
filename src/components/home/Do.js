import React from "react";
import Docard from "../../elements/cards/do_Card";
import Advice from "../../elements/cards/advice";





class todo extends  React.Component{
    state={

        cardRow:[
            {
                head:"Workshops",
                text:"Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."
            },

            {
                head:"Trainings",
                text:"Trainings span from four to six weeks and help bridge the gap between the University and Industry. Students get to learn something different to gain an extra advantage above others."
            },

            {
                head:"Incubation",
                text:"Alien Brains is proud as well as happy to announce that we will be providing incubation support to companies and fellow start-ups in terms of office space and technical guidance."
            }
        ]
    };


    //cards Database
      cards=[


        {
            head:"Workshops",
            text:"Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."
        },

        {
            head:"Trainings",
            text:"Trainings span from four to six weeks and help bridge the gap between the University and Industry. Students get to learn something different to gain an extra advantage above others."
        },

        {
            head:"Incubation",
            text:"Alien Brains is proud as well as happy to announce that we will be providing incubation support to companies and fellow start-ups in terms of office space and technical guidance."
        },

        {
            head:"Sharper",
            text:"Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."
        },

        {
            head:"Stronger",
            text:"Workshops are delivered by Technology Experts on various themes to help the participants get an overview of the subject. It is a bridge to proceed to the advanced level."
        },



    ];


      index=0;


      //function for handling next set of cards by changing the cardRow in State
       nextHandler = ()=>{

        let newCards=[];
            this.cards.map((item,index) =>{
           index >=2 ? newCards.push( {head:item.head,text:item.text}) : null ;
        });

        this.setState({
            cardRow:newCards
        })
        this.index=2;

    };

     //function for handling previous set of cards  by changing the cardRow in State
      prevHandler = ()=>{

        let newCards=[];
        this.cards.map((item,index) =>{
            index <=2 ? newCards.push( {head:item.head,text:item.text}) : null ;
        });

        this.setState({
            cardRow:newCards
        })
       this.index=0;

    };






    render() {

        let card=[];
        //mapping the cards  from cardRow into a new variable card
        this.state.cardRow.map((item,index) =>{
             card.push(


                    <Docard key={index}
                        head={item.head}
                        text={item.text}
                    />



            )  ;
        });

        return (
            <div className="container-fluid text-center p-2">
                {/*Text starts*/}
                <div className="p-3 ">
                    <div className="col-xl-5 m-auto">
                        <p className="h3 p-3"> What we do </p>
                        <p className="text-muted">
                            {" "}
                            We make your journey towards your destination better. Life is
                        </p>
                    </div>
                </div>
                {/*Text ends*/}

                {/*Buttons Section for left and right movement of cards starts*/}
                <div className="d-flex flex-row  justify-content-center py-2">
                    <span  onClick={this.prevHandler} style={{fontSize: '40px', color: this.index === 0 ?'grey':'#4d4389', cursor:'pointer'}} className="fa fa-chevron-left align-self-start d-none d-sm-block py-3 px-5">
                    </span>
                    <span onClick={this.nextHandler} style={{fontSize: '40px', color: this.index === 2 ? 'grey':'#4d4389', cursor:'pointer'}} className="fa fa-chevron-right align-self-end d-none d-sm-block py-3 px-5">
                    </span>
                </div>
                {/*Buttons Section for left and right movement of cards ends*/}


                {/*Cards Section*/}

                <div className="container align-self-center  p-0">
                    <div className="card-deck  text-left text-white   ">

                        {/*Displaying the current set of cards in cardRow of state*/}
                        {card}

                    </div>

                        <div className="row">
                            {/*Card-1*/}
                            <div className="col-sm-4 text-left">
                            <Advice
                                foot={"Contact Us"}
                                head={"Need advice?"}
                                text1={
                                    "Muddled? Addled? Puzzled? In simple words, confused?Just Relax."
                                }
                                text2={
                                    "We, at Alien Brains, are ever-ready to help you with your doubts. Be it anything from technical to career, don’t hesitate to approach us."
                                }
                            />
                            </div>

                          <div className="col-sm-8 text-left ">
                            {/*card-2*/}

                            <Advice
                                img={true}
                                foot={"Read More"}
                                head={" Our upcoming seminars and Workshops"}
                                teaxt1={"Our upcoming seminars and Workshops"}
                                text2={
                                    "To quench your thirst for knowledge and technology we have a series of workshops and seminars lined up for you."
                                }
                            />
                           </div>
                        </div>

                </div>


            </div>
        )
    }
}
export default todo;
