const mongoose=require('mongoose')

const Connectdb=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("mongodb connected to host"+" "+con.connection.host)
    })
}

module.exports=Connectdb