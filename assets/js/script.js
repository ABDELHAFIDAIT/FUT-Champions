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

                    stCard.innerHTML = `
                    <svg id="delete-icon" class="delete-card absolute top-7 right-2 transition-all duration-300 hover:scale-125" width="20px" height="20px" fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>

                    <svg id="modify-icon" class="modify-card absolute top-14 right-2 transition-all duration-300 hover:scale-125" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.6982 7.19469C20.5539 7.16345 20.3722 7.11589 20.1651 7.04404C19.6108 6.85172 18.8823 6.48827 18.197 5.803C17.5117 5.11774 17.1483 4.38923 16.956 3.8349C16.8841 3.62781 16.8366 3.44609 16.8053 3.30179L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624Z" fill="#00a33f"></path> <path d="M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.99089 12.1646C9.17157 11.6225 9.26191 11.3515 9.38344 11.0965C9.52679 10.7957 9.70249 10.5114 9.90743 10.2487C10.0812 10.0259 10.2832 9.82394 10.6872 9.41993L15.6033 4.50385C15.867 5.19804 16.3293 6.05663 17.1363 6.86366C17.9434 7.67069 18.802 8.13296 19.4962 8.39674L14.5801 13.3128Z" fill="#00a33f"></path> <path d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.4517 22 9.15774 21.9481 8.0661L15.586 14.4283C15.2347 14.7797 14.9708 15.0437 14.6738 15.2753C14.3252 15.5473 13.948 15.7804 13.5488 15.9706C13.2088 16.1327 12.8546 16.2506 12.3833 16.4076L9.45143 17.3849C8.64568 17.6535 7.75734 17.4438 7.15678 16.8432C6.55621 16.2427 6.34651 15.3543 6.61509 14.5486L7.59235 11.6167C7.74936 11.1454 7.86732 10.7912 8.02935 10.4512C8.21958 10.052 8.45272 9.6748 8.72466 9.32615C8.9563 9.02918 9.22032 8.76528 9.57173 8.41404L15.9339 2.05188C14.8423 2 13.5483 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z" fill="#00a33f"></path> </g></svg>
                    
                    <div class="player-card-top">
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
                    this.classList.add('scale-[0.3]' , 'md:scale-[0.7]' , 'lg:scale-[0.8]')
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

                    stCard.innerHTML = `
                    <svg id="delete-icon" class="delete-card absolute top-7 right-2" width="20px" height="20px" fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>

                    <svg id="modify-icon" class="modify-card absolute top-14 right-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.6982 7.19469C20.5539 7.16345 20.3722 7.11589 20.1651 7.04404C19.6108 6.85172 18.8823 6.48827 18.197 5.803C17.5117 5.11774 17.1483 4.38923 16.956 3.8349C16.8841 3.62781 16.8366 3.44609 16.8053 3.30179L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624Z" fill="#00a33f"></path> <path d="M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.99089 12.1646C9.17157 11.6225 9.26191 11.3515 9.38344 11.0965C9.52679 10.7957 9.70249 10.5114 9.90743 10.2487C10.0812 10.0259 10.2832 9.82394 10.6872 9.41993L15.6033 4.50385C15.867 5.19804 16.3293 6.05663 17.1363 6.86366C17.9434 7.67069 18.802 8.13296 19.4962 8.39674L14.5801 13.3128Z" fill="#00a33f"></path> <path d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.4517 22 9.15774 21.9481 8.0661L15.586 14.4283C15.2347 14.7797 14.9708 15.0437 14.6738 15.2753C14.3252 15.5473 13.948 15.7804 13.5488 15.9706C13.2088 16.1327 12.8546 16.2506 12.3833 16.4076L9.45143 17.3849C8.64568 17.6535 7.75734 17.4438 7.15678 16.8432C6.55621 16.2427 6.34651 15.3543 6.61509 14.5486L7.59235 11.6167C7.74936 11.1454 7.86732 10.7912 8.02935 10.4512C8.21958 10.052 8.45272 9.6748 8.72466 9.32615C8.9563 9.02918 9.22032 8.76528 9.57173 8.41404L15.9339 2.05188C14.8423 2 13.5483 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z" fill="#00a33f"></path> </g></svg>
                    
                    <div class="player-card-top">
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
            for (let j = 0; j < countCards; j++) {
                plyCard[j].addEventListener('click', function () {
                    this.classList.add('scale-[0.3]' , 'md:scale-[0.5]' , 'lg:scale-[0.8]');
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


function validatePlayerForm() {
    let isValid = true;

    if (pName.value.trim().length <= 2) {
        alert('Player Name is too Short !');
        isValid = false;
    }

    if (pNation.value.trim().length <= 3) {
        alert('Nation Name is too Short !');
        isValid = false;
    }

    if (pClub.value.trim().length <= 2) {
        alert('Club Name is too Short !');
        isValid = false;
    }

    if (!pPhoto.value.startsWith('http')) {
        alert("Invalid URL for Player Picture!");
        isValid = false;
    }

    if (!pNationFlag.value.startsWith('http')) {
        alert("Invalid URL for Nation Flag!");
        isValid = false;
    }

    if (!pClubLogo.value.startsWith('http')) {
        alert("Invalid URL for Club Logo!");
        isValid = false;
    }

    if (pPAC.value < 20 || pPAC.value > 99) {
        alert('20 =< PAC =< 99');
        isValid = false;
    }

    if (pSHO.value < 20 || pSHO.value > 99) {
        alert('20 =< SHO =< 99');
        isValid = false;
    }

    if (pPAS.value < 20 || pPAS.value > 99) {
        alert('20 =< PAS =< 99');
        isValid = false;
    }

    if (pDRI.value < 20 || pDRI.value > 99) {
        alert('20 =< DRI =< 99');
        isValid = false;
    }

    if (pDEF.value < 20 || pDEF.value > 99) {
        alert('20 =< DEF =< 99');
        isValid = false;
    }

    if (pPHY.value < 20 || pPHY.value > 99) {
        alert('20 =< PHY =< 99');
        isValid = false;
    }

    if (pRAT.value < 20 || pRAT.value > 99) {
        alert('20 =< PHY =< 99');
        isValid = false;
    }

    return isValid;
}


function createCardPlayer(name, photo, flag, logo, pace, shot, pass, dri, def, phy, rat, pos, target) {

    const cCard = document.createElement('div');
    cCard.className = "card-p fut-player-card cursor-pointer z-0 transition-all duration-300 hover:scale-105";
    cCard.id = "player-rb";

    cCard.innerHTML = `
                    <svg id="delete-icon" class="delete-card absolute top-7 right-2 transition-all duration-300 hover:scale-125" width="20px" height="20px" fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>

                    <svg id="modify-icon" class="modify-card absolute top-14 right-2 transition-all duration-300 hover:scale-125" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.6982 7.19469C20.5539 7.16345 20.3722 7.11589 20.1651 7.04404C19.6108 6.85172 18.8823 6.48827 18.197 5.803C17.5117 5.11774 17.1483 4.38923 16.956 3.8349C16.8841 3.62781 16.8366 3.44609 16.8053 3.30179L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624Z" fill="#00a33f"></path> <path d="M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.99089 12.1646C9.17157 11.6225 9.26191 11.3515 9.38344 11.0965C9.52679 10.7957 9.70249 10.5114 9.90743 10.2487C10.0812 10.0259 10.2832 9.82394 10.6872 9.41993L15.6033 4.50385C15.867 5.19804 16.3293 6.05663 17.1363 6.86366C17.9434 7.67069 18.802 8.13296 19.4962 8.39674L14.5801 13.3128Z" fill="#00a33f"></path> <path d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.4517 22 9.15774 21.9481 8.0661L15.586 14.4283C15.2347 14.7797 14.9708 15.0437 14.6738 15.2753C14.3252 15.5473 13.948 15.7804 13.5488 15.9706C13.2088 16.1327 12.8546 16.2506 12.3833 16.4076L9.45143 17.3849C8.64568 17.6535 7.75734 17.4438 7.15678 16.8432C6.55621 16.2427 6.34651 15.3543 6.61509 14.5486L7.59235 11.6167C7.74936 11.1454 7.86732 10.7912 8.02935 10.4512C8.21958 10.052 8.45272 9.6748 8.72466 9.32615C8.9563 9.02918 9.22032 8.76528 9.57173 8.41404L15.9339 2.05188C14.8423 2 13.5483 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z" fill="#00a33f"></path> </g></svg>
                    
                    
                    <div class="player-card-top">
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
    cCard.classList.remove('card-p');
    cCard.classList.add('scale-[0.3]' , 'md:scale-[0.7]' , 'lg:scale-[0.8]')
}


for (let t = 0; t < 18; t++) {
    statiqCard[t].addEventListener('click', function () {
        popup.classList.remove('hidden');

        let position;
        if (t === 0 || t === 1 || t === 11 || t === 12) position = 'ST';
        else if (t === 2) position = 'LM';
        else if (t === 3 || t === 4 || t === 13 || t === 14) position = 'CM';
        else if (t === 5) position = 'RM';
        else if (t === 6) position = 'LB';
        else if (t === 7 || t === 8) position = 'CB';
        else if (t === 9) position = 'RB';
        else if (t === 10 || t === 17) position = 'RB';


        const confirmHandler = function () {
            const valid = validatePlayerForm();
            if (valid) {
                createCardPlayer(
                    pName.value,
                    pPhoto.value,
                    pNationFlag.value,
                    pClubLogo.value,
                    pPAC.value,
                    pSHO.value,
                    pPAS.value,
                    pDRI.value,
                    pDEF.value,
                    pPHY.value,
                    pRAT.value,
                    position,
                    statiqCard[t]
                );
                popup.classList.add('hidden');
                formCustom.reset();
                btnConfirmCustom.removeEventListener('click', confirmHandler);
            }
        };

        btnConfirmCustom.addEventListener('click', confirmHandler);
    });
}





// const suppr = document.querySelectorAll('.delete-card');
// const modify = document.querySelectorAll('.modify-card');

// for (let x = 0; x < 18; x++) {
//     suppr[x].addEventListener('click', function () {
//         const confirmation = confirm('Remove This Player ?');
//         if (confirmation) {
//             suppr[x].parentElement.classList.add('hidden');
//             statiqCard[x].classList.remove('hidden');
//         }
//     });
// }