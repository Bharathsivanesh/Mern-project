// function sucess()
// {
//     console.log("sucess");
// }
// function fail()
// {
//     console.log("fails");
// }
// function exe(data,callback)
// {
//    if(data)
//    {
//     console.log(`balanace:${data}`);
//    }
//    setTimeout(callback,2000);
// }
// function trigger(data)
// {
//     if(data>0)
//     {
//         exe(1,sucess);
//     }
//     else{
//         exe(fail);
//     }
// }
// trigger(1);

// const api = fetch("https://66e526d55cc7f9b6273c69d9.mockapi.io/users");
// const apijson = api.json();
// console.log(apijson);
// return apijson;

async function method() {
  const api = await fetch("https://66e526d55cc7f9b6273c69d9.mockapi.io/users");
  const apijson = await api.json();
  console.log(apijson);
  return apijson;
}
const a=method();
console.table(a);