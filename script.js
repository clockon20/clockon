        // Function to create and position dots for seconds
        function createSecondDots() {
            const clock = document.querySelector('.clock');
            const radius = clock.clientWidth / 2 - 20; // Adjusted for dot size and spacing
            const centerX = clock.clientWidth / 2;
            const centerY = clock.clientHeight / 2;

            for (let s = 1; s <= 60; s++) {
                const angle = (s - 15) * 6; // Calculate angle for each second (360 degrees / 60 seconds = 6 degrees per second)
                const radians = angle * Math.PI / 180;
                const x = centerX + radius * Math.cos(radians);
                const y = centerY + radius * Math.sin(radians);

                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.style.top = y + 'px';
                dot.style.left = x + 'px';

                clock.appendChild(dot);
            }
        }

        // Function to create and position hour numbers
        function createHourNumbers() {
            const clock = document.querySelector('.clock');
            const radius = clock.clientWidth / 2 - 40; // Adjusted for number positioning
            const centerX = clock.clientWidth / 2;
            const centerY = clock.clientHeight / 2;

            for (let h = 1; h <= 12; h++) {
                const angle = (h - 3) * 30; // Calculate angle for each hour (360 degrees / 12 hours = 30 degrees per hour)
                const radians = angle * Math.PI / 180;
                const x = centerX + radius * Math.cos(radians);
                const y = centerY + radius * Math.sin(radians);

                const number = document.createElement('div');
                number.className = 'hour-number';
                number.style.position = 'absolute';
                number.style.top = y + 'px';
                number.style.left = x + 'px';
                number.textContent = h;

                clock.appendChild(number);
            }
        }

        // Update the clock every second
        function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Calculate angles
            const hourAngle = (hours % 12) * 30 + minutes / 2; // Each hour = 30 degrees, each minute = 0.5 degrees
            const minuteAngle = minutes * 6; // Each minute = 6 degrees
            const secondAngle = seconds * 6; // Each second = 6 degrees

            // Apply transformations
            document.getElementById('hour-hand').style.transform = `rotate(${hourAngle}deg)`;
            document.getElementById('minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
            document.getElementById('second-hand').style.transform = `rotate(${secondAngle}deg)`;
        }

        // Initialize the clock
        createSecondDots();
        createHourNumbers();
        setInterval(updateClock, 1000);
        updateClock(); // Update immediately
    