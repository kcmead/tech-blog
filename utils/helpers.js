// This module exports functions related to date and time formatting
module.exports = {
    // Format the time part of a given date using toLocaleTimeString
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
  
    // Format the date part of a given date using JavaScript Date methods
    format_date: (date) => {
      // Extract and format the month, date, and year components
      const formattedMonth = new Date(date).getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
      const formattedDay = new Date(date).getDate();
      const formattedYear = new Date(date).getFullYear();
  
      // Return the formatted date as a string
      return `${formattedMonth}/${formattedDay}/${formattedYear}`;
    },
  };