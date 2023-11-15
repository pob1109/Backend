import jwt from "jsonwebtoken";

export const checkToken = (req,res,next)=>{ //헤더에 저장된 토큰의 유무를 체크하고 복호화하여 userId 반환
    const isToken = req.headers.authorization;

    if(!isToken){
       return res.status(404).send("로그인 해주세요");
    }

    const data = jwt.verify(isToken.substr(7),process.env.jwt_key)
    req.params.userId=data.userId;
    next();
}
