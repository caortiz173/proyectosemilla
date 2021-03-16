import {Router} from 'express'
import {vent} from '../controllers/venta.js';
import{check} from '../express-validator';
import {existeVentaById} from '../db-helpers/venta.js';
import {existeVentaByNombre} from '../db-helpers/venta.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],vent.ventaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeVentaById),
    validarcampos
],vent.ventaById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existeVentaByNombre),
    validarcampos
],vent.ventaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeVentaById),
    check('nombre').custom(existeVentaByNombre)
],vent.Put);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeVentaById),
],cateig.ventaActivar);

router.put('desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeVentaById),],),
],cateig.ventaDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeVentaById),],),
],vent.ventaDelete);

export default router;

