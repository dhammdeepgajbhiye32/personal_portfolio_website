/*==================================================
                LOADER
==================================================*/

function showLoader(){

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.remove("hide");

    }

}

function hideLoader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    loader.classList.add("hide");

}