function searchContext(){
    let first_text=document.getElementById("input-text").value;
    let text=first_text.split(' ')[0];
    text=text.toLowerCase();
    if(text=='tourist' || text=='Nashik' )
    {
       window.open("index.html","_self");
    }
    else if(text=='shopping' || text=='mall' || text=='shoppings' || text=='malls')
    {
        window.open('shoppingmall.html','_self');
    }
    else if(text=='temple' || text=='temples' || text=='mandir')
    {
        window.open('religious.html','_self')
    }
    else if(text=='resort' || text=='top' || text=='resorts' || text=='waterpark' ||text=='water' )
    {
        window.open('waterpark.html','_self');
    }
    else if(text=='market' || text=='local')
    {
        window.open('localmarket.html','_self')
    }
    else if(text=='hotel' || text=='hotels' || text=='rooms' || text=='room' || text=='5' || text=='4' || text=='3')
    {
        window.open('5starhotel.html','_self');
    }
    else{
        window.open("error.html",'_self');
    }
}
var loadingImage=document.getElementById("loading");
function preLoad()
{
    loadingImage.style.display="none";
}