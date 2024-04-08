// const firstnamechange =(e) =>{
//     const vale=e.target.value;
//     if(vale.length>3){
//     console.log('correct');}

// }
// const submitform =(e)=>{
//     e.preventDefault();
//     const t=e.target;
//     for(let i=0;i<t.length;i++){
//         console.log(t[i].value);
//         console.log(t[i].type);

//     }

// }

// const submitform =(e)=>{
//     e.preventDefault();
//     const t=e.target;
//     for(let i=0;i<t.length;i++){
//         const ty=t[i].type;
//         const vt=t[i].value;
//         console.log(ty,vt);
//         if(ty=='checkbox'){
//             console.log(t[i].checked);
//         }

//     }

// }

function submitform(e) {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;

        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checked') {
                res[nm] = vl;
            }
        }

        
    }

    console.log(res);

}





