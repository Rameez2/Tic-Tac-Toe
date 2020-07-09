count = 1



document.getElementById('firstname1').addEventListener('keypress', (e) => {
    var players = document.getElementById('players')
    if (event.keyCode === 13) {
        players.innerHTML = firstname1.value+" Turn"
    }
})

function fill(btn) {

    var players = document.getElementById('players')
    var btn1 = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    var btn6 = document.getElementById('btn6')
    var btn7 = document.getElementById('btn7')
    var btn8 = document.getElementById('btn8')
    var btn9 = document.getElementById('btn9')

    if (count % 2 == 0) {
        players.innerHTML = firstname1.value+" Turn"
        document.getElementById(btn.id).disabled = true
        document.getElementById(btn.id).innerHTML = "X"
        document.getElementById(btn.id).style.color = "#50ff86"
        count++
        console.log(count)
    }
    else if (count % 2 !== 0) {
        players.innerHTML = firstname2.value+" Turn"
        document.getElementById(btn.id).disabled = true
        document.getElementById(btn.id).innerHTML = "O"
        document.getElementById(btn.id).style.color = "#50ff86"
        count++
        console.log(count)
    }

    winner()


}

//                  RESET 

function reset_game() {

    var replay = document.getElementById('reset')
    count = 1

    btn1.innerHTML = ""
    btn1.disabled = false

    btn2.innerHTML = ""
    btn2.disabled = false

    btn3.innerHTML = ""
    btn3.disabled = false

    btn4.innerHTML = ""
    btn4.disabled = false

    btn5.innerHTML = ""
    btn5.disabled = false

    btn6.innerHTML = ""
    btn6.disabled = false

    btn7.innerHTML = ""
    btn7.disabled = false

    btn8.innerHTML = ""
    btn8.disabled = false

    btn9.innerHTML = ""
    btn9.disabled = false


}



// WINNER 


function winner() {


    if (btn1.innerHTML !== "" && btn1.innerHTML == "X" && btn1.innerHTML === btn2.innerHTML && btn1.innerHTML === btn3.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    } if (btn4.innerHTML !== "" && btn4.innerHTML == "X" && btn4.innerHTML === btn5.innerHTML && btn4.innerHTML === btn6.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    } if (btn7.innerHTML !== "" && btn7.innerHTML == "X" && btn7.innerHTML === btn8.innerHTML && btn7.innerHTML === btn9.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    }

    if (btn1.innerHTML !== "" && btn1.innerHTML == "X" && btn1.innerHTML === btn4.innerHTML && btn1.innerHTML === btn7.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    } if (btn2.innerHTML !== "" && btn2.innerHTML == "X" && btn2.innerHTML === btn5.innerHTML && btn2.innerHTML === btn8.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    } if (btn3.innerHTML !== "" && btn3.innerHTML == "X" && btn3.innerHTML === btn6.innerHTML && btn3.innerHTML === btn9.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    }

    if (btn1.innerHTML !== "" && btn1.innerHTML == "X" && btn1.innerHTML === btn5.innerHTML && btn1.innerHTML === btn9.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    } if (btn3.innerHTML !== "" && btn3.innerHTML == "X" && btn3.innerHTML === btn5.innerHTML && btn3.innerHTML === btn7.innerHTML) {
        alert(firstname2.value + " is The Winner")
        reset_game()
    }


    if (btn1.innerHTML !== "" && btn1.innerHTML == "O" && btn1.innerHTML === btn2.innerHTML && btn1.innerHTML === btn3.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    } if (btn4.innerHTML !== "" && btn4.innerHTML == "O" && btn4.innerHTML === btn5.innerHTML && btn4.innerHTML === btn6.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    } if (btn7.innerHTML !== "" && btn7.innerHTML == "O" && btn7.innerHTML === btn8.innerHTML && btn7.innerHTML === btn9.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    }

    if (btn1.innerHTML !== "" && btn1.innerHTML == "O" && btn1.innerHTML === btn4.innerHTML && btn1.innerHTML === btn7.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    } if (btn2.innerHTML !== "" && btn2.innerHTML == "O" && btn2.innerHTML === btn5.innerHTML && btn2.innerHTML === btn8.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    } if (btn3.innerHTML !== "" && btn3.innerHTML == "O" && btn3.innerHTML === btn6.innerHTML && btn3.innerHTML === btn9.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    }

    if (btn1.innerHTML !== "" && btn1.innerHTML == "O" && btn1.innerHTML === btn5.innerHTML && btn1.innerHTML === btn9.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    } if (btn3.innerHTML !== "" && btn3.innerHTML == "O" && btn3.innerHTML === btn5.innerHTML && btn3.innerHTML === btn7.innerHTML) {
        alert(firstname1.value + " is The Winner")
        reset_game()
    }

    if(count==10){
            alert("Draw")
            reset_game()
    }



}


function hov(btn) {

    if (count % 2 == 0) {
        document.getElementById(btn.id).innerHTML = "X"
        document.getElementById(btn.id).style.color = "grey"
    }
    else if (count % 2 !== 0) {
        document.getElementById(btn.id).innerHTML = "O"
        document.getElementById(btn.id).style.color = "grey"

    }


}



function out(btn) {

    if (count % 2 == 0) {
        document.getElementById(btn.id).innerHTML = ""

    }
    else if (count % 2 !== 0) {
        document.getElementById(btn.id).innerHTML = ""

    }

}





