### Pseudocode for Alarm Clock

## Display day, month and year
  1. BEGIN
  2. use new Date () method
  3. create VARIABLE for day
  4. create VARIABLE for month
  5. CONCATENATE '1' for the month variable
  6. create VARIABLE for year
  7. CONCATENATE the values of day, month and year to display on page
  8. CREATE new variable for the concatenated values
  9. END
  
  ## Display hour, minutes and seconds
  1. BEGIN
  2. use new Date () method
  3. create VARIABLE for Hour
  4. CONDITIONAL: if Hour < 10, CONCANTENATE "0"
  5. create VARIABLE for Minutes
  6. CONDITIONAL: if minutes < 10, CONCANTENATE "0"
  7. create VARIABLE for Seconds
  8. CONDITIONAL if seconds < 10, CONCATENATE "0"
  9. CONCATENATE the values of, Hour, minutes and seconds to display on page
  10. create new values for the concatenated values
  11. END

  ## Input:user select alarm time
  1. BEGIN
  2. create VARIABLE for selected user time
  3. GET value from HTML input
  4. END

  ## Trigger Alarm
  1.  BEGIN
  2.  CONDITIONAL if variable(user selected time)===variable(concatenated values of hour,minutes and seconds) then alert()
  3.  END
  
  ## Cancel Alarm
  1. BEGIN
  2. ADD Eventlistener(click) for button in HTML
  3. CONDITIONAL: if button is clicked display no message or empty string
  4. END

  ## Update time
  1. BEGIN
  2. use setInterval(function, 1000) to updated clock every second
  3. END
  
 
  
