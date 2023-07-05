                            // Welcome back shadow

// main var [start]

let c1:any=document.querySelector(`.n1`),
    c2:any=document.querySelector(`.n2`),
    c3:any=document.querySelector(`.n3`);

let body=document.body;

let p=document.querySelector(`p`)

// main var [end]

// the functionality

body.addEventListener(`click`,_=>{

    p.style.cssText=`color:white;
                     text-shadow:5px 5px 6px black;`

    let n1:any=Math.floor(Math.random()*255)+1,
        n2:number=Math.floor(Math.random()*255)+1,
        n3:number=Math.floor(Math.random()*255)+1;
        body.style.cssText=`background-color:rgb(${n1},${n2},${n3})`
        c1.textContent=n1;
        c2.textContent=n2;
        c3.textContent=n3;
})


