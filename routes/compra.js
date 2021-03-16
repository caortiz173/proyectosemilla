import {Router} from 'express'
import {compr} from '../controllers/compra.js';
import{check} from '../express-validator';
import {existeCompraById} from '../db-helpers/compra.js';
import {existeCompraByNombre} from '../db-helpers/compra.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],compr.compraGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCompraById),
    validarcampos
],compr.compraById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existeCompraByNombre),
    validarcampos
],compr.compraPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCompraById),
    check('nombre').custom(existeCompraByNombre)
],compr.compraPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCompraById),
],compr.compraActivar);

router.put('desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCompraById),],),
],compr.compraDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCompraById),],),
],compr.compraDelete);

export default router;