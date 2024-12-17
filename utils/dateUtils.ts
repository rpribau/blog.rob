export function formatDate(dateString: string): string {
  
    if (!dateString) {
      console.error('Empty date string provided');
      return 'No date';
    }
  
    // Try parsing the date string directly
    let date = new Date(dateString);
  
    // If parsing fails, try to handle "YYYY-MM-DD" format manually
    if (isNaN(date.getTime())) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const [year, month, day] = parts.map(Number);
        // Note: month is 0-indexed in JavaScript Date
        date = new Date(year, month - 1, day);
      }
    }
  
    if (isNaN(date.getTime())) {
      console.error(`Invalid date: ${dateString}`);
      return 'Invalid Date';
    }
  
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    console.log(`Formatted date: ${formattedDate}`); // Debug log
  
    return formattedDate;
  }
  
  