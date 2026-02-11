import { useState } from 'react'

function TimeEntryForm() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [timeOut, setTimeOut] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  
function handleSubmit(e) {
  e.preventDefault()

  const entry = {
    name,
    date,
    timeIn,
    timeOut,
    totalHours: calculateHours(timeIn, timeOut)
  }

  console.log(entry)

  setSuccessMessage('✅Time entry submitted successfully')

  setName('')
  setDate('')
  setTimeIn('')
  setTimeOut('')
}  

function calculateHours (start,end) {
  if (!start || !end) return 0

  const startTime = new Date(`2026-02-02T${start}`)
  const endTime = new Date(`2026-02-02T${end}`)

  const diffMs = endTime - startTime
  const diffHours = diffMs / (1000 * 60 * 60)

  return diffHours
}

  return (
    <section>
      <h2>Log Hours</h2>
      
      {successMessage && (
        <p style={{ color:'green', marginBottom: '1rem' }}>
          {successMessage}
        </p>
      )}

     <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Date</label>
          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Time In</label>
          <input 
            type="time"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)} 
          />
        </div>
        
         <div>
          <label>Time Out</label>
          <input 
            type="time"
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)} 
          />
        </div>


        <button type="submit">Add Time</button>
      </form>
    </section>
  ) 
}

export default TimeEntryForm