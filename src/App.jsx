import { useEffect, useState } from 'react'
import TextBox from './Components/TextBox'
import Button from './Components/Button'
import './App.css'
import TipPercentage from './Components/TipPercentage'
import React from 'react'

function App() {
  const refresh = () => {
    window.location.reload(false)}
  const [billAmount, setBillAmount] = useState(0)
  const [peopleAmount, setPeopleAmount] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [theTipToBeLeft, setTheTipToBeLeft] = useState(0)
  const [theTipToBeLeftPerPerson, setTheTipToBeLeftPerPerson] = useState(0)

const handleBillAmount = (e) => {
  setBillAmount(e.target.value)
  console.log(e.target.value)
}

const handlePeopleAmount = (e) => {
  setPeopleAmount(e.target.value)
  console.log(e.target.value)
}

useEffect(() => {
  setTheTipToBeLeft(billAmount * tipAmount)
  setTheTipToBeLeftPerPerson((billAmount * tipAmount) / peopleAmount)
},[tipAmount]
)

  return (
    <div className='Wholething'>
      <div className = "BackDisplay">
        <div className = "leftCardSide">
          <h1>The Tip Calculator</h1>
          <TextBox className = "text" text ={"Bill total "} handleInput={handleBillAmount}/>
          <TextBox text ={"Number of People "} handleInput={handlePeopleAmount} />
          <TipPercentage setTipAmount={setTipAmount}/>
        </div>
        <div className="rightCardSide">
          <p className='tipinTotal'>Tip per person will be</p>
          <p className='tipinTotal'>£{theTipToBeLeftPerPerson > 0 ? theTipToBeLeftPerPerson.toFixed(2): 0}</p>
          <p className='tipinTotal'>The total amount of the tip will be</p>
          <p className='tipinTotal'>£{theTipToBeLeft.toFixed(2)}</p>
          <p className='tipinTotal'>Total bill will be</p>
          <p className='tipinTotal'>£{(parseFloat(billAmount) + parseFloat(theTipToBeLeft)).toFixed(2)}</p>
          <button className="resetButton"onClick ={refresh}>Reset</button>
        </div>
        </div>
      </div>
  
  )
}


export default App


