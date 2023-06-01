function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
  
    // Add leading zeros to minutes and seconds
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
  
    var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = time;
  
    // Update the clock every second
    setTimeout(updateTime, 1000);
  }
  
  updateTime();
  