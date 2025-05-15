const DayPicker = () => {
    

    return(
      <select 
        
        className="custom-select form-select block w-full p-2 lg:p-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none pr-2 lg:pr-8" 
        defaultValue={'DEFAULT'} 
      >
        <option>Heute</option>
        <option>Gestern</option>
        <option>Morgen</option>
        <option>Übermorgen</option>
      </select>
    )
  } 
  
  export default DayPicker;