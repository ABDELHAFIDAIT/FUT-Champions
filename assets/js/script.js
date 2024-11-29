//Main Formation
const ST_1 = document.getElementById('ST-1');
const ST_2 = document.getElementById('ST-2');
const LM = document.getElementById('LM');
const CM_1 = document.getElementById('CM-1');
const CM_2 = document.getElementById('CM-2');
const RM = document.getElementById('RM');
const LB = document.getElementById('LB');
const CB_1 = document.getElementById('CB-1');
const CB_2 = document.getElementById('CB-2');
const RB = document.getElementById('RB');
const GK = document.getElementById('GK');

//Substitutions
const subST = document.getElementById('SUB-ST');
const subMD = document.getElementById('SUB-MD');
const subDF = document.getElementById('SUB-DF');
const subGK = document.getElementById('SUB-GK');

//Add Popup
const popup = document.getElementById('popup-add-player');

//Add Popup Forms
const formCustom = document.getElementById('form-custom-player');
const formExist = document.getElementById('form-exist-player');

//Div to Display Players in Form
const displayPlayers = document.getElementById('display-players');

//Radio Methods to add Players
const radioExistPlayer = document.getElementById('exist-player');
const radioNewPlayer = document.getElementById('new-player');

//Buttons to Cancel/Confirm Add Custom Player
const btnCancelCustom = document.getElementById('cancel-custom');
const btnConfirmCustom = document.getElementById('confirm-custom');

//Buttons to Cancel/Confirm Add Exist Player
const btnCancelExist = document.getElementById('cancel-exist');

//Player Card
const statiqCard = document.querySelectorAll('.card');


//=======================================================================================



btnCancelCustom.onclick = function () {
    popup.classList.add('hidden');
}

btnCancelExist.onclick = function () {
    popup.classList.add('hidden');
}

radioNewPlayer.onclick = function () {
    formExist.classList.add('hidden');
    formCustom.classList.remove('hidden');
}

radioExistPlayer.onclick = function () {
    formExist.classList.remove('hidden');
    formCustom.classList.add('hidden');
}

for (let i = 0; i < 18; i++) {
    statiqCard[i].classList.add('transition-all', 'duration-300', 'hover:scale-105');
}




//=======================================================================================



for (let i = 0; i < 18; i++) {
    statiqCard[i].addEventListener('click', function () {
        popup.classList.remove('hidden');
        displayPlayers.innerHTML = '';

        if (i == 0 || i == 1) {
            filterPlayers('ST', i);
        }
        if (i == 2) {
            filterPlayers('LM', i);
        }
        if (i == 3 || i == 4) {
            filterPlayers('CM', i);
        }
        if (i == 5) {
            filterPlayers('RM', i);
        }
        if (i == 6) {
            filterPlayers('LB', i);
        }
        if (i == 7 || i == 8) {
            filterPlayers('CB', i);
        }
        if (i == 9) {
            filterPlayers('RB', i);
        }
        if (i == 10) {
            displayGK(i);
        }



        if (i == 11 || i == 12) {
            filterPlayers('ST', i);
        }
        if (i == 13 || i == 14) {
            filterPlayers('LM', i);
            filterPlayers('CM', i);
            filterPlayers('RM', i);
        }
        if (i == 15 || i == 16) {
            filterPlayers('LB', i);
            filterPlayers('CB', i);
            filterPlayers('RB', i);
        }
        if (i == 17) {
            displayGK(i);
        }

    })
}




//=======================================================================================



function filterPlayers(poste, index) {
    fetch('https://abdelhafidait.github.io/api-players/players.json')
        .then(response => response.json())
        .then(data => {
            data.players.forEach(player => {
                if (player.position == poste) {
                    const stCard = document.createElement('div');
                    stCard.className = "card-p fut-player-card cursor-pointer z-0 transition-all duration-300 hover:scale-105";
                    stCard.id = "player-rb";

                    stCard.innerHTML = `<div class="player-card-top">
                                    <div class="player-master-info">
                                        <div class="player-rating">
                                        <span id="player-rating">${player.rating}</span>
                                        </div>
                                        <div class="player-position">
                                        <span id="player-position">${player.position}</span>
                                        </div>
                                        <div class="player-nation">
                                        <span id="player-nation"><img src="${player.flag}" alt=""></span>
                                        </div>
                                        <div class="player-club">
                                        <span id="player-club"><img src="${player.logo}"></span>
                                        </div>
                                    </div>
                                    <div class="player-picture">
                                        <img src="${player.photo}" alt="">
                                    </div>
                                    </div>
                                    <div class="player-card-bottom">
                                    <div class="player-info">
                                        <!-- Player Name-->
                                        <div class="player-name">
                                        <span id="player-name">${player.name}</span>
                                        </div>
                                        <!-- Player Features-->
                                        <div class="player-features">
                                        <div class="player-features-col">
                                            <span>
                                            <div class="player-feature-value" id="pace">${player.pace}</div>
                                            <div class="player-feature-title">PACE</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="shooting">${player.shooting}</div>
                                            <div class="player-feature-title">SHO</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="passing">${player.passing}</div>
                                            <div class="player-feature-title">PAS</div>
                                            </span>
                                        </div>
                                        <div class="player-features-col">
                                            <span>
                                            <div class="player-feature-value" id="driplling">${player.dribbling}</div>
                                            <div class="player-feature-title">DRI</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="defending">${player.defending}</div>
                                            <div class="player-feature-title">DEF</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="physical">${player.physical}</div>
                                            <div class="player-feature-title">PHY</div>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>`

                    displayPlayers.appendChild(stCard);
                    displayPlayers.classList.remove('hidden');
                }

                
            })

            let countCards = displayPlayers.childElementCount;
            let plyCard = document.querySelectorAll('.card-p');
            console.log(countCards, plyCard.length);
            for (let j = 0; j < countCards; j++) {
                console.log(index,"==");
                plyCard[j].addEventListener('click', function () {
                    this.classList.remove('card-p')
                    statiqCard[index].classList.add('hidden');
                    statiqCard[index].parentElement.appendChild(plyCard[j]);
                    popup.classList.add('hidden');
                });
            }
        })
}



function displayGK(index) {
    fetch('https://abdelhafidait.github.io/api-players/players.json')
        .then(response => response.json())
        .then(data => {
            data.players.forEach(player => {
                if (player.position == 'GK') {
                    const stCard = document.createElement('div');
                    stCard.className = "card-p fut-player-card cursor-pointer z-0 transition-all duration-300 hover:scale-105";
                    stCard.id = "player-rb";

                    stCard.innerHTML = `<div class="player-card-top">
                                    <div class="player-master-info">
                                        <div class="player-rating">
                                        <span id="player-rating">${player.rating}</span>
                                        </div>
                                        <div class="player-position">
                                        <span id="player-position">${player.position}</span>
                                        </div>
                                        <div class="player-nation">
                                        <span id="player-nation"><img src="${player.flag}" alt=""></span>
                                        </div>
                                        <div class="player-club">
                                        <span id="player-club"><img src="${player.logo}"></span>
                                        </div>
                                    </div>
                                    <div class="player-picture">
                                        <img src="${player.photo}" alt="">
                                    </div>
                                    </div>
                                    <div class="player-card-bottom">
                                    <div class="player-info">
                                        <!-- Player Name-->
                                        <div class="player-name">
                                        <span id="player-name">${player.name}</span>
                                        </div>
                                        <!-- Player Features-->
                                        <div class="player-features">
                                        <div class="player-features-col">
                                            <span>
                                            <div class="player-feature-value" id="pace">${player.diving}</div>
                                            <div class="player-feature-title">DIV</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="shooting">${player.handling}</div>
                                            <div class="player-feature-title">HAN</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="passing">${player.kicking}</div>
                                            <div class="player-feature-title">KIC</div>
                                            </span>
                                        </div>
                                        <div class="player-features-col">
                                            <span>
                                            <div class="player-feature-value" id="driplling">${player.reflexion}</div>
                                            <div class="player-feature-title">REF</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="defending">${player.speed}</div>
                                            <div class="player-feature-title">SPE</div>
                                            </span>
                                            <span>
                                            <div class="player-feature-value" id="physical">${player.positioning}</div>
                                            <div class="player-feature-title">POS</div>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>`

                    displayPlayers.appendChild(stCard);
                    displayPlayers.classList.remove('hidden');
                }
            })
            let countCards = displayPlayers.childElementCount;
            let plyCard = document.querySelectorAll('.card-p');
            console.log(countCards, plyCard.length);
            for (let j = 0; j < countCards; j++) {
                console.log(index,"==");
                plyCard[j].addEventListener('click', function () {
                    this.classList.remove('card-p')
                    statiqCard[index].classList.add('hidden');
                    statiqCard[index].parentElement.appendChild(plyCard[j]);
                    popup.classList.add('hidden');
                });
            }
        })
}


//========================================================================================