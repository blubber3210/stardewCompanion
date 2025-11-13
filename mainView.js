const app = document.getElementById("app");

updateView();

function updateView(){
    let content = ``;

    if(model.app.currentPage == 'homePage'){
        content = drawHomePage()
    } else if(model.app.currentPage == 'allCropsPage'){
        content = drawAllCropsPage()
    } else if(model.app.currentPage == 'allForageablesPage'){
        content = drawAllForageablesPage()
    } else if(model.app.currentPage == 'communityCenterPage'){
        content = drawCommunityCenterPage()
    } else if(model.app.currentPage == 'notesPage'){
        content = drawNotesPage()
    } else {
        content = `something went wrong`
    }


    app.innerHTML = `
    <header> ${drawHeader()} </header>
    
    <main> ${content} </main>

    <footer> ${drawFooter()} </footer>
    
    `;
}

function drawHeader(){
    let html = `
    
    <h1 class="title"> title </h1>

    <div>
        <button onclick="changePage('homePage')">home</button>
        <button onclick="changePage('allCropsPage')">all crops</button>
        <button onclick="changePage('allForageablesPage')">all forageables</button>
        <button onclick="changePage('communityCenterPage')">community center</button>
        <button onclick="changePage('notesPage')">notes</button>
    </div>
    
    `;

    return html;
}

function drawFooter(){
    let html = `footer`;

    return html;
}

function drawHomePage(){
    let html = `home`;

    return html;
}






