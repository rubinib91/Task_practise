const student=[{
    id:1,
    name:"Anbu",
    marks:[90,60,50] },
   { id:2,
    name:"kavi",
    marks:[45,60,75]},
    {
        id:3,
        name:"Kani",
        marks:[60,70,80]
    }]
console.log(student)


const total=(student)=>{
    let totalmarks=0
    let avgmarks=0
    let ispassed=true
    let topper=student[0].marks
    for(let i=0;i<student.length;i++)
{

        

    
        for(let j=0;j<student[i].marks.length;j++){
            totalmarks+=student[i].marks[j]
            if(student[i].marks[j]<=50)
            {
                ispassed=false
            }
            
        }
                    avgmarks=totalmarks/student[i].marks.length

        
                    console.log(`The student is ${student[i].name} and totalmarks is ${totalmarks} and average marks is ${avgmarks} and he is ${ispassed}`);
    }

}

total(student)


