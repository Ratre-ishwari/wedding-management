import asyncHandler from "../utils/asynchandler.js";
import db from "../db/db.connect.js";
const reportUser = asyncHandler(async(req,res)=>{
    // const mail = req.body.mail_addr;
    const hall_id = req.body.hall;
    const user  = req.user.user_id
    const data = await db.query("select email from users where username = $1",[user])
    const mail = data.rows[0].email
    await db.query("insert into report(mail_id,hall_id) VALUES($1,$2);",[mail,hall_id])
    res.json({message:"ok"});
})
export default reportUser