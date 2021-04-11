import {Router} from 'express';
import {user} from '../controllers/usuario.js';
import{check} from 'express-validator';
import {existeusuarioById} from '../db-helpers/usuario.js';

import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],user.usuarioGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeusuarioById),
    validarcampos
],user.usuarioById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para Usuario').not().isEmpty(),

    check('apellido', 'El apellido es obligatorio para Usuario').not().isEmpty(),
  
    check('genero', 'El genero es obligatorio para Usuario').not().isEmpty(),
  
    check('email', 'El email es obligatorio para Usuario').not().isEmpty(),
   
    check('password', 'El password es obligatorio para Usuario').not().isEmpty(),
  
    check('rol', 'El rol es obligatorio para Usuario').not().isEmpty(),
    

    validarcampos
],user.usuarioPost);

router.post('/login',user.login);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeusuarioById),

],user.usuarioPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeusuarioById),
],user.usuarioActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeusuarioById),],),
],user.usuarioDesactivar);

router.delete('/eliminar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeusuarioById),],),
],user.usuarioDelete);

export default router;