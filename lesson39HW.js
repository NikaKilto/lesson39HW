// 1. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ
// მნიშვნელობებს როგორიცაა : სახელი, გვარი, ასაკი, ელ.ფოსტა და ეს
// ფუნქცია დააბრუნებს ობიექტს რომელსაც ექნება შესაბამისი ფილდები
// რომ შეინახოს გადაწოდებული ინფორმაცია

// function Person(name,lastname,age,mail){
//     return{
//         name: name,
//         lastname: lastname,
//         age: age,
//         mail: mail
//     }
// }

// console.log(Person("nika","kilto",20,"n.k@gmail.com"));


// 2. Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა შემდეგი
// ინფორმაცია: სახელი, გვარი, ასაკი, ელ ფოსტა, სასწავლებელი სკოლა,
// სასწავლებელი უნივერსიტეტი, სამსახურის დასახელება, პოზიცია
// სამსახურში, სამუშაო გამოცდილება წლებში, საცხოვრებელი ქვეყანა,
// საცხოვრებელი ქალაქი, საცხოვრებელი სახლის მისამართი და ეს ფუნქცია
// დააბრუნებს ობიექტს, ობიექტის სტრუქტურა გამართეთ სწორად


// function Person(name,lastname,age,mail,school,
//     university,job,position,experience,country,city,address){
//     if(job=="no"){
//         return{
//             name: name,
//             lastname: lastname,
//             age: age,
//             mail: mail,
//             school: school,
//             university: university,
//             job: "no job",
//             country: country,
//             city: city,
//             address: address
//         }
//     }else{
//         return{
//         name: name,
//         lastname: lastname,
//         age: age,
//         mail: mail,
//         school: school,
//         university: university,
//         job: job,
//         position: position,
//         experience: experience,
//         country: country,
//         city: city,
//         address: address
//         }
//     }
// }

// console.log(Person("nika","kiltava",20,"kiltava","kiltava","kiltava","kiltava","kiltava",3,"kiltava","kiltava","kiltava"));
// console.log(Person("nika","kiltava",20,"kiltava","kiltava","kiltava","no","kiltava",3,"kiltava","kiltava","kiltava"));


// 3. Შექმენით ფუნქცია, რომელსაც პარამეტრების სახით გადაეცემა ობიექტები
// animal ტიპის ( სახელი, ასაკი, ჯიში, სქესი) და ეს ფუნქცია დაფილტრავს
// გადაცემულ ცხოველების მასივს სქესის მიხედვით (სქესი აგდაეცემა მეორე
// პარამეტრის სახით ფუნქციას)


// function Animal(name,age,breed,gender){
//     return{
//         name: name,
//         age: age,
//         breed: breed,
//         gender: gender
//     }
// }

// var animalList = [
//     new Animal("Tom",2,"cat","male"),
//     new Animal("Jerry",1,"dog","female"),
//     new Animal("Spike",5,"hamster","male"),
//     new Animal("Molly",4,"bird","male"),
//     new Animal("Dany",1,"cat","female")
// ]


// function objectFilter(objectArray,gender){
//     return objectArray.filter(object=>object.gender==gender);
// }

// var filteredList = objectFilter(animalList,"male");
// console.log(animalList);
// console.log(filteredList);


// 4. Შექმენით ფუნქციები :
// a. Ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა მასივი humans
// (სახელი, გვარი, ასაკი, სქესი, ელ.ფოსტა, მობილურის ნომერი) და ეს
// ფუნქცია დააბრუნებს Users ის კოლექციას ( სრული სახელი,
// ელ.ფოსტა)


// function humansFilter(objectArray){
//     var usersCollection = [];
//     objectArray.forEach(element => {
//         var fullName = element.name + " " + element.lastname;
//         usersCollection.push(User(fullName,element.mail));
//     });

//     return usersCollection;
// }

// function User(fullname,mail){
//     return{
//         name: fullname,
//         mail: mail
//     }
// }

// function Human(name,lastname,age,gender,mail){
//     return{
//         name: name,
//         lastname: lastname,
//         age: age,
//         gender: gender,
//         mail: mail
//     }
// }

// var humanArray = [
//     new Human('Irakli','Kikaradze',25,'male','iraklik@gmail.com'),
//     new Human('Nino','Gogoberidze',30,'female','ninoggob@gmail.com'),
//     new Human('Tamar','Shalvadze',18,'female','tamars@gmail.com')
// ]

// console.log(humansFilter(humanArray));


// b. Ფუნქცია რომელსაც რომელსაც პარამეტრების სახით გადაეწოდება
// კონტაქტების მასივი(კონტაქტის ობიექტი : სახელი, გვარი,
// მობილურის ნომერი, ელ.ფოსტა, სურათი) და ამ ფუნქციას შეეძლება
// დაფილტროს კონტაქტების მასივი ამ სახელით ან გვარის მიხედვით
// (დაფილტვრის ფუნქციის მუშაობის პრინციპი შემდეგია თუ
// ობიექტის მნიშნელობა შეიცავს გადაცემულ მნიშნელობას მაშინ ეს
// ობიექტი უნდა ამოვარჩიოთ ფილტრაციის შედეგად)

// function contactsFilter(objectArray,search){
//     return objectArray.filter(object => object.name==search || object.lastname==search);
// }

// function Contact(name,lastname,phone,mail,image){
//     return{
//         name: name,
//         lastname: lastname,
//         phone: phone,
//         mail: mail,
//         image: image
//     }
// }

// var contactArray = [
//     new Contact('Irakli','Kikaradze',976456789,'iraklik@gmail.com','url:132443'),
//     new Contact('Nino','Gogoberidze',54354345,'ninoggob@gmail.com','url:1223'),
//     new Contact('Nika','kirkitadze',123439,'nika@gmail.com','url:12243'),
//     new Contact('Nika','kiltava',123439,'nikala@gmail.com','url:122435'),
// ]

// console.log(contactsFilter(contactArray,"Nika"));


// დაწერეთ ლოტოს აპლიკაცია დაარეგისტრირეთ მომხმარებლები
// ინფორმაციით როგორიცაა ( სრული სახელი, პირადი ნომერი, არჩეული
// ციფრები ლოტოს გათამაშებისთვის(7 ლოტოს ციფრი) ) და შექმენით
// ფუნქცია რომელიც დააბრუნებს მასივს სადაც ეწერება ლოტოს მომგებიანი
// კოჭების ციფრები(ლოტოს ციფრები მოცემულია 1 დან 49 შუალედში და
// ასევე მომგებიანია 7 კოჭი) და ასევე შექმენით ფუნქცია რომელსაც
// პარამეტრის სახით გადაეცემა მომხმარებლები და მომგებიანი კოჭები და ეს
// ფუნქცია გამოავლენს მოგებულ მომხმარებელს.

// function User(fullName,ID,lottoNum){
//     return{
//         fullName: fullName,
//         ID: ID,
//         lottoNum: lottoNum
//     }
// }

// function winningNumbers(){
//     var winningList = [];
//     for(var i = 0; i<=7; i++){
//         randomNum=Math.round(Math.random()*49+1);
//         winningList.push(randomNum);
//     }
//     return winningList;
// }

// var UserList = [
//     new User("Irakli Kikaradze", "0101123431", winningNumbers()),
//     new User("Nino Gogoberidze","0101123432",winningNumbers()),
//     new User("Nika Kirkitadze","0101123433",winningNumbers())
// ]

// var lottoWinningNumbers = winningNumbers();

// console.log(UserList);

// function checkWinner(UserList,lottoWinningNumbers){
//     for(var i = 0; i<UserList.length; i++){
//         if(UserList[i].lottoNum.sort((a,b)=>a-b)==lottoWinningNumbers.sort((a,b)=>a-b)){
//             return UserList[i]
//         }
//     }
// }

// console.log(checkWinner(UserList,lottoWinningNumbers));