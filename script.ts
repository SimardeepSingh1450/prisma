import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
//If we want to log the Query code(SQL) then use:
// const prisma = new PrismaClient({log:["query"]})


async function main(){
    //... you will write your Client Queries here

    //Client Create One Operation: //NOTE->Below here user is the model name in lowercase from schema.prisma
    // const user=await prisma.user.create({
    //     data:{
    //         name:"sala7",
    //         email:"sala7@gmail.com",
    //         age:1,
    //         UserPreference:{
    //             create:{ //NOTE -> create here is a inbuilt function used 
    //                 emailUpdates:true
    //             }
    //         }
    //     },
    //     //Now we want to display our UserPreference model data aswell then we use the keyword -> include:{}
    //     // include:{
    //     //     UserPreference:true
    //     // },
    
    //     //If we want to display only some specific properties from the other model data then use keyword -> select:{}    
    //     //Please NOTE -> We can use either include or select , both cannot be used at once
    //     // select:{
    //     //     name:true
    //     // }

    //     //Another exmaple of select:
    //     select:{
    //         name:true,
    //         UserPreference:{select:{id:true}}
    //     }
    //     })
    // console.log(user);
 


    //CreateMany Operation: NOTE->We cannot access another model data in console log using -> include and select for createMany
    // const user=await prisma.user.createMany({//For create many we wrap our data {} with []
    //     data:[{
    //         name:"sala8",
    //         email:"sala8@gmail.com",
    //         age:1
    //     },
    //     {
    //         name:"sala9",
    //         email:"sala9@gmail.com",
    //         age:1
    //     }
    
    // ]
    // })

    // console.log(user);//This user does not prints data of array , it returns us only the length of the array





    //Read Operation (All): This belowOperation gives data of all users
    // const users=await prisma.user.findMany();
    // console.log(users)





    //Read Operation via findUnique :
        // const user=await prisma.user.findUnique({
        //     where:{
        //         email:"sala7@gmail.com"
        //     }
        // })
        // console.log(user); //This returns all the information of the unique email user
    


    //Read Operation via findUnique but finding via multiple-fields making the use of @@unique in the schema.prisma :
    // const user=await prisma.user.findUnique({
    //         where:{
    //             age_name:{  //As in the schema.prisma model we had -> @@unique([age,name]) , hence to make its use here we search by putting _(underscore) betweeen them :
    //                 age:1,
    //                 name:"sala7"
    //             }
    //         }
    //     })
    //     console.log(user); //This returns all the information of the unique email user

    
    //Read Operation via findFirst ->This gives  us the firstitem in the search operation:
    // const user=await prisma.user.findFirst({
    //         where:{
    //                 name:"sala7"
    //             }
    //     })
    //     console.log(user);
    



    //Read Operation findMany but getting the first one which matches the unique variables inside-> distinct keyword:
    // const user=await prisma.user.findMany({
    //     where:{
    //         name:"sala7"
    //     },
    //     // distinct:["name"] //We are able to use this distinct keyword due to usage of -> @@unique([age,name]) in the schema.prisma
    //     //This above distinct keyword returns us all the items from the database whose names are different from the rest
    //     distinct:["name","age"] 
    //     //This above distinct keyword returns us all the items from the database whose names are different from the rest OR whose ages are different from the rest

    // })
    // console.log(user);




    //Read Operation findMany with use of keyword -> take :

    // const user=await prisma.user.findMany({
    //     where:{
    //         name:"sala7"
    //     },
    //     orderBy:{    //This keyword arranges the filtered data in ascending order , if we need it in descending order then we can use -> desc inplace of asc
    //      age:"asc"  
    //      },
    //     take:2, //take keyword returns the first items from the database , here as take:2 means first two items from the databse will be fetched which match where conditions
    //     //NOTE->If number of take is more than items then all the items are fetched no error occurs
    //     skip:1//skip keyword skips the matching results accordinf to the number given to skip
    // })

    // console.log(user);



    //Delete Operation:
    // await prisma.user.deleteMany();





    //Advanced Filtering Operations:
    //1.Read Operation Using the equals keyword :
    // const user=await prisma.user.findMany({
    //     where:{
    //         name:{equals:"sala7"} //Equals means we need the exact name -> sala7
    //     }
    // })
    // console.log(user);


    //2.Read Operation Using the not keyword: 
//     const user=await prisma.user.findMany({
//         where:{
//             name:{not:"sala7"} //not -> This returns a array in which items dont have the condition we are searching for
//         }
//     })
//     console.log(user);

    
// }

    //3. Read Operation using in and notIn keyword :
    // const user=await prisma.user.findMany({
    //     where:{
    //         name:{in:["Sally","sala7"]} //Returns us an array with names matching either Sally or sala7
    
    // NOTE->The other one which we can use inplace of in keyword is notIn

    //     }
    // })
    // console.log(user);


    //4. Read Operation using lt (lessthan) keyword :
    // const user=await prisma.user.findMany({
    //     where:{
    //         name:"sala7",
    //         age:{lt:10} //NOTE-> For greater than -> gt keyword
    //         //NOTE -> We also have greater-than-orequalto => gte keyword and less-than-orequalto => lte keyword
    //     }
    // })
    // console.log(user);


    //5. Read operation using contains keyword :
    // const user=await prisma.user.findMany({
    //     where:{
    //         email:{contains:"@gmail.com"}//contains keyword is used if a part of it exists inside the variable
    //         //NOTE -> Similar to contains we have endsWith and startsWith keyword
    //     }
    // })
    // console.log(user);


    //6.Read Operation using AND keyword :
    // const user=await prisma.user.findMany({
    //     where:{
    //        AND:[{email:{endsWith:"@gmail.com"}},{name:"sala7"}] 
    //        //NOTE -> Inplace of AND keyword we can also use: -> OR , NOT
    //     }
    // })
    // console.log(user);




    //Client Update Operations :
    //The update operation takes in 2 arguments the where and data to update
    //1. Updating Only One Item:
    // const user = await prisma.user.update({
    //     where:{
    //         email:"sala7new@gmail.com" //Old Data
    //     },
    //     data:{
    //         email:"sala72@gmail.com"//Updated Data
    //     }
    // })
    // console.log(user);


    //2. Updating Many :
    // const user = await prisma.user.updateMany({
    //     where:{
    //         name:"sala7" //Old Data
    //     },
    //     data:{
    //         name:"New sala7"//Updated Data
    //     }
    // })
    // console.log(user);//This updateMany returns the number of items updated


    //NOTE-> IMPORTANT -> When updating a field in an item in the where section we must put in the variable having @unique if our variables to identify and update are different




    //3.Updating One using mathematics:
    // const user = await prisma.user.updateMany({
    //     where:{
    //        email:"sala72@gmail.com" //Old Data
    //     },
    //     data:{
    //         age:{ //updated Data
    //             multiply:10//Here we can also use keywords -> divide ,increment ,decrement
    //         }
    //     }
    // })
    // console.log(user);




    
    //Connecting existing Relationships:
    //Creating id for the model to whom we want to connect:
    // const preference=await prisma.userPreference.create({
    //     data:{
    //         emailUpdates:true,
    //         user:{
    //             create:{
    //                //code
    //             }
    //         }
    //     }
    // })
    // console.log(preference);


    //Now connecting (2nd Step) :
    // const user = await prisma.user.update({
    //     where:{
    //        email:"sala72@gmail.com" //Old Data
    //     },
    //     data:{
    //         UserPreference:{
    //             connect:{ //NOTE-> For connection we need id from the model to whom we have written this connect , here it is -> UserPreference
    //                 id://Here put the id generated for the class in above code
    //             }
    //             }
    //         }
        
    // })
    // console.log(user);


    //NOTE-> If we want to disconnect the id then inplace of connect use -> disconnect:true  ->In our case this will set userPreferenceId to -> null





    //Delete Advanced Operations:
    //Deleting a single item :
    // const user=await prisma.user.delete({
    //     where:{
    //         email:"sala7@gmail.com"
    //     }
    // })
    //console.log(user);



    //Deleting Many:
    // const user=await prisma.user.deleteMany({
    //     where:{
    //         age:{gt:20}
    //     }
    // })
    // //console.log(user);


}

main()
.catch(e=>{
    console.error(e.message)
})
.finally(async ()=>{
    await prisma.$disconnect()
})
