let obj = {
    Ipsita:{ClassName: "B Tech", Roll:190, Subjects: ["DBMS","CN","RM"]},
    ayesha:{ClassName: "B Tech", Roll: 189, Subjects: ["DBMS","CN","RM"]},
    1 : undefined

} 
console.log(obj);
console.log(obj.Ipsita.Subjects[0]);

console.log(obj["ayesha"]);

delete obj.ayesha.ClassName;
console.log(obj.ayesha);

//Example
let SVU = {
    Grp_A: {
        
        Class: "B Tech",
        Subjects: ["DBMS","CN","RM","NS"],
        P_info:[
            { name: 'Ipsita', Roll: 134, Id: 'SVU/004' },
            { name: 'Atrayee', Roll: 289, Id: 'SVU/115' },
        ],
       
    },
    Grp_B:{
        Class: "B Tech",
        Subjects: ["DBMS","CN","CD","OS"],
        P_info:[
            { name: 'Nilanjana', Roll: 119, Id: 'SVU/114' },
            { name: 'Sneha', Roll: 375, Id: 'SVU/220' },
        ],
    
    }
}
console.log(SVU.Grp_B.P_info[1].name);//Sneha

console.log(SVU.Grp_A.Subjects[2]);//RM

