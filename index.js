// let items = [1,2,3,4,5,6,7,8,9,10,11]
// let j=0
// for (let i = 0; i < items.length; i++) {
//     for (let index = 1; index < items.length; index++) {
//        if (items[i]== items[index]) {
//         j++
//        }
//     }
// }
// if (j>=1) {
//     console.log("true")
// }
// else{
//     console.log("false")
// }

//task


// let sum=0
// for (let index = 1; index < 100; index++) {
//     if(index%2==1){
//         sum+=index
//     }
// }
// console.log(sum)

// task

// let sum=0
// for (let index = 1; index < 250; index++) {
//     if(index%2==0){
//         sum++
//     }
// }
// console.log(sum)

// task

// let sum=0
// let counter=0

// for (let index = 1; index < 75; index++) {
//     if(index%2==1){
//         sum+=index
//         counter++
//     }
// }
// let orta=sum/counter
// console.log(orta)

// task


// let M=parseInt(prompt("ededi daxil edin"))
// let sum=0
// let counter=0
// for (let index = 1; index <= M; index++) {
//     if(index%15==0){
//         sum+=index
//         counter++
//     }
// }
// let orta=sum/counter
// console.log(orta)

//task

//  let sumcut=0
//  let countertek=0
//  let sumtek=0
//  let countercut=0
// for (let index = 1; index <= 100; index++) {
//     if(index%2==1){
//         sumtek+=index
//         countertek++
//     }
//     else if(index%2==0){
//         sumcut+=index
//         countercut++
//     }
// }
// let ortacut=sumcut/countercut
// if(sumtek>ortacut){
//     console.log("Tek ededlerin cemi cut edelerin ortasindan boyukdu")
// }
// else if(ortacut>sumtek){
//     console.log("Tek ededlerin cemi cut edelerin ortasindan azdi")
// }
// else{
//     console.log("Ededler beraberdi")
// }

//task

// let counter=0
// for (let index = 1; index <= 100; index++) {
//     if(index%3==0 && index%2==0 && index-10>=0){
//         counter++
//     }
// }
// console.log(counter)

//task

// let arr =[12,32,43,54,67,87]
// for (let index = 0; index < arr.length; index++){
//    if(arr[index]%2==1)
//    console.log(index)
// }

//task

// let arr =[12,32,43,54,67,87]
// let counter=0
// for (let index = 0; index < arr.length; index++){
//    if(arr[index]%2==0)
//    counter++
//    console.log(counter)
// }

//task

// eded=124
// mertebe=0
// while(eded>=1){
//     mertebe++;
//     qaliq=eded%10;
//     eded=eded-qaliq;
//     eded/=10;
//     console.log(`${mertebe} eded ise ${qaliq}`)
// }
// console.log(`mertebenin sayi ${mertebe}`)