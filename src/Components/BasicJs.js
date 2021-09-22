import React, { Component } from 'react'

// let react={
//     component:"dergerg"
// }
export default class BasicJs extends Component {
    constructor(props){
        super(props);
        this.state={
            val:0  
        }
    }
    // jb hum log class banate tb contructor call hota h
    // Constructor  then -> Component Did Mount Function  
    // Contrcutor State ( initial Value Set karate h )
    // Component Did Mount all Function andr sare function call

    allConditons(){ 
        // If 
        // Else if
        // Else
        // Ternarory operator

        // if cond
        // if => True  ( True  || Not Zero)
        // if => False ( False  || 0);
        // if(1){
        //     console.log("IF Conditions True")
        // } else console.log("in Else")
        // if(true){
        //     console.log("IF Conditions True 1")
        // }
        // if(0){  // Cond When if Will not work out 
        //     console.log("IN Else ")
        // }
        // if(false){
        //     console.log("In Else False")
        // }
        // if(0){
        //     console.log("IF Conditions True")
        // }
        // if(!1){
        //     console.log("==== 1 ===")
        // }
        // else{
        //     console.log("in Else")
        // } 

        // jinta if hoga wo hr bar check kiya jayega 
        // if(today == "friday"){
        //     console.log(" friday WeekEnd")
        // }
        // else if(today == "saturday"){
        //     console.log(" saturday WeekEnd")
        // }
        // else if(today == "sunday"){
        //     console.log("Sunday WeekEnd")
        // }
        // else console.log("Other Day")
        // let today ="sunday";
        // today == "sunday" ? console.log("WeakEnd") : console.log("WeaK Days");
    }
    nextCond(){
        // console.log("Next Cond function")
        // Loop - Tb use krna h jb aap same kam ko multiple time karoge

        // let i= 2 ; // intialize first value
        // i<=100 // Condtions
        // i=i+1 // increment/decrement


        // Foor Loop can use in Loop

        // Map Function , Foreach Function Both Worked on Array
    

        // for(let i=10;i!=0;i=i-2){
        //     console.log(i)
        // }
        // a[0]
        // let a=[1,2,3,4,5]
        
        // a.forEach((val,i)=>{
        //     // a[i] == val in ForEarch 
        //     console.log("Val====>",val,"i===>",i)
        // });

        // a.map((val,i)=>{
        //     // a[i] == val in ForEarch 
        //     console.log("MAP VAL====>",val,"i===>",i)
        // });


        // console.log("index",a[2]);

        // for(let i=0;i<a.length;i++){
        //     console.log(">>",a[i])
        // }

        // for in loop

        // let data={
        //     name:"Anshu",
        //     age:24,
        //     address:"Deoria",
        //     isMaried:false
        // }
        // console.log("obj",obj, obj.age);

        //Array -> only Same data type
        //  int ,string, bool, array , obj ,float 
        // let a=[
        //     {
        //         name:"Anshu",
        //         age:24,
        //         address:"Deoria",
        //         isMaried:false
        //     },
        //     {
        //         name:"Mangilal",
        //         age:34,
        //         address:"Ahmedabad",
        //         isMaried:true
        //     }
        // ]
        // console.log("A Data==>",a[0].address)
        // console.log("A Data==>",a[1].address)
        // Print Every Details Using FOr Each Loop

        // for  in Loop we only use for iterating Objects 
        // const person = {
        //     name:"Mangilal",
        //     age:34,
        //     address:"Ahmedabad",
        //     isMaried:true
        // };

        // for (let i in person) {
        // console.log("X=>>",person[i])
        // }
        //  10<10 last cond checked;
        // let i=100;
        // while (i < 10) {
        //     console.log("i===>>",i)
        //     i++;
        //     console.log("I>",i)
        // }

        // Array Destrctruing

        // const arr = ['anshu','mangilal','jay','df'];
        // const [anshu,mangilal,shani,four] = arr;
        // console.log("arr===>>>",arr[0],arr[1],arr[2]);
        // console.log("val====>>>",anshu,mangilal,shani,four);
        // let gautam =arr[2];

        // Obj Destrctruing

        // const person = {
        //     name:"Mangilal",
        //     age:34,
        //     address:"Ahmedabad",
        //     isMaried:true
        // };
        // const {name,age,address,isMaried}= person;

        // console.log("name",name,person.name);
        // console.log("age",age,person.age);
        // console.log("address",address,person.address);
        // console.log("isMaried",isMaried,person.isMaried);

        // const arr=["22/02/1999","1"];
        // const [dob,id]=arr;

        // const person1= {
        //     dob:"22/02/1999",
        //     id:"1"
        // }
        // const{id,dob} = person1;
        // console.log("id",id,"dob",dob);
    }

    componentDidMount(){
        // this.allConditons();
        this.nextCond();
    }


    render() {
        return (
            <div>
               <h1> Condition and Iteration </h1>
            </div>
        )
    }
}
