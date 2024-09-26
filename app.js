// const btn = document.getElementById('btn')
// const content = document.getElementById('content')

// btn.onclick = () => {
//     const newContent = document.createElement('p')
//     newContent.textContent = 'нов ТЕКС'
//     content.appendChild(newContent)
// }



// const remove = document.getElementById('remove')
// const content = document.getElementById ('content')
// const appear = document.getElementById ('appear')
// const appen = document.getElementById ('appen') 

// remove.onclick = () => {
//     content.remove()

// }

// appear.onclick = () => {
//     const newContent = document.createElement ('p')
//     newContent.textContent = 'Content'
//     content.appendChild (newContent)
//     console.log (newContent);

// }

const remove = document.getElementById('remov')
const  appear = document.getElementById('appear')
const  content = document.getElementById('content')

appear.onclick = ()=> {
    const newContent = document.createElement('button')
    newContent.textContent =('mashrap','удалит')
    content.appendChild(newContent)
}


remove.onclick = () => {
    content.remove()
}

// remove.onclick = ()=> {
//     const newContent = document.createElement('button')
//     newContent.textContent ='mashrap'
//     content.removeChild (newContent)
// }




