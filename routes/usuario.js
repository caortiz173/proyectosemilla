import {Router} from 'express';
import {user} from '../controllers/usuario.js';
import{check} from '../express-validator';
import {existeUsuarioById} from '../db-helpers/usuario.js';
import {existeUsuarioByNombre} from '../db-helpers/usuario.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],user.usuarioGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarcampos
],user.usuarioById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existeUsuarioByNombre),
    validarcampos
],user.usuarioPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioById),
    check('nombre').custom(existeUsuarioByNombre)
],user.usuarioPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioById),
],user.usuarioActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioById),],),
],user.usuarioDesactivar);

router.delete('/eliminar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioById),],),
],user.usuarioDelete);

export default router;