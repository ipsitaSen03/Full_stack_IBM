let str = "SV University";

console.log(str.length);
/*
console.log(str.length-1);

console.log(str[2]);

console.log(str[str.length-1]);

//str[0] = "A";
console.log(str)

let arr = [1,2,3, "Rishita",1.12, true, false,null,undefined,""];

console.log(arr);

console.log(arr[arr.length-2]);

console.log(arr[3]);

arr.push("sneha");
console.log(arr);

arr[4] = "Ipsita";
console.log(arr);

arr.pop();
console.log(arr);

//slice
//splice
*/

let obj = {
    Ipsita:{ClassName: "B Tech", Roll:190, Subjects: ["DBMS","CN","RM"]},
    ayesha:{ClassName: "B Tech", Roll: 189, Subjects: ["DBMS","CN","RM"]},
    1 : undefined

} //
console.log(obj);
//console.log(obj.Ipsita.Subjects[1]);

//console.log(obj["ayesha"]);

//obj.ayesha = "Myname"
//console.log(obj);

delete obj.ayesha;

console.log(obj);

obj.Nilu = { Roll : 111 , Hobbies:["Dance" , "reading books"]}
obj.Nilu = { Roll : 225 , Hobbies:["Dance" , "reading books"]}

console.log(obj);


//obbject literal
//using new keyword
//constructor

let name = "Suchismita Das";
//let class = "B Tech"; // will give error bcz class is a reserved word 

let Class = "b Tech";
let hobbies = ["dance" , "drawing"];

let NewObj ={
    name , Class, hobbies
}
console.log(NewObj);

let ans = [1,2,3,[9,4,6,[5,8,1]]]
console.log(ans[3][3][0]);


let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2:{

    }
}

console.log(superHeroes[1].villains[1].health);//first 1 is key  2nd 1 is index of villains