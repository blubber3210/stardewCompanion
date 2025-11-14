function drawAllCropsPage(){
    let html = /*HTML*/`
    
    <h2 class="subTitle">crops</h2>
    
    ${drawSeasonOptions()}

    <div class="cropsList">
    ${drawCropsList()}
    </div>
    `;

    return html;
}


function drawSeasonOptions(){
    let seasons = model.data.seasons;
    let html = ``;

    for(let i = 0; i < model.data.seasons.length; i++){
        html += `
        <button onclick="selectSeason(${i})">${seasons[i]}</button>
        `;
    }

    return html;
}

function drawCropsList(){
    let selectedSeason = model.viewState.allCropsPage.selectedSeason;
    let content = ``;
    let html = ``;

    if(selectedSeason == ''){
        content = listAllCrops()
    } else if (selectedSeason == 'spring'){
        content = listAllSpringCrops()
    } else if (selectedSeason == 'summer'){
        content = listAllSummerCrops()
    } else if (selectedSeason == 'fall'){
        content = listAllFallCrops()
    } else if (selectedSeason == 'winter'){
        content = listAllWinterCrops()
    } else {
        content = `list is messed up`
    }

    html = `
    <h3>list</h3>
    <div class='cropsList'>
        ${content}
    </div>
    `;
    
    return html;
}

function listAllCrops(){
    let html = ``;

    return html;
}

function listAllSpringCrops(){
    let html = ``;

    return html;
}

function listAllSummerCrops(){
    let html = ``;

    return html;
}

function listAllFallCrops(){
    let html = ``;

    return html;
}

function listAllWinterCrops(){
    let html = ``;

    return html;
}