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
const btnConfirmExist = document.getElementById('confirm-exist');



const display_ST_1 = document.getElementById('display-players-ST-1');
const display_ST_2 = document.getElementById('display-players-ST-2');
const display_LM = document.getElementById('display-players-LM');
const display_CM_1 = document.getElementById('display-players-CM-1');
const display_CM_2 = document.getElementById('display-players-CM-2');
const display_RM = document.getElementById('display-players-RM');
const display_LB = document.getElementById('display-players-LB');
const display_CB_1 = document.getElementById('display-players-CB-1');
const display_CB_2 = document.getElementById('display-players-CB-2');
const display_RB = document.getElementById('display-players-RB');
const display_GK = document.getElementById('display-players-GK');






//========================================================================================

btnCancelExist.onclick = function () {
    popup.classList.add('hidden');
}

btnCancelCustom.onclick = function () {
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



const statiqCard = document.querySelectorAll('.card');


// for(let i=0 ; i<18 ; i++){
//     statiqCard[i].addEventListener('click', function(){
//         popup.classList.remove('hidden');
//         displayPlayers.innerHTML = '';
//     })
// }



ST_1.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'ST'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_ST_1.appendChild(stCard);
                
            }
        });

        ST_1.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_ST_1.classList.remove('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_ST_1.innerHTML = '';
        })
        
        const count = display_ST_1.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    ST_1.innerHTML = '';
                    ST_1.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

ST_2.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'ST'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_ST_2.appendChild(stCard);
                
            }
        });

        ST_2.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_ST_2.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_ST_2.innerHTML = '';
        })
        
        const count = display_ST_2.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    ST_2.innerHTML = '';
                    ST_2.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

LM.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'LM'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_LM.appendChild(stCard);
                
            }
        });

        LM.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_LM.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_LM.innerHTML = '';
        })
        
        const count = display_LM.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    LM.innerHTML = '';
                    LM.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

CM_1.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'CM'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_CM_1.appendChild(stCard);
                
            }
        });

        CM_1.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_CM_1.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_CM_1.innerHTML = '';
        })
        
        const count = display_CM_1.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    CM_1.innerHTML = '';
                    CM_1.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

CM_2.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'CM'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_CM_2.appendChild(stCard);
                
            }
        });

        CM_2.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_CM_2.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_CM_2.innerHTML = '';
        })
        
        const count = display_CM_2.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    CM_2.innerHTML = '';
                    CM_2.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

RM.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'RM'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_RM.appendChild(stCard);
                
            }
        });

        RM.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_RM.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_RM.innerHTML = '';
        })
        
        const count = display_RM.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    RM.innerHTML = '';
                    RM.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

LB.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'LB'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_LB.appendChild(stCard);
                
            }
        });

        LB.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_LB.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_LB.innerHTML = '';
        })
        
        const count = display_LB.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    LB.innerHTML = '';
                    LB.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

CB_1.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'CB'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_CB_1.appendChild(stCard);
                
            }
        });

        CB_1.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_CB_1.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_2.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_CB_1.innerHTML = '';
        })
        
        const count = display_CB_1.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    CB_1.innerHTML = '';
                    CB_1.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

CB_2.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'CB'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_CB_2.appendChild(stCard);
                
            }
        });

        CB_2.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_CB_2.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_RB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_CB_2.innerHTML = '';
        })
        
        const count = display_CB_2.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    CB_2.innerHTML = '';
                    CB_2.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})

RB.addEventListener('click', function(){
    fetch('https://abdelhafidait.github.io/api-players/players.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            if(player.position == 'RB'){
                const stCard = document.createElement('div');
                stCard.className = "fut-player-card cursor-pointer z-0";
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
                
                display_RB.appendChild(stCard);
                
            }
        });

        RB.addEventListener('click', function(){
            popup.classList.remove('hidden');
            display_RB.classList.remove('hidden');
            display_ST_1.classList.add('hidden');
            display_ST_2.classList.add('hidden');
            display_LM.classList.add('hidden');
            display_CM_1.classList.add('hidden');
            display_CM_2.classList.add('hidden');
            display_RM.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_CB_1.classList.add('hidden');
            display_LB.classList.add('hidden');
            display_GK.classList.add('hidden');
            display_RB.innerHTML = '';
        })
        
        const count = display_RB.childElementCount;

        const existCards = document.querySelectorAll('.fut-player-card');

        for(let i=0 ; i<count ; i++){
            existCards[i].onclick = function(){
                existCards[i].classList.toggle('scale-110');
            }
        }

        btnConfirmExist.addEventListener('click', function(){
            for(let j=0 ; j<count ; j++){
                if(existCards[j].classList.contains('scale-110')){
                    RB.innerHTML = '';
                    RB.appendChild(existCards[j]);
                    existCards[j].classList.remove('scale-110');
                    existCards[j].classList.add('scale-90');
                    popup.classList.add('hidden');
                }
            }
        })
    })
})





// `<div class="player-card-top">
//                                     <div class="player-master-info">
//                                         <div class="player-rating">
//                                         <span id="player-rating">${player.rating}</span>
//                                         </div>
//                                         <div class="player-position">
//                                         <span id="player-position">${player.position}</span>
//                                         </div>
//                                         <div class="player-nation">
//                                         <span id="player-nation"><img src="${player.flag}" alt=""></span>
//                                         </div>
//                                         <div class="player-club">
//                                         <span id="player-club"><img src="${player.logo}"></span>
//                                         </div>
//                                     </div>
//                                     <div class="player-picture">
//                                         <img src="${player.photo}" alt="">
//                                     </div>
//                                     </div>
//                                     <div class="player-card-bottom">
//                                     <div class="player-info">
//                                         <!-- Player Name-->
//                                         <div class="player-name">
//                                         <span id="player-name">${player.name}</span>
//                                         </div>
//                                         <!-- Player Features-->
//                                         <div class="player-features">
//                                         <div class="player-features-col">
//                                             <span>
//                                             <div class="player-feature-value" id="pace">${player.diving}</div>
//                                             <div class="player-feature-title">DIV</div>
//                                             </span>
//                                             <span>
//                                             <div class="player-feature-value" id="shooting">${player.handling}</div>
//                                             <div class="player-feature-title">HAN</div>
//                                             </span>
//                                             <span>
//                                             <div class="player-feature-value" id="passing">${player.kicking}</div>
//                                             <div class="player-feature-title">KIC</div>
//                                             </span>
//                                         </div>
//                                         <div class="player-features-col">
//                                             <span>
//                                             <div class="player-feature-value" id="driplling">${player.reflexes}</div>
//                                             <div class="player-feature-title">REF</div>
//                                             </span>
//                                             <span>
//                                             <div class="player-feature-value" id="defending">${player.speed}</div>
//                                             <div class="player-feature-title">SPE</div>
//                                             </span>
//                                             <span>
//                                             <div class="player-feature-value" id="physical">${player.positioning}</div>
//                                             <div class="player-feature-title">POS</div>
//                                             </span>
//                                         </div>
//                                         </div>
//                                     </div>
//                                     </div>`