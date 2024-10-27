/// <reference types="../@types/jquery" />



// let display = $(".main-show")
//! display 
let display= document.querySelector(".main-show");
let informationDisplay = document.querySelector(".informationDisplay ")
//! boxmenu
let boxmenu = $(".menu").outerWidth(true);
let sidebar = false;
$(".menuall").animate({left : `-${boxmenu}px`})

//! search
// let valueofinput = $("input").val()
let valueofNameinput = document.querySelector(".searchinput");
let valueofLetterinput = document.querySelector(".searchletterinput");



//! box menu 
$(".menubar").on("click", function ()
{
    moveBar()
})
function moveBar (){
    if(sidebar === true){

        $(".menuall").animate({left : `-${boxmenu}px`},500)
        $(".menubar").removeClass("fa-xmark").addClass("fa-bars")
        $("li").removeClass("animate__slideInUp animate__animated").addClass("animate__slideInDown animate__animated")
       
        console.log("moiaz")
        sidebar=false ;
    }
    else if (sidebar === false)
    {
        $(".menuall").animate({left : `0px`},500)
        $(".menubar").removeClass("fa-bars").addClass("fa-xmark")
        $("li").removeClass("animate__slideInDown animate__animated")
        $("li").addClass("animate__slideInUp animate__animated")

        // $("li").animate()
        console.log("moiaz")
        sidebar=true ;
    }

}



//! main show 
async function hi(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let data = await response.json()
    $(".loaderCONT").fadeOut(1000)
    console.log (data.meals  )
    console.log (data.meals[0].strCategory)
    console.log(data.meals.length)
    
    for (let i = 0 ; i < data.meals.length ; i++ )
    {

        function displayhtml(){
            let htmlcontent  = `
                    <div class="inf" style="">
                        <div class="  ">
                            <div class="port-l w-fit ">
                          
                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
        
                                <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                    <div>
            
                                        <p>${data.meals[i].strMeal}</p>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                      </div>`;
            display.innerHTML+=htmlcontent
            // display.html(htmlcontent)
        } 
        displayhtml()
    }
    $(".inf").on("click",function(e){
        $(".loaderCONT").fadeIn()

        console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
        for (let i = 0 ; i < data.meals.length ; i++ )
        {
            if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                function displayhtml(){
                    let htmlcontent  = `
                            <div class="d-flex justify-content-center pt-5">
                                <div class="w-85 text-white d-flex justify-content-center align-content-center flex-column flex-lg-row ">
                                    <div class="w-25 ps-5">
                                        <div class="w-100">
                                            <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                        </div>
                                        <div>
                                            <h4>${data.meals[i].strMeal}</h4>
                                        </div>
                                    </div>
                                    <div class="w-75 ps-5">
                                        <span class="h1">Instructions</span>
                                        <p>${data.meals[i].strInstructions}</p>
                                        <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                        <br>
                                        <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                        <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                       
                                        </h3>
                                        <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                    </div>
                                </div>    
                            </div> `;
                    informationDisplay.innerHTML+=htmlcontent
                    // display.html(htmlcontent)
                } 
                informationDisplay.innerHTML="";
                display.innerHTML="";
                displayhtml()
            }
        }
        $(".loaderCONT").fadeOut()

    })
}
hi()
//! loading screen 
// jQuery(function(){
// // $(".loaderCONT").fadeIn(1000)
// hi()
// $(".loaderCONT").fadeOut(1000)
// })




//! search 
$(".searchclick").on("click", function(){
    display.innerHTML="";
    informationDisplay.innerHTML="";
    $(".search").removeClass("d-none")
    $(".contact").addClass("d-none")

    sidebar = true;
    moveBar()

})

$(".searchinput ").on("input",async function(){
    

    display.innerHTML="";
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let data = await response.json()
   

    console.log(valueofNameinput.value)
    for(let i =0 ; i < data.meals.length ; i++)
    {
        if(data.meals[i].strMeal.toLowerCase().includes(valueofNameinput.value.toLowerCase()))
        {
            
        function displayhtml(){
            let htmlcontent  = `
                    <div class="inf" style="">
                        <div class="  ">
                            <div class="port-l w-fit ">
                          
                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
        
                                <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                    <div>
            
                                        <p>${data.meals[i].strMeal}</p>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                      </div>`;
            display.innerHTML+=htmlcontent
            // display.html(htmlcontent)
        } 
        displayhtml()
        }
    }
    $(".inf").on("click",function(e){
        $(".loaderCONT").fadeIn()

        console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
        for (let i = 0 ; i < data.meals.length ; i++ )
        {
            if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                function displayhtml(){
                    let htmlcontent  = `
                            <div class="d-flex justify-content-center pt-5">
                                <div class="w-85 text-white d-flex justify-content-center flex-column flex-lg-row">
                                    <div class="w-25 ps-5">
                                        <div class="w-100">
                                            <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                        </div>
                                        <div>
                                            <h4>${data.meals[i].strMeal}</h4>
                                        </div>
                                    </div>
                                    <div class="w-75 ps-5">
                                        <span class="h1">Instructions</span>
                                        <p>${data.meals[i].strInstructions}</p>
                                        <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                        <br>
                                        <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                        <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                       
                                        </h3>
                                        <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                    </div>
                                </div>    
                            </div> `;
                    informationDisplay.innerHTML+=htmlcontent
                    // display.html(htmlcontent)
                } 
                informationDisplay.innerHTML="";
                display.innerHTML="";
                displayhtml()
                $(".search").addClass("d-none")

            }
        }
        $(".loaderCONT").fadeOut()

    }) 
})

$(".searchletterinput").on("input",async function(){
    display.innerHTML="";
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let data = await response.json()
    console.log(data.meals[0].strMeal.charAt(0))
    for(let i =0 ; i < data.meals.length ; i++)
    {
        if(data.meals[i].strMeal.charAt(0).toLowerCase()==valueofLetterinput.value.toLowerCase())
        {
            console.log("okk")
        function displayhtml(){
            let htmlcontent  = `
                    <div class="inf" style="">
                        <div class="  ">
                            <div class="port-l w-fit ">
                          
                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
        
                                <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                    <div>
            
                                        <p>${data.meals[i].strMeal}</p>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                      </div>`;
            display.innerHTML+=htmlcontent
            // display.html(htmlcontent)
        } 
        displayhtml()
        }
    }
    $(".inf").on("click",function(e){
        $(".loaderCONT").fadeIn()

        console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
        for (let i = 0 ; i < data.meals.length ; i++ )
        {
            if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                function displayhtml(){
                    let htmlcontent  = `
                            <div class="d-flex justify-content-center pt-5">
                                <div class="w-85 text-white d-flex justify-content-center flex-column flex-lg-row">
                                    <div class="w-25 ps-5">
                                        <div class="w-100">
                                            <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                        </div>
                                        <div>
                                            <h4>${data.meals[i].strMeal}</h4>
                                        </div>
                                    </div>
                                    <div class="w-75 ps-5">
                                        <span class="h1">Instructions</span>
                                        <p>${data.meals[i].strInstructions}</p>
                                        <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                        <br>
                                        <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                        <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                        <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                       
                                        </h3>
                                        <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                    </div>
                                </div>    
                            </div> `;
                    informationDisplay.innerHTML+=htmlcontent
                    // display.html(htmlcontent)
                } 
                informationDisplay.innerHTML="";
                display.innerHTML="";
                displayhtml()
                $(".search").addClass("d-none")

            }
        }
        $(".loaderCONT").fadeOut()

    }) 
    

})


//! categotries 

$(".categotriesClick").on("click",async function(){
    $(".search").addClass("d-none")
    $(".contact").addClass("d-none")

    display.innerHTML="";
    informationDisplay.innerHTML="";
    sidebar = true;
    
    $(".loaderCONT").fadeIn()
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let data = await response.json()
    $(".loaderCONT").fadeOut()
    // console.log (data.categories[0])
    // console.log(data.categories[0].strCategoryThumb)
    
    for (let i = 0 ; i < data.categories.length ; i++ )
        {
    
            function displayhtml(){
                let htmlcontent  = `
                         <div class=" cardategory " style="width: 20rem;">
                <div class="  ">
                    <div class="port-l w-fit ">
                  
                        <img src="${data.categories[i].strCategoryThumb}" class="w-100 rounded rounded-3" alt="...">

                        <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                            <div class="text-center">
    
                                <h5>${data.categories[i].strCategory}</h5>
                                <p class="small">${data.categories[i].strCategoryDescription}</p>
                            </div>

                        </div>
                    </div>
                </div>
              </div>`;
                display.innerHTML+=htmlcontent

            } 
            
            displayhtml()
        }

    moveBar()
    


    $(".cardategory").on("click",async function(e){
        $(".loaderCONT").fadeIn()

        let categoriesName = e.currentTarget.getElementsByTagName("h5")[0].innerHTML;
        console.log (categoriesName)
        display.innerHTML="";
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        let data = await response.json()
        $(".loaderCONT").fadeOut()

        for (let i = 0 ; i < data.meals.length ; i++ )
            {
                if(e.currentTarget.getElementsByTagName("h5")[0].innerHTML== data.meals[i].strCategory){

                    function displayhtml(){
                        let htmlcontent  = `
                                <div class="inf" style="">
                                    <div class="  ">
                                        <div class="port-l w-fit ">
                                        
                                            <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
                    
                                            <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                                <div>
                        
                                                    <p>${data.meals[i].strMeal}</p>
                                                </div>
                    
                                            </div>
                                        </div>
                                    </div>
                                    </div>`;
                        display.innerHTML+=htmlcontent
                        // display.html(htmlcontent)
                    } 
                    displayhtml()
                }
        }
        
        $(".inf").on("click",function(e){
            $(".loaderCONT").fadeIn()

            console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
            for (let i = 0 ; i < data.meals.length ; i++ )
            {
                if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                    function displayhtml(){
                        let htmlcontent  = `
                                <div class="d-flex justify-content-center pt-5">
                                    <div class="w-85 text-white d-flex justify-content-center flex-column flex-lg-row">
                                        <div class="w-25 ps-5">
                                            <div class="w-100">
                                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                            </div>
                                            <div>
                                                <h4>${data.meals[i].strMeal}</h4>
                                            </div>
                                        </div>
                                        <div class="w-75 ps-5">
                                            <span class="h1">Instructions</span>
                                            <p>${data.meals[i].strInstructions}</p>
                                            <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                            <br>
                                            <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                            <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                            
                                            </h3>
                                            <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                        </div>
                                    </div>    
                                </div> `;
                        informationDisplay.innerHTML+=htmlcontent
                        // display.html(htmlcontent)
                    } 
                    informationDisplay.innerHTML="";
                    display.innerHTML="";
                    displayhtml()
                }
            }
            $(".loaderCONT").fadeOut()

        })   
    })
        

        
    

})


//! area
$(".areaClick").on("click",async function(){
    $(".loaderCONT").fadeIn()

    display.innerHTML="";
    informationDisplay.innerHTML="";
    $(".search").addClass("d-none")
    $(".contact").addClass("d-none")

    sidebar = true;
    moveBar()
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let data = await response.json()

    

    console.log(data.meals[1].strArea)
    for (let i = 0 ; i < data.meals.length ; i++ )
    {
        function displayhtml(){
            let htmlcontent  = `
            
            <div class="text-center areaShow">
                <i class="fa-solid fa-house-laptop text-white"></i>
                <h3 class="text-white">${data.meals[i].strArea}</h3>
            </div>
            
    
            `
        display.innerHTML+=htmlcontent; 

        }
        displayhtml()
    }
    $(".loaderCONT").fadeOut()

    $(".areaShow").on("click",async function(e){
        $(".loaderCONT").fadeIn()

        let areaname = e.currentTarget.getElementsByTagName("h3")[0].innerHTML;
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        let data = await response.json()
        $(".loaderCONT").fadeOut()

        display.innerHTML=""
        for (let i = 0 ; i < data.meals.length ; i++ )
            // console.log(data.meals[i])
        {
            if(areaname== data.meals[i].strArea)
            {
                function displayhtml(){
                    let htmlcontent  = `
                            <div class="inf" style="">
                                <div class="  ">
                                    <div class="port-l w-fit ">
                                    
                                        <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
                
                                        <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                            <div>
                    
                                                <p>${data.meals[i].strMeal}</p>
                                            </div>
                
                                        </div>
                                    </div>
                                </div>
                                </div>`;
                    display.innerHTML+=htmlcontent
                    // display.html(htmlcontent)
                }
                
                displayhtml()
            }
        }
        $(".inf").on("click",function(e){
            $(".loaderCONT").fadeIn()

            console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
            for (let i = 0 ; i < data.meals.length ; i++ )
            {
                if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                    function displayhtml(){
                        let htmlcontent  = `
                                <div class="d-flex justify-content-center pt-5">
                                    <div class="w-85 text-white d-flex justify-content-center flex-column flex-lg-row">
                                        <div class="w-25 ps-5">
                                            <div class="w-100">
                                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                            </div>
                                            <div>
                                                <h4>${data.meals[i].strMeal}</h4>
                                            </div>
                                        </div>
                                        <div class="w-75 ps-5">
                                            <span class="h1">Instructions</span>
                                            <p>${data.meals[i].strInstructions}</p>
                                            <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                            <br>
                                            <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                            <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                           
                                            </h3>
                                            <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                        </div>
                                    </div>    
                                </div> `;
                        informationDisplay.innerHTML+=htmlcontent
                        // display.html(htmlcontent)
                    } 
                    informationDisplay.innerHTML="";
                    display.innerHTML="";
                    displayhtml()
                }
            }
            $(".loaderCONT").fadeOut()

          
        })  
    })
})

//! ingredients
$(".ingredientsClick").on("click",async function (){
    $(".loaderCONT").fadeIn()
    $(".search").addClass("d-none")
    $(".contact").addClass("d-none")

    display.innerHTML="";
    informationDisplay.innerHTML="";
    sidebar = true;
    moveBar()
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let data = await response.json()
    console.log(data.meals[1])
    for (let i = 0 ; i < 25; i++ )
        {
    
            function displayhtml(){
                let htmlcontent  = `<div class="text-white ingredients text-center">
                <i class="fa-solid fa-drumstick-bite"></i>
                <h3>${data.meals[i].strIngredient}</h3>
                <p>${data.meals[i].strDescription}</p>
            </div>
                         `;
                display.innerHTML+=htmlcontent

            } 
            
            displayhtml()
    }
    $(".loaderCONT").fadeOut()

    $(".ingredients").on("click",async function (e) {
        $(".loaderCONT").fadeIn()

        let ingredientsName = e.currentTarget.getElementsByTagName("h3")[0].innerHTML;
        console.log(ingredientsName)
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`)
        let data = await response.json()
        display.innerHTML=""
        console.log(data)
        for (let i = 0 ; i < data.meals.length ; i++ )
        {
            
            
                function displayhtml(){
                    let htmlcontent  = `
                            <div class="inf" style="">
                                <div class="  ">
                                    <div class="port-l w-fit ">
                                    
                                        <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3" alt="...">
                
                                        <div class="port-inner d-flex justify-content-center  flex-column  gap-5">
                                            <div>
                    
                                                <p>${data.meals[i].strMeal}</p>
                                            </div>
                
                                        </div>
                                    </div>
                                </div>
                                </div>`;
                    display.innerHTML+=htmlcontent
                    // display.html(htmlcontent)
                }
                
                displayhtml()
            
        }
        $(".loaderCONT").fadeOut()

        $(".inf").on("click",function(e){
            $(".loaderCONT").fadeIn()

            console.log(e.currentTarget.getElementsByTagName("p")[0].innerHTML)
            for (let i = 0 ; i < data.meals.length ; i++ )
            {
                if(data.meals[i].strMeal==e.currentTarget.getElementsByTagName("p")[0].innerHTML){
                    function displayhtml(){
                        let htmlcontent  = `
                                <div class="d-flex justify-content-center pt-5">
                                    <div class="w-85 text-white d-flex justify-content-center flex-column flex-lg-row">
                                        <div class="w-25 ps-5">
                                            <div class="w-100">
                                                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded rounded-3">
                                            </div>
                                            <div>
                                                <h4>${data.meals[i].strMeal}</h4>
                                            </div>
                                        </div>
                                        <div class="w-75 ps-5">
                                            <span class="h1">Instructions</span>
                                            <p>${data.meals[i].strInstructions}</p>
                                            <h3 class="d-inline">Area : <h4 class="d-inline">${data.meals[i].strArea}</h4></h3>
                                            <br>
                                            <h3 class="d-inline">Category : <h4 class="d-inline">${data.meals[i].strCategory}</h4></h3>
                                            <h3>Recipes :<h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure1}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure2}</h4>
                                            <h4 class="d-inline bg-info rounded rounded-3 px-3 pb-1 mx-2">${data.meals[i].strMeasure3}</h4>
                                           
                                            </h3>
                                            <h3>tags: <br><a href="${data.meals[i].strSource}" class="text-bg-success text-decoration-none rounded rounded-3 small px-3"><small>source</small></a><a href="${data.meals[i].strYoutube}" class="text-bg-danger text-decoration-none rounded rounded-3 small mx-3 px-3"><small>youtube</small></a></h3>
                                        </div>
                                    </div>    
                                </div> `;
                        informationDisplay.innerHTML+=htmlcontent
                        // display.html(htmlcontent)
                    } 
                    informationDisplay.innerHTML="";
                    display.innerHTML="";
                    displayhtml()
                }
            }
            $(".loaderCONT").fadeOut()

        })
    })
})



//! contact us regax  <----
$(".contactClick").on("click",function (){
    display.innerHTML="";
    informationDisplay.innerHTML="";
    $(".search").addClass("d-none")
    $(".contact").removeClass("d-none")
    sidebar = true;
    moveBar()
})
let emailregax = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let email = $(".email")
$(".contact .email").on("input",function(){
    // console.log(email.val())

    if(emailregax.test(email.val()))
    {
        email.next().addClass("d-none")
        // console.log("yes")
    }else{
        // console.log("no")
        email.next().removeClass("d-none")
        // $(".email").next().slideDown()
    }
})

let nameregax = /^[a-z A-Z]{1,}$/;
let nameInput = $(".name")
$(".contact .name").on("input", function(){
    if(nameregax.test(nameInput.val()))
    {
        nameInput.next().addClass("d-none")

    }
    else{
        nameInput.next().removeClass("d-none")
    }
})

let numregax = /^01[0125][0-9]{8}$/;
let num = $(".num")
$(".contact .num").on("input", function(){
    if(numregax.test(num.val()))
    {
        num.next().addClass("d-none")

    }
    else{
        num.next().removeClass("d-none")
    }
})

let ageregax = /^[0-9]{2}$/;
let age = $(".age")
$(".contact .age").on("input", function(){
    if(ageregax.test(age.val()))
    {
        age.next().addClass("d-none")

    }
    else{
        age.next().removeClass("d-none")
    }
})

let passregax = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/;
let pass = $(".pass")
$(".contact .pass").on("input", function(){
    if(passregax.test(pass.val()))
    {
        pass.next().addClass("d-none")

    }
    else{
        pass.next().removeClass("d-none")
    }
})


let repass = $(".repass")
$(".contact .repass").on("input", function(){
    if(repass.val()==pass.val())
    {
        repass.next().addClass("d-none")

    }
    else{
        repass.next().removeClass("d-none")
    }
})
//! button submit
document.querySelector(".myBtn").disabled = true;
$(".contact input").on("input", function (){
    if(emailregax.test(email.val()) && nameregax.test(nameInput.val()) && numregax.test(num.val()) && ageregax.test(age.val()) && passregax.test(pass.val()) && repass.val()==pass.val() ){
        // console.log("yes")
        document.querySelector(".myBtn").disabled = false;
        $(".myBtn").addClass("myBtnHover").removeClass(" border-opacity-75 text-danger-emphasis")
    }else{
        // console.log("no")
        document.querySelector(".myBtn").disabled = true;
        $(".myBtn").removeClass("myBtnHover").addClass(" border-opacity-75 text-danger-emphasis")
    }
})

