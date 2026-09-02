let inputField = document.getElementsByClassName('inputField')[0]

let add = document.getElementsByClassName('add')[0]

let title = document.getElementById('title')

let description = document.getElementById('description')

let submit = document.getElementsByClassName('submit')[0]

let arr = [];

add.addEventListener('click',function(){
    inputField.style.display = 'flex' 
})



submit.addEventListener('click',function(){
    let object = {
        title : title.value ,
        description : description.value
    }
    arr.push(object)
    inputField.style.display = 'none'

    
        let newDiv = document.createElement('div')
        newDiv.classList.add('output')
        document.body.append(newDiv)
    
        let newH = document.createElement('h1')
        newH.classList.add('h1')
        newDiv.append(newH)
    
        let newP = document.createElement('p')
        newP.classList.add('p')
        newDiv.append(newP)

        let newButton = document.createElement('button')
        newButton.classList.add('submit')
        newDiv.append(newButton)
        newButton.textContent = 'Delete'

        let newAdd = document.createElement('button')
        newAdd.classList.add('submit')
        newDiv.append(newAdd)
        newAdd.textContent = '✎'

        newAdd.addEventListener('click',function(){
            inputField.style.display = 'inline-block'
            title.value = object.title;
            description.value = object.description;
            newDiv.remove()
        })

        let index = arr.length-1

        newButton.addEventListener('click',function(){
            newDiv.remove()
        })

    
        newH.textContent = object.title;
        newP.textContent = object.description; 

        title.value = ''
        description.value = ''
    
})
