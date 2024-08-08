import express, {Response, Request} from 'express';
import {  getUserOrder, orderDrinks, SignInUser, SignUpUser, validateUser} from '../controllers/userController';

const router = express.Router();
router.post('/login', SignInUser);
router.post('/signup', SignUpUser);
router.post('/validate', validateUser);
router.post('/OrderDrinks', orderDrinks);
router.get('/getUser', getUserOrder);
// router.get('/validate', validateUser);
// router.post('/signup', SignUpUser);
// router.post('/logout', logoutUser);




export {router as UserRoutes};