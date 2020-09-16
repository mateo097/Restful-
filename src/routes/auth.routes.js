import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import { veriySignup } from '../middlewares';

router.post('/signup',[
    veriySignup.checkDuplicatedUsernameOrEmail,
     veriySignup.checkRolesExisted], authCtrl.signUp);

router.post('/signin', authCtrl.signin)


export default router;