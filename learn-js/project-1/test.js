//Create a paragraph child for parent for button click
let btn=document.querySelector("button")
let parent=document.querySelector(".parent")

//add evnt lsnr to btn
btn.addEventListener('click',()=>{
    //create paragraph element
    let para=document.createElement('p')
    //add content
    para.textContent='This is para'
    //add para to parent
    parent.appendChild(para)
})


//array
let skills=['react','angular','generative AI','node']
let skillsElement=document.querySelector(".skills")

for(let s of skills){
    //create h3
    let h3=document.createElement("h3")
    //add content
    h3.textContent=s
    //add to parent
    skillsElement.appendChild(h3)
}

