import React, { Component } from 'react'
import dummyData from '../FakeData/dummyData'

// let react={
//     component:"dergerg"
// }
export default class BasicJs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        }
    }
    // jb hum log class banate tb contructor call hota h
    // Constructor  then -> Component Did Mount Function  
    // Contrcutor State ( initial Value Set karate h )
    // Component Did Mount all Function andr sare function call

    // allConditons() {
    //     // If 
    //     // Else if
    //     // Else
    //     // Ternarory operator

    //     // if cond
    //     // if => True  ( True  || Not Zero)
    //     // if => False ( False  || 0);
    //     // if(1){
    //     //     console.log("IF Conditions True")
    //     // } else console.log("in Else")
    //     // if(true){
    //     //     console.log("IF Conditions True 1")
    //     // }
    //     // if(0){  // Cond When if Will not work out 
    //     //     console.log("IN Else ")
    //     // }
    //     // if(false){
    //     //     console.log("In Else False")
    //     // }
    //     // if(0){
    //     //     console.log("IF Conditions True")
    //     // }
    //     // if(!1){
    //     //     console.log("==== 1 ===")
    //     // }
    //     // else{
    //     //     console.log("in Else")
    //     // } 

    //     // jinta if hoga wo hr bar check kiya jayega 
    //     let today = "sunday";
    //     if (today == "friday") {
    //         console.log(" friday WeekEnd")
    //     }
    //     else if (today == "saturday") {
    //         console.log(" saturday WeekEnd")
    //     }
    //     else if (today == "sunday") {
    //         console.log("Sunday WeekEnd")
    //     }
    //     else console.log("Other Day")
    //     // today == "sunday" ? console.log("WeakEnd") : console.log("WeaK Days");
    // }
    // nextCond() {
    //     // console.log("Next Cond function")
    //     // Loop - Tb use krna h jb aap same kam ko multiple time karoge

    //     // let i= 2 ; // intialize first value
    //     // i<=100 // Condtions
    //     // i=i+1 // increment/decrement


    //     // Foor Loop can use in Loop

    //     // Map Function , Foreach Function Both Worked on Array


    //     // for(let i=10;i!=0;i=i-2){
    //     //     console.log(i)
    //     // }
    //     // a[0]
    //     // let a=[1,2,3,4,5]

    //     // a.forEach((val,i)=>{
    //     //     // a[i] == val in ForEarch 
    //     //     console.log("Val====>",val,"i===>",i)
    //     // });

    //     // a.map((val,i)=>{
    //     //     // a[i] == val in ForEarch 
    //     //     console.log("MAP VAL====>",val,"i===>",i)
    //     // });


    //     // console.log("index",a[2]);

    //     // for(let i=0;i<a.length;i++){
    //     //     console.log(">>",a[i])
    //     // }

    //     // for in loop

    //     // let data={
    //     //     name:"Anshu",
    //     //     age:24,
    //     //     address:"Deoria",
    //     //     isMaried:false
    //     // }
    //     // console.log("obj",obj, obj.age);

    //     //Array -> only Same data type
    //     //  int ,string, bool, array , obj ,float 
    //     // let a=[
    //     //     {
    //     //         name:"Anshu",
    //     //         age:24,
    //     //         address:"Deoria",
    //     //         isMaried:false
    //     //     },
    //     //     {
    //     //         name:"Mangilal",
    //     //         age:34,
    //     //         address:"Ahmedabad",
    //     //         isMaried:true
    //     //     }
    //     // ]
    //     // console.log("A Data==>",a[0].address)
    //     // console.log("A Data==>",a[1].address)
    //     // Print Every Details Using FOr Each Loop

    //     // for  in Loop we only use for iterating Objects 
    //     // const person = {
    //     //     name:"Mangilal",
    //     //     age:34,
    //     //     address:"Ahmedabad",
    //     //     isMaried:true
    //     // };

    //     // for (let i in person) {
    //     // console.log("X=>>",person[i])
    //     // }
    //     //  10<10 last cond checked;
    //     // let i=100;
    //     // while (i < 10) {
    //     //     console.log("i===>>",i)
    //     //     i++;
    //     //     console.log("I>",i)
    //     // }

    //     // Array Destrctruing

    //     // const arr = ['anshu','mangilal','jay','df'];
    //     // const [anshu,mangilal,shani,four] = arr;
    //     // console.log("arr===>>>",arr[0],arr[1],arr[2]);
    //     // console.log("val====>>>",anshu,mangilal,shani,four);
    //     // let gautam =arr[2];

    //     // Obj Destrctruing

    //     // const person = {
    //     //     name:"Mangilal",
    //     //     age:34,
    //     //     address:"Ahmedabad",
    //     //     isMaried:true
    //     // };
    //     // const {name,age,address,isMaried}= person;

    //     // console.log("name",name,person.name);
    //     // console.log("age",age,person.age);
    //     // console.log("address",address,person.address);
    //     // console.log("isMaried",isMaried,person.isMaried);

    //     // const arr=["22/02/1999","1"];
    //     // const [dob,id]=arr;

    //     // const person1= {
    //     //     dob:"22/02/1999",
    //     //     id:"1"
    //     // }
    //     // const{id,dob} = person1;
    //     // console.log("id",id,"dob",dob);
    // }

    ageVote() {
        // console.log("You are eligible for vote test")
        // if(18) (expression) => Calcualte  
        let age = 90;
        if (age == 18) document.write("<h1>You are eligible now  vote</h1>");
        else if (age < 65 && age > 19) document.write("<h1>You Can Vote</h1>");
        else document.write("<h1>You are not eligible not for vote</h1>");
    }

    forloop() {
        let a = ['Test1', 'test2', 'test3'];
        for (let i = 0; i < a.length; i++) {
            document.write(">>", "", a[i])
        }
        //array index always start from 0
    }

    imageFunction() {
        let myImage = document.querySelector('img');
        myImage.onclick = function () {
            let mySrc = myImage.getAttribute('src');
            if (mySrc === 'images/firefox-icon.png') {
                myImage.setAttribute('src', 'images/firefox2.png');
            } else {
                myImage.setAttribute('src', 'images/firefox-icon.png');
            }
        }
    }


    yearsFunction() {
        let years = dummyData
        // // console.log("Length===>", years.length)
        for (let i = years.length - 10; i < years.length; i++) {
            // console.log("Data===>", years[i].id, years[i].rating.count);
        }
    }

    destructre() {
        const foo = dummyData;
        const [one, two, three, four, five, six, seven] = foo;
        // document.write("<br/>", "<br/>", green7.description);
    }

    seprate() {
        // let message, notmessage;
        let [message, notmessage] = [1000, 2000];
        // console.log("Destructure ===>>>", message, notmessage);
        // document.write("<br/>", message); // 1
        // document.write("<br/>", notmessage);
    }

    arrayFunction() {
        let a = 1;
        let b = 3;

        [a, b] = [b, a];
        // document.write(a); // 3
        // document.write(b); // 1

        const arr = [1, 2, 3];
        [arr[2], arr[1]] = [arr[1], arr[2]];
        // document.write(arr); // [1,3,2]
    }


    // const person = {
    //     name:"Mangilal",
    //     age:34,
    //     address:"Ahmedabad",
    //     isMaried:true
    // };
    // const {name,age,address,isMaried}= person;

    // destructureFunction() {
    //     const persondata = dummyData
    //     for (let i = 10; i < persondata.length; i++) {
    //         document.write("<br/>", "<br/>", persondata[i].id, "<br/>", persondata[i].description, "<br/>", persondata[i].price)
    //     };

    //     // document.write("<br/>", "<br/>","<br/>", years[1].id, "<br/>", years[1].title, "<br/>", years[1].image, "<br/>", years[1].rating);
    //     // console.log(years[0])
    // }


    foreachfunction() {
        let text = "";
        const fruits = dummyData;
        fruits.forEach(myFunction);

        // document.getElementById("demo").innerHTML = text;

        function myFunction(item, index) {
            // console.log("item", item);
            // console.log("index", index + 1);
            // text += index + ": " + dummyData[0] + "<br>";
        }
    }


    // whileFunction() {
    //     let i=100;
    //     while (i > 10) {
    //         document.write(i)
    //         // console.log("i===>>",i)
    //         i++;
    //         document.write(i)
    //         // console.log("I>",i)
    //     }
    // }



    forcondition() {
        for (let i = 0; i < 4; i++) {
            // document.write(i)
            console.log("i===>", i)
        }
    }


    ternaryOperator() {
        //  hardwork == "honesty is hardwork" ? console.log("WeakEnd") : console.log("WeaK Days");
        let marriageage = 21;
        marriageage <= 21 ? document.write("<br/>", "Married") : document.write("<br/>", "Un Married");
    }

    urlparameter() {
        function parseProtocol(url) {
            const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
            if (!parsedURL) {
                return false;
            }
            document.write(parsedURL);
            // console.log(parsedURL);
            // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
            // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

            const [, protocol, fullhost, fullpath] = parsedURL;
            return protocol;
        }

        document.write(parseProtocol("<br/>", "<br/>", 'http://localhost:3000/'))
        // "https"
    }

    componentDidMount() {
        // this.allConditons();
        // this.newcondition1();
        // this.imageFunction();
        this.arrayFunction();
        this.urlparameter();
        this.seprate();
        this.ternaryOperator();
        this.destructre();
        this.forcondition();
        this.foreachfunction();
        this.ageVote();
        this.forloop();
        this.yearsFunction();
        // this.destructureFunction();
        // this.forcondition();
        // console.log("Browser Widht", this.newcondition())
        // console.log("Dummy Data==>", dummyData)
    }


    render() {
        return (
            <div>
                <h1> Condition and Iteration </h1>
                <div id="demo"></div>

                <img style={{ width: 200 }} src="https://images.unsplash.com/photo-1561016444-14f747499547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80" />
            </div>
        )
    }
}