import express, {Response, Request} from 'express';
import { Authenticate } from '../middlewares/validateUser';
import { helloUser, SignInUser, SignUpUser} from '../controllers/userController';

const router = express.Router();
router.use(Authenticate);
router.get('/hello', helloUser);
router.post('/signup', SignUpUser);
router.post('/login', SignInUser);


export {router as UserRoutes};