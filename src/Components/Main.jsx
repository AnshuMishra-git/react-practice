import React from 'react'
import First from './First'
import dummyData from '../FakeData/dummyData'

export default function Main() {
    let obj = {
        name: "Mangilal",
        age: 30
    }
    return (
        <div>
            <First users={dummyData} myData={obj} />
        </div>
    )
}



// Step
// 1. Data Import Karaya
// 2. Parent se Chaild Component me As props Pass kr diya
// 3.
