import { Request, Response, NextFunction } from 'express';
import { ValidateSignature } from '../utility/validateSignature';


// export const Authenticate = async(req: Request, res: Response, next: NextFunction) => {
//     const validate = await ValidateSignature(req);
//     if(validate) { 
//         next();
//     }
//     else { 
//         res.redirect('http://localhost:3001/Login');
//         throw Error('Invalid Signature');
//     }
// }

export const Authenticate = async(req: Request, res: Response, next: NextFunction) => {
    const validate = await ValidateSignature(req);

    if(validate) { 
        next()
    }
    else { 
        return res.json({"message": "Unauthorized Access"});
    }
}