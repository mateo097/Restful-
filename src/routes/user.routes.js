import {Router} from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';
import { authJwt, veriySignup } from '../middlewares';

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    veriySignup.checkRolesExisted
],userCtrl.createUser)

export default router;