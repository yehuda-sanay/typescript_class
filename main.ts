// class Viacel{
//     company:string;
//     model:string;
//     color:string;
//     constructor(company:string,model:string,color:string){
//         this.company=company;
//         this.model=model;
//         this.color=color
//     }
// }

// class Elephant{
//     height:number;
//     etype:string;
//     age:number;
//     contry:string;
//     constructor(height:number,etype:string,age:number,contry:string){
//         this.height=height;
//         this.etype=etype;
//         this.age=age;
//         this.contry=contry;
//     }
//     printAllDetels(){
//         return `${this.height} ${this.etype} ${this.age} ${this.contry}`
//     }
// }
// const Mye:Elephant=new Elephant(54,"big",96,"israel")
// console.log(Mye);
// console.log(Mye.printAllDetels());

// class Pants{
//     size:string;
//     color:string;
//     cloth:string;
//     length:number;
//     available:boolean;
//     constructor(size:string,color:string,cloth:string,length:number,available:boolean){
//         this.size=size;
//         this.color=color;
//         this.cloth=cloth;
//         this.length=length;
//         this.available=available;
//     }
//     private printPantsDetels(){
//         `${this.size} ${this.color} ${this.cloth} ${this.length} ${this.available}`
//     }
// }
// const Mypants:Pants=new Pants("xl","black","coton",54,true)
// console.log(Mypants)

// class Sportsman{
//     fullName:string;
//     dateofbirth:Date;
//     spoetType:string;
//     ssex:string;
//     constructor(fullName:string,dateofbirth:Date,spoetType:string,sex?:string){
//         this.fullName=fullName;
//         this.dateofbirth=dateofbirth;
//         this.spoetType=spoetType;
//         this.ssex=sex? sex:"no grnder";
//     }
//     protected printSportsmanDetels(){
//       return !this.ssex ? `${this.fullName} ${this.dateofbirth} ${this.spoetType}`: `${this.fullName} ${this.dateofbirth} ${this.spoetType} ${this.ssex}`
//     }
// }

// class Soccerplayer extends Sportsman{
//     soccerGroup:string;
//     soccerTeam:boolean;
//     constructor(fullName:string,dateofbirth:Date,spoetType:string,soccerGroup:string,soccerTeam:boolean,sex?:string){
//         super(fullName,dateofbirth,spoetType,sex)
//         this.soccerGroup=soccerGroup;
//         this.soccerTeam=soccerTeam;
//     }
//     soccerDetels(){
//         return `${super.printSportsmanDetels()} ${this.soccerGroup} ${this.soccerTeam}`
//     }
// }

// class User{
//     fullName:string;
//     age:number;
//     password:string;
//     private anvalibel:boolean=true;
//     constructor(full_name:string,age:number,password:string){
//         this.fullName=full_name;
//         this.age=age;
//         this.password=password;
//     }
//     get userValibel():boolean{
//         return this.anvalibel;
//     }
//     set setUserValibel(isValibel:boolean){
//         this.anvalibel=isValibel;
//     }
//     static youngOrOld(userYoungOrOld:string,...usersObject:User[]){
//         let newObjectArray:User[]=usersObject.sort((a,b)=>a.age-b.age);
//        return userYoungOrOld == "young" ? newObjectArray[0] : userYoungOrOld[userYoungOrOld.length-1];  
//     }
//     returnRedOrGreen():string{
//         return this.anvalibel ? "green":"red"
//     }
// }

// class Student extends User{
//     email:string="";
//     dateOfBirth:string="";
//     firstName:string="";
//     lastName:string="";
//     constructor(firstname:string,lastName:string,age:number,password:string,email:string,dateOfBirth:string){
//         super(firstname+lastName,age,password)
//         this.firstName=firstname;
//         this.lastName=lastName;
//         this.dateOfBirth=dateOfBirth;
//         this.email=email;
//     }
//     returnDetels():string{
//         return `${this.firstName} ${this.lastName} ${this.age} ${this.password} ${this.email} ${this.dateOfBirth}`
//     }
// }
// const Yehuda:Student=new Student("yehuda","sanay",31,"05050","yehudasanay1","23/05/91")
// const Shay:Student=new Student("shay","nis",50,"05050","yehudasanay1","23/05/91")
// const Sara:Student=new Student("sara","avraham",30,"05050","yehudasanay1","23/05/91")
// const Nimi:Student=new Student("nimi","sanay",60,"05050","yehudasanay1","23/05/91")
// let myArray:User[]=[Yehuda,Shay,Sara,Nimi]
// console.log(User.youngOrOld("young",myArray));

