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

// let num = parseInt(prompt("Daxil edin")); 

// let originalNum = num;
// let reversedNum = 0;
// let remainder;

// while (originalNum > 0) {
//     remainder = originalNum % 10;
//     reversedNum = reversedNum * 10 + remainder;
//     originalNum = Math.floor(originalNum / 10);
// }

// if (num === reversedNum) {
//     console.log("The number is a palindrome.");
// } else {
//     console.log("The number is not a palindrome.");
// }

// let items =[1,2,3,4,5,17,30,39,12]
// let cutItems=0
// let tekItems=0

// for (let i = 0; i < items.length; i++){
//     if(items[i]%2==0){
//         cutItems+=items[i]
//     }
//     else{
//         tekItems+=items[i]
//     }
// }
// if (tekItems>cutItems) {
//    console.log(tekItems - cutItems)
// }
// else{
//     console.log(cutItems - tekItems)
// }

//practice#01

// let arr=[66,3,2,34,1,65,40,21,30]
// let cutItems=0
// let tekItems=0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         cutItems*=arr[i]
//     }
//     else{
//         tekItems*=arr[i]
//     }
// }
// if (tekItems>cutItems) {
//     console.log("tek ededler boyuk")
// }
// else if (tekItems=cutItems){
//     console.log("tek ededler boyuk")
// }
// else{
//     console.log("cut ededler boyuk")
// }

//practice#02

// let arr=[66,3,2,34,1,65,40,21,30]
// let boyukEded=arr[0]
// let kicikEded=arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>boyukEded){
//         boyukEded=arr[i]
//     }
//     else if (arr[i]<kicikEded) {
//         kicikEded=arr[i]
//     }
// }
// console.log(kicikEded * boyukEded)

//practice#03

// let arr=[66,3,2,34,1,65,40,21,30]
// let sum=0

// for (let i = 0; i < arr.length; i++) {
//      if(i%2!==0){
//         sum+=arr[i]
//      }
// }
// console.log(sum);

//practice#04

// let arr=[66,3,2,34,1,65,40,21,30]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
            
//         }
//     }
// }
// console.log(arr);

//practice#05

// let arr=[66,3,2,34,1,65,40,21,30]
// let counter=0
// let sum=0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0){
// sum+=arr[i]
// counter++
//     }
// }
// orta=sum/counter
// console.log(orta);

//practice#06

// let arr=[66,3,2,344,1,65,40,-121,30]

// let sum=0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]/100>=1 || arr[i]/100<=-1) {
//         sum+=arr[i]
//     }  
// }
// console.log(sum);

//practice#07

// let arr=[66,3,2,34,1,65,40,21,30]
// let specialNum=34
// let counter=0

// for (let i = 0; i < arr.length; i++) {
//     if (specialNum==arr[i]) {
//         counter++
//         console.log("Index bu ededdi",i);
//     } 
// }
// if (counter==0) {
//     console.log('Burda yoxdu');
// }

//practice#08

// let arr=[-1,2,3,-5,-6,8,11,-2]
// counterMusbet=0
// counterMenfi=0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>=0){
//         counterMusbet++
//     }
//     else{
//         counterMenfi++
//     }
// }
// if (counterMusbet>counterMenfi) {
//     console.log("Musbet eded menfi ededen coxdu");
// }
// else if (counterMusbet=counterMenfi) {
//     console.log("Musbet eded menfi edednen eynidi");
// }
// else{
//     console.log("Menfi eded musbet ededenen eynidi");
// }

//function#01>

// let arr=[12,23,324,435,235,260,16,82,93,14]
// EnBoyuk=arr[0]

// function cutEnBoyuk(arr){
//         for (let i = 0; i < arr.length; i++) {
//            if (arr[i]%2==0) {
//             if (arr[i]>EnBoyuk) {
//                 EnBoyuk=arr[i]
//                }
//            }
//         }
//         return EnBoyuk
        
// }
// let cavab = cutEnBoyuk(arr)
// console.log(cavab)

//function#02>

// let arr = [10, 23, 324, 435, 235, 260, 16, 82, 93];
// let enKicik = Infinity;

// function tekEnKicik(array) { 
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2== 1){
//             if (array[i] < enKicik) {
//                 enKicik = array[i];
//             }
//         }
//     }
//     return enKicik;
// }

// function#03

// let arr = [10, 23, 324, 435, 235, 260, 16, 82, 93,10];
// let m=parseInt(prompt('Enter the Number'))
// let counter=0

// function findSame(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==m) {
//             counter++
//         }    
//     }
//     return counter
// }

// console.log(`verdiyiniz eded defe ${findSame(arr)} tekrarlanir`);

// function#04>

// let arr = [10, 23, 324, 435, 235, 260, 16, 82, 93,10];
// let sum=0
// let counter=0

// function sumExceptFirstLast(arr) {
//     arr.shift()
//     arr.pop()
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//         counter++
//     }
//     return sum/counter
// }
// let average=sumExceptFirstLast(arr)


// console.log(average);

// function#05>

// let arr = ["Football","Apple","Book","Gaming","TV"];

// function writeFiveLetter(array){
//     let voidarr=[]
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].length>5)
//         voidarr.push(array[i])
//     }
//     return voidarr
// }
// console.log(writeFiveLetter(arr));

// #function#06

// let arr = [1,2,3,4]
// function multiplication(num){
//     return num*2
// }
// function subtraction(num){
//    return num-2
// }
// function smth(arr,callback){
//     arrmultiandsub=[]
//     for (let i = 0; i < arr.length; i++) {
//       arrmultiandsub.push(callback(arr[i]))  
//     }
//     return arrmultiandsub
// }
// console.log(arr,smth(arr,subtraction),smth(arr,multiplication));

//function#07


