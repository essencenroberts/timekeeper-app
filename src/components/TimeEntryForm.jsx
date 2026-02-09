function TimeEntryForm() {
  return (
    <section>
     <h2>Log Hours</h2>
      
     <form>
        <div>
          <label>Employee Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Date</label>
          <input type="date" />
        </div>

        <div>
          <label>Hours Worked</label>
          <input type="number" />
        </div>

        <button type="submit">Add Time</button>
      </form>
    </section>
  ) 
}

export default TimeEntryForm