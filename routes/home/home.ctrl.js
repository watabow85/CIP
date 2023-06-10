"use strict";

const output = {
    home : (req, res) => {
        res.render("/index");
    },
    
    login : (req, res) => {
        res.render("/login");
    },
};

const users = {
    id : ["guest","guest1","guest2"],
    psword : ["1234","12341","12342"],
   };

const process = {
    login : (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;
        console.log(id,psword);
        console.log(req.body);
    if(users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if(users.psword[idx] === psword) {
            return res.json({
                sucess:true,
            });
        }
    }
    return res.json({
        success : false,
        msg: "로그인 실패",
    });

    },
};
module.exports = {
    output,
    process,
};