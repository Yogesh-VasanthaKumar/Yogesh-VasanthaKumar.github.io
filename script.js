const monthSelect = document.getElementById('month');
        const yearInput = document.getElementById('year');
        const customDateInput = document.getElementById('customDate');
        const calendarContainer = document.getElementById('calendar');

function generateCalendar(month, year) {
            calendarContainer.innerHTML = ''; 
const daysInMonth = new Date(year, month, 0).getDate();
           

            for (let i = 1; i <= daysInMonth; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.textContent = i;

                calendarContainer.appendChild(dayDiv);
            }
   const today = new Date();
            const currentDate = new Date(year, month - 1, 10); // Set to the 10th day of the selected month
            
            const selectedDate = customDateInput.value ? new Date(customDateInput.value) : today;
            
            if (selectedDate.getFullYear() === currentDate.getFullYear() && selectedDate.getMonth() === currentDate.getMonth()) {

                const selectedDay = selectedDate.getDate();
                
                const selectedDayDiv = calendarContainer.querySelector(`.day:nth-child(${selectedDay})`);
                
                selectedDayDiv.classList.add('highlight');
            }
        }

monthSelect.addEventListener('change', () => {
            const selectedMonth = monthSelect.value;
            const selectedYear = yearInput.value || new Date().getFullYear();
            generateCalendar(selectedMonth, selectedYear);
        });
 yearInput.addEventListener('input', () => {
            const selectedMonth = monthSelect.value || new Date().getMonth() + 1;
            const selectedYear = yearInput.value;
            generateCalendar(selectedMonth, selectedYear);
        });

customDateInput.addEventListener('change', () => {
            const selectedDate = customDateInput.value;
            generateCalendar(new Date(selectedDate).getMonth() + 1, new Date(selectedDate).getFullYear());
        });

const initialMonth = new Date().getMonth() + 1;
       
        const initialYear = new Date().getFullYear();
        
        monthSelect.value = initialMonth.toString();
        yearInput.value = initialYear.toString();
        generateCalendar(initialMonth, initialYear);
