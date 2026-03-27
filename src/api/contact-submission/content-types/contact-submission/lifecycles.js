'use strict';

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    const now = new Date();
    
    // Format date as DD/MM/YYYY
    data.date = now.toLocaleDateString('en-GB');
    
    // Format time as HH:MM:SS
    data.time = now.toLocaleTimeString('en-GB');
  },
};
