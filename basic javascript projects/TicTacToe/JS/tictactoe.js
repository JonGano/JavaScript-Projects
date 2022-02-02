//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXorO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //the .some method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/ex.jfif")';
            //active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/oh.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'x' change to 'O'.
            activePlayer = 'O';
            //If active player is anything other that 'X'
        } else {
            //Change the active player to 'X';
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/move2.wav');
        //This condition checks to see if it is computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before computer places imageand enables click
            setTimeout(function() { computersTurn(); }, 1000)
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXorO(pickASquare)) {
                //This line calls the funtion.
                placeXorO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            }
        }
    }
}
//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    //X O, 1, 2 condition
    if       (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3, 4, 5 condition.
    else if  (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition
    else if  (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition
    else if  (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition
    else if  (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition
    else if  (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition
    else if  (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0, 4, 8 condition
    else if  (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition
    else if  (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition
    else if  (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition
    else if  (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition
    else if  (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition
    else if  (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O 2, 5, 8 condition
    else if  (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition
    else if  (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition
    else if  (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for tie. If none of the above conditions register and 9
    //squares are selected
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/wahwahwah.wav');
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 1000);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //If the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {return true}
    }
}
     //This function makes our body element temporarily unclickable.
     function disableClick() {
        //This makes our body unclickable.
       body.style.pointerEvents = 'none';
       //This makes our body clickable again after 1 second.
       setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
    //Ths function takes a string parameter of the path you set earlier for
    //placement sound (./media.place.mp3)
        function audio(audioURL) {
        //we create a new audio oject and we pass the path as a parameter.
        let audio = new Audio(audioURL);
        //play method plays our audio sound
        audio.play();
}
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our html canvas element.
        const canvas = document.getElementById('win-lines')
        //This line gives us access to methods and properties to use on canvas.
        const c = canvas.getContext('2d');
        //This line indicates where the start of a lines x axis is.
        let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of the lines y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;
    
    //This function interacts with the canvas
    function animateLineDrawing() {
        //This variable creats a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608)
        //This method starts a new path.
        c.beginPath();
        //This method moves us to a starting point for our line.
        c.moveTo(x1, y1)
        //This method indicates the end point in our line.
        c.lineTo(x, y)
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line.
        c.strokeStyle = ' rgba(70, 255, 33, .8)';
        //This method draws everything we laid out above
        c.stroke();
        //this condition checks if weve reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x point.
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point.
            if (y < y2) { y += 10; }
            //this condition cancels our animation loop
            //if we've reached the end points.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >=y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line stops our animation loop.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
     //This line disallows clicking while the win sound is playing
     disableClick();
     //This line plays the win sounds.
     audio('media/win.wav');
     //This line calls our main animation loop.
     animateLineDrawing();
     //This line waits 1 second. Then, clears canvas,
     setTimeout(function () {clear(); resetGame(); }, 1000);
}
    
     //this function resets the game in the event of a tie or win.
    function resetGame() {
         //This for loop iterates through each HTML square element
        for (let i = 0; i < 9; i++) {
             //This variable gets the html element of i.
             let square = document.getElementById(String(i))
             //This removes our elements backgroundImage
             square.style.backgroundImage = ''
        }
        selectedSquares = [];
} 

