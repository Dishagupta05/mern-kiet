// console.log('start')
// setTimeout(()=>{
//     console.log('timeout...')
// },6000)
// console.log('end')

// setTimeout(()=>{
//     console.log("time1"),10000})
// console.log("start")
// console.log("out")
// setTimeout(()=>{
//     console.log("time2")
// ,4000})


// function creatorder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('lik123')},10000);
// }
// function makepayment(orderID){
//     console.log(orderID)
// }

// creatorder("shop",makepayment)


// const pr = new Promise((resolve,reject)=>{
//     if(true){
//         resolve();
//         setTimeout(()=>{
//             resolve();
//         },5000);
//     }
//     else{
//         reject();
//     }
// });

// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("done");
//     },10000)
// })

// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("out of stock");})

// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("out of stock");
//     },10000)
// })

// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);})

    // const pr = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         reject("out of stock");
    //     },10000)
    // })

    // setTimeout(()=>{
    //     console.log('first timeout')
    // },0);
    
    // // console.log(pr);
    // pr.then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);})
    
    
// setTimeout(function abc(){
//     console.log('I am one')
// },0);

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')},0);
// })

// setTimeout(function xyz(){
//     console.log('i am two')
// },0);

// pr.then(function b(res){
//     console.log("promise completed",res)
// })

console.log('hello');

// const arr=[10,40,20];

// const ans = arr.forEach((a)=>{
//     console.log(a);
//     return a+2;
// });

// console.log(ans);


// const arr=[10,40,20];
// const arr2 =[12,34,23,56,76]

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a+2;
// });

// console.log(ans);


// const ans2 = arr.map(a=>a**2);
// console.log(ans2);

// const ans3 = arr.map(a=>parseInt(a));
// console.log(ans3);

// const arr4 = [12,34,23,43,21];
// const ans4 = arr4.push(32);
// console.log(arr4);

// const arr = [10,22,32];
// const ans5 = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans5);

// const city = [
//     'delhi','mumbai','chennai','kolkata','pune','India','russia','usa'
// ]

// const ans6 = city.filter((a)=>{
//     if(a.includes('i')|| a.includes('I'))return true;
//     else return false;
// })

// console.log(ans6);

// const city2 = [
//     'delhi india','mumbai india','chennai india',
//     'shanghai , china','street, china',
//     'washington,USA','Texas,USA','Iraq'
// ]

// const ans7 = city2.filter((a)=>{
//     const ns = a.toLowerCase();
//     console.log(ns);
//     if(ns.includes('india')){return true;}
//     else false;
// });

// const ans3 = city2.filter(a=>a.toLowerCase().includes('india'));

// console.log(ans7);
// console.log(ans3);


// const arr = [2,4,8,9];

// const st = ['df','df','dr','d']

// const ans = st.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d);
//     return a+b;

// });
// console.log(ans);

