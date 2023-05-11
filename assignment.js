
// Write an asynchronous function that accepts a message string 
// and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.

let felicitation = () =>{
    console.log('Congratulations you did it')
};
felicitation();
setTimeout(felicitation,3000);


// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message 
//  if the task is successful, and a custom error message if there's an error.



let data=[{}];
let performTask= new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve("task is successful")},2000);
    }
    else{
      setTimeout(()=> {reject("An error has occured")},2000);
    }
});
async function checkTask(){
    let response=await performTask;
    console.log({response});
}
checkTask();



  


 
  
  
  
  
  
  
  



