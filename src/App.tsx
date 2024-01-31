import { useEffect, useState } from 'react'
import './App.css'

import IconIncomplete from './assets/icons/incomplete.png'
import IconPending from './assets/icons/pending.png'
import IconComplete from './assets/icons/complete.png'

const STEPS: string[] = [
  "Permintaan Diterima",
  "Permintaan Diproses",
  "Pengaktifan Tagihan",
  "Tagihan Siap Dibayarkan",
  // Add more steps here
]

const DELAY_MS: number = 1500
const INITIAL_STEP: number = 0

function App() {
  const [activeStep, setActiveStep] = useState<number>(INITIAL_STEP)

  const incrementStep = () => {
    setActiveStep(prevStep => {
      if (prevStep === STEPS.length) return 0
      return prevStep + 1
    })
  }

  useEffect(() => {
    setInterval(() => incrementStep(), DELAY_MS)
  }, [])

  return (
    <main id='loader-stepper'>
      <h1 className='title'>Mohon Menunggu</h1>
      <div className="steps">
        {STEPS.map((step, index) => (
          <div
            key={index}
            className={`step`}
          >
            <div className={`step-indicator ${index <= activeStep ? 'active' : ''}`} />
            <div className="step-text">{step}</div>
            <div className={`
                step-status ${index === activeStep ? 'pending' :
                index > activeStep ? 'incomplete' :
                  index < activeStep ? 'complete' : ''}
            `}>
              <img src={IconPending} alt="pending" />
              <img src={IconIncomplete} alt="incomplete" />
              <img src={IconComplete} alt="complete" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App