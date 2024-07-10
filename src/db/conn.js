const mongoose=require('mongoose');
//schema
// const UsersSchema=new mongoose.Schema({
//     name:String,
//     age:Number
// })
//model
//const UserModel=mongoose.model('users',UsersSchema);

const main=async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
    console.log('connected to mongodb');

    // const newData=new UserModel({
    //     name:'bhut'
      

    // });
    // await newData.save();
    // console.log('data added succesfully');
}
main();