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
            for (let j = 0; j < countCards; j++) {
                plyCard[j].addEventListener('click', function () {
                    this.classList.remove('card-p');
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
                                            <div class="player-feature-value" id="driplling">${player.reflexes}</div>
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



const pName = document.getElementById('player-name');
const pPhoto = document.getElementById('player-picture');
const pNation = document.getElementById('nationality');
const pNationFlag = document.getElementById('nation-flag');
const pClub = document.getElementById('club');
const pClubLogo = document.getElementById('club-logo');
const pPAC = document.getElementById('PAC');
const pSHO = document.getElementById('SHO');
const pPAS = document.getElementById('PAS');
const pDRI = document.getElementById('DRI');
const pDEF = document.getElementById('DEF');
const pPHY = document.getElementById('PHY');
const pRAT = document.getElementById('RAT');









// btnConfirmCustom.onclick = function(){
//     const valid = validatePlayerForm();
//     if(valid){
//         for (let i = 0; i < 18; i++) {
//             statiqCard[i].addEventListener('click', function () {
//                 popup.classList.remove('hidden');
        
//                 if (i == 0 || i == 1) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'ST', statiqCard[i]);
//                 }
//                 if (i == 2) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'LM', statiqCard[i]);
//                 }
//                 if (i == 3 || i == 4) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'CM', statiqCard[i]);
//                 }
//                 if (i == 5) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'RM', statiqCard[i]);
//                 }
//                 if (i == 6) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'LB', statiqCard[i]);
//                 }
//                 if (i == 7 || i == 8) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'CB', statiqCard[i]);
//                 }
//                 if (i == 9) {
//                     createCardPlayer(pName.value, pPhoto.value, pNation.vlaue, pClubLogo, pPAC.vlaue, pSHO.vlaue, pPAS.vlaue, pDRI.vlaue, pDEF.vlaue, pPHY.vlaue, pRAT.vlaue, 'RB', statiqCard[i]);
//                 }
//             })
//         }
//     }

//     popup.classList.add('hidden');
// }



for(let t=0 ; t<10 ; t++){
    statiqCard[t].addEventListener('click', function(){
        popup.classList.remove('hidden');
        
        if (t == 0 || t == 1) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'ST', statiqCard[t]);
                    popup.classList.add('hidden');
                }
                formCustom.reset();
            })
        }
        if (t == 2) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'LM', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
        if (t == 3 || t == 4) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'CM', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
        if (t == 5) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'RM', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
        if (t == 6) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'LB', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
        if (t == 7 || t == 8) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'CB', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
        if (t == 9) {
            btnConfirmCustom.addEventListener('click' , function(){
                const valid = validatePlayerForm();
                if(valid){
                    createCardPlayer(pName.value, pPhoto.value, pNation.value, pClubLogo.value, pPAC.value, pSHO.value, pPAS.value, pDRI.value, pDEF.value, pPHY.value, pRAT.value, 'RB', statiqCard[t]);
                    popup.classList.add('hidden');
                    formCustom.requestFullscreen();
                }
            })
        }
    });
}

















function validatePlayerForm() {
    let isValid = true;

    if (pName.value.length <= 2) {
        alert('Player Name is too Short !');
        isValid = false;
    }

    else if (pNation.value.length <= 3) {
        alert('Nation Name is too Short !');
        isValid = false;
    }

    else if (pClub.value.length <= 2) {
        alert('Club Name is too Short !');
        isValid = false;
    }

    else if (!pPhoto.value.startsWith('http')) {
        alert("Invalid URL for Player Picture!");
        isValid = false;
    }

    else if (!pNationFlag.value.startsWith('http')) {
        alert("Invalid URL for Nation Flag!");
        isValid = false;
    }

    else if (!pClubLogo.value.startsWith('http')) {
        alert("Invalid URL for Club Logo!");
        isValid = false;
    }

    else if (pPAC.value < 20 || pPAC.value > 99) {
        alert('20 =< PAC =< 99');
        isValid = false;
    }

    else if (pSHO.value < 20 || pSHO.value > 99) {
        alert('20 =< SHO =< 99');
        isValid = false;
    }

    else if (pPAS.value < 20 || pPAS.value > 99) {
        alert('20 =< PAS =< 99');
        isValid = false;
    }

    else if (pDRI.value < 20 || pDRI.value > 99) {
        alert('20 =< DRI =< 99');
        isValid = false;
    }

    else if (pDEF.value < 20 || pDEF.value > 99) {
        alert('20 =< DEF =< 99');
        isValid = false;
    }

    else if (pPHY.value < 20 || pPHY.value > 99) {
        alert('20 =< PHY =< 99');
        isValid = false;
    }

    else if(pRAT.value < 20 || pRAT.value > 99){
        alert('20 =< PHY =< 99');
        isValid = false;
    }

    return isValid;
}


function createCardPlayer(name, photo, flag, logo, pace, shot, pass, dri, def, phy, rat, pos, target){
    
        const cCard = document.createElement('div');
        cCard.className = "card-p fut-player-card cursor-pointer z-0 transition-all duration-300 hover:scale-105";
        cCard.id = "player-rb";

        cCard.innerHTML = `<div class="player-card-top">
                        <div class="player-master-info">
                            <div class="player-rating">
                            <span id="player-rating">${rat}</span>
                            </div>
                            <div class="player-position">
                            <span id="player-position">${pos}</span>
                            </div>
                            <div class="player-nation">
                            <span id="player-nation"><img src="${flag}" alt=""></span>
                            </div>
                            <div class="player-club">
                            <span id="player-club"><img src="${logo}"></span>
                            </div>
                        </div>
                        <div class="player-picture">
                            <img src="${photo}" alt="">
                        </div>
                        </div>
                        <div class="player-card-bottom">
                        <div class="player-info">
                            <!-- Player Name-->
                            <div class="player-name">
                            <span id="player-name">${name}</span>
                            </div>
                            <!-- Player Features-->
                            <div class="player-features">
                            <div class="player-features-col">
                                <span>
                                <div class="player-feature-value" id="pace">${pace}</div>
                                <div class="player-feature-title">PACE</div>
                                </span>
                                <span>
                                <div class="player-feature-value" id="shooting">${shot}</div>
                                <div class="player-feature-title">SHO</div>
                                </span>
                                <span>
                                <div class="player-feature-value" id="passing">${pass}</div>
                                <div class="player-feature-title">PAS</div>
                                </span>
                            </div>
                            <div class="player-features-col">
                                <span>
                                <div class="player-feature-value" id="driplling">${dri}</div>
                                <div class="player-feature-title">DRI</div>
                                </span>
                                <span>
                                <div class="player-feature-value" id="defending">${def}</div>
                                <div class="player-feature-title">DEF</div>
                                </span>
                                <span>
                                <div class="player-feature-value" id="physical">${phy}</div>
                                <div class="player-feature-title">PHY</div>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>`

        target.parentElement.appendChild(cCard);
        target.classList.add('hidden');
    
}



// if (i == 10) {
//     displayGK(i);
// }



// if (i == 11 || i == 12) {
    
// }
// if (i == 13 || i == 14) {
    
    
    
// }
// if (i == 15 || i == 16) {
    
    
    
// }
// if (i == 17) {
//     displayGK(i);
// }