const nodemailer=require('nodemailer');
const tranportster=nodemailer.createTransport({
service:"gmail",
auth:{
    user:"vxhuongws06@gmail.com",
    pass:"abc123abc"
}
});
module.exports=tranportster;