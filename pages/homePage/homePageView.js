function drawHomePage(){
    let html = `home
    <div class="categoryContainer">
        <div class="categoryDiv" onclick="changePage('allCropsPage')"> 
        <img class="mediumImg" src=${model.data.allCrops[2].image}> <br>
        all crops
        </div>

        <div class="categoryDiv" onclick="changePage('allForageablesPage')"> 
        <img class="mediumImg" src=${model.data.allForageables[2].image}> <br>
        all forage
        </div>

        <div class="categoryDiv" onclick="changePage('communityCenterPage')"> 
        <img class="mediumImg" src="images/Bundle_Icon.png"> <br>
        bundles
        </div>

    </div>
    `;

    return html;
}