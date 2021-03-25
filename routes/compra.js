import {Router} from 'express'
import {compr} from '../controllers/compra.js';
import{check} from 'express-validator';
import {existecompraById} from '../db-helpers/compra.js';
import {existecompraByNombre} from '../db-helpers/compra.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],compr.compraGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecompraById),
    validarcampos
],compr.compraById);

router.post('/',[
    check('usuario', 'El usuario es obligatorio para su Compra').not().isEmpty(),
    validarcampos
],compr.compraPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecompraById),
    check('usuario').custom(existecompraByNombre)
],compr.compraPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecompraById),
],compr.compraActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecompraById),],),
],compr.compraDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecompraById),],),
],compr.compraDelete);

export default router;