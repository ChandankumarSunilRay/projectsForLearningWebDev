<!-- query selectors -->
document.getElementById('title').className                        --- with this we can find class name with id
document.getElementById('title').getAttribute('class')            --- this gives class 
document.getElementById('title').getAttribute('id')               --- this gives id 
document.getElementById('title').setAttribute('class','chandan')  --- here we set class from heading to chandan using setAttribute (overwrote heading to chandan)
-------document.getElementById('title').setAttribute('class','chandan heading ') this does not overwrite previous one 

query_selector:
    document.querySelector('h1'); -> it will give first h1
    document.querySelector('#title')
    document.querySelector('.heading')
    document.querySelector('any input attrubute[type="password"]')
    document.querySelector('p:first-child')
    document.querySelector('ul')
    turnGreen.innerText

query_selector_all:
    document.querySelectorAll('li')
        it returns a nodelist(it's not an array it is a nodelist (for each is available map is not available ))
# we can convert nodelist to array[to use arrys's funcionality]

getElementsByClassName:
    it returns html collections:
        Array.from(tempClassList)     -- it has been converted
        tempClassList.forEach(function(li){
            li.style.color = 'orange'
        })

        












<!-- we can put style(CSS) using this -->
title.style="color:red"
title.style="padding = 50px"
title.style="background-color:green"

<!-- fetching value  -->
title.innerHTML     -- only visible content
title.textContent   -- it gives all content 
title.innerHTML     -- it gives all value including html tags like h1 , span etc 

