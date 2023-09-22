import { useState } from 'react'
import Button from '../Button'

const TipPercentage = ({setTipAmount}) => {
    const [hasBeenClicked1, setButtonClicked1] = useState(false)
    const [hasBeenClicked2, setButtonClicked2] = useState(false)
    const [hasBeenClicked3, setButtonClicked3] = useState(false) 
    const [hasBeenClicked4, setButtonClicked4] = useState(false)
    const [hasBeenClicked5, setButtonClicked5] = useState(false)
    


const handleClick1 = () => {
    setButtonClicked1(true) 
    setButtonClicked2(false) 
    setButtonClicked3(false) 
    setButtonClicked4(false) 
    setButtonClicked5(false)
    setTipAmount(0.05)
}


const handleClick2 = () => {
    setButtonClicked1(false) 
    setButtonClicked2(true) 
    setButtonClicked3(false) 
    setButtonClicked4(false) 
    setButtonClicked5(false)
    setTipAmount(0.1)
}

const handleClick3 = () => {
    setButtonClicked1(false) 
    setButtonClicked2(false) 
    setButtonClicked3(true) 
    setButtonClicked4(false) 
    setButtonClicked5(false)
    setTipAmount(0.15)  
}


const handleClick4 = () => {
    setButtonClicked1(false) 
    setButtonClicked2(false) 
    setButtonClicked3(false) 
    setButtonClicked4(true) 
    setButtonClicked5(false)
    setTipAmount(0.25)  
}


const handleClick5 = () => {
    setButtonClicked1(false) 
    setButtonClicked2(false) 
    setButtonClicked3(false) 
    setButtonClicked4(false) 
    setButtonClicked5(true)
    setTipAmount(0.5) 
}

    return (
        <div>
            <Button handleClick={handleClick1} hasBeenClicked={hasBeenClicked1} tip={0.05} text={"5%"}/>
            <Button handleClick={handleClick2} hasBeenClicked={hasBeenClicked2} tip={0.01} text={"10%"}/>
            <Button handleClick={handleClick3} hasBeenClicked={hasBeenClicked3} tip={0.15} text={"15%"}/>
            <Button handleClick={handleClick4} hasBeenClicked={hasBeenClicked4} tip={0.25} text={"25%"}/>
            <Button handleClick={handleClick5} hasBeenClicked={hasBeenClicked5} tip={0.5} text={"50%"}/>
        </div>
    )
}

export default TipPercentage