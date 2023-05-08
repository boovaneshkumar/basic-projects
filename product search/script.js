const search= () =>
{
    const searchbox = document.getElementById("search-item").Value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".item")
    const pname = storeitems.getElementsByTagName("h1")

    for (var i=0;i<pname.length; i++)
    {
        let match = product[i].getElementsByTagName('h1')[0];
        
        if (match)
        {
           let textvalue = match.textContent || match.innerHTML
           if (textValue.toUpperCase.indexof(searchbox) > -1 )
            {
                product[i].style.display="";
            }
            else
            {
                product[i].style.display="None"; 
            }
        }
    }
}