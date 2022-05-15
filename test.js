function  computeNum(headData){
   let num = 0
    for(let i = 0;i<headData.length;i++){
       if(headData[i].children!==undefined){
           console.log(headData[i].children)
          headData[i].children.map(item=>{
               num++
          })
       }else{
           num++
       }
    }
    return num
  }

console.log(computeNum([
    {children:[{name:1},{name:2}]},
    {name:1},
    {name:1},
    {name:1},
    {children:[{name:1},{name:2}]}
]))