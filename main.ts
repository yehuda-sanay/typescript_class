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


//שאלה 39
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
//         usersObject.sort((a,b)=>a.age-b.age);
//        return userYoungOrOld == "young" ? usersObject[0] : usersObject[usersObject.length-1];  
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
//      returnRedOrGreen():string{
//         return this.userValibel ? "green":"red"
//     }
// }
// const Yehuda:Student=new Student("yehuda","sanay",31,"05050","yehudasanay1","23/05/91")
// const Shay:Student=new Student("shay","nis",50,"05050","yehudasanay1","23/05/91")
// const Sara:Student=new Student("sara","avraham",30,"05050","yehudasanay1","23/05/91")
// const Nimi:Student=new Student("nimi","sanay",60,"05050","yehudasanay1","23/05/91")
// console.log(User.youngOrOld("dkfj",Yehuda,Sara,Nimi));
// Yehuda.setUserValibel=true;
// Sara.setUserValibel=false
// console.log(Sara.returnRedOrGreen())


//שאלה 42 43
// class Rom{
//     width:number;
//     length:number;
//     size:number;
//     private window:boolean=false
//     constructor(width:number,length:number,size:number){
//         this.width=width;
//         this.length=length;
//         this.size=size;
//     }
//     get getWindow():boolean{
//         return this.window;
//     }
//     set setWindow(isWindow:boolean){
//         this.window=isWindow;
//     }
//     static romBigOrSmall(bigOrSmall:string,...romArray:Rom[]){
//          romArray.sort((a,b)=>a.size-b.size);
//         return bigOrSmall == "small" ? romArray[0] : romArray[romArray.length-1];  
//      }
//     // static romBigOrSmall(bigOrSmall:string,...romArray:Rom[]){
//     //     bigOrSmall=="small" ? romArray.sort((a,b)=>a.size-b.size)[0]:romArray.sort((a,b)=>b.size-a.size)[0]
//     // }
// }

// class Kitchen extends Rom{
//     numOfClosets:number;
//     constructor(width:number,length:number,size:number,numOfClosets:number){
//         super(width,length,size)
//         this.numOfClosets=numOfClosets;
//     }
//     printKitchenDetels():string{
//         return `${this.width} ${this.length} ${this.numOfClosets}`
//     }
//     returnHaveWindowOrNot(){
//         return this.getWindow==true ? "have Window":"close room"
//     }
// }
// const Kitchen1:Kitchen=new Kitchen(36,63,52,41);
// const Kitchen2:Kitchen=new Kitchen(56,23,12,87);
// const Kitchen3:Kitchen=new Kitchen(96,36,25,12);
// console.log(Rom.romBigOrSmall("big",Kitchen1,Kitchen2,Kitchen3))
// Kitchen1.setWindow=false
// console.log(Kitchen1.returnHaveWindowOrNot())

// class Living_rom extends Rom{
//     seatsNum:number;
//     airDirection:string="";
//     constructor(width:number,length:number,size:number,seatsNum:number,airDirection:string){
//         super(width,length,size)
//         this.seatsNum=seatsNum;
//         this.airDirection=airDirection;
//     }
//     printLiving_romDetels(){
//         console.log(`${this.width} ${this.length} ${this.seatsNum} ${this.airDirection}`)
//     }
//     printWindowAndAirDirection():string{
//         return this.getWindow==true ? `"have Window" ${this.airDirection}`:"close room"
//     }

// }
// const Living_rom1:Living_rom=new Living_rom(32,54,874,3,"west")
// const Living_rom2:Living_rom=new Living_rom(54,21,85,96,"north")
// const Living_rom3:Living_rom=new Living_rom(65,874,96,3,"east")
// console.log(Living_rom.romBigOrSmall("small",Living_rom1,Living_rom2,Living_rom3))

class Product{
    width:number;
    length:number;
    weight:number;
    price:number;
    private ordered:boolean=false;
    constructor(width:number,length:number,weight:number,price:number){
        this.width=width;
        this.length=length;
        this.weight=weight;
        this.price=price;
    }
    get getOrder():boolean{
        return this.ordered;
    }
    set setOrdered(itsOrdered:boolean){
        this.ordered=itsOrdered;
    }
    static expensiveOrCheap(expectation:string="expensive",...productArray:Product[]){
        productArray.sort((a,b)=>a.price-b.price);
        return expectation=="expensive" ? productArray[productArray.length-1]:productArray[0];
    }
}

class Computer extends Product{
    vat:number;
    constructor(width:number,length:number,weight:number,price:number,vat:number){
        super(width,length,weight,price)
        this.vat=vat;
    }
    printCoputerDetels():void{
        console.log(`width:${this.width},length:${this.length},weight:${this.weight},price:${this.price},vat:${this.vat}`)
    }

    printIfComputerIsOreder():string{
        return this.getOrder==true ? "order":"need to order";
    }
}
const Computer1:Computer=new Computer(23,12,65,98,78);
const Computer2:Computer=new Computer(45,56,45,87,99);
const Computer3:Computer=new Computer(54,13,54,54,42);
console.log()








