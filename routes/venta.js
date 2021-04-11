import {Router} from 'express'
import {vent} from '../controllers/venta.js';
import{check} from 'express-validator';
import {existeventaById} from '../db-helpers/venta.js';


import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],vent.ventaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeventaById),
    validarcampos
],vent.ventaById);

router.post('/',[
    check('usuario', 'El usuario es obligatorio para venta').not().isEmpty(),
    
    check('persona', 'La persona es obligatorio para venta').not().isEmpty(),
    
    check('impuesto', 'El impuesto es obligatorio para venta').not().isEmpty(),
    
    check('total', 'El total es obligatorio para venta').not().isEmpty(),
  
    check('detalle', 'El detalle es obligatorio para venta').not().isEmpty(),
  
    validarcampos
],vent.ventaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeventaById),
    
],vent.ventaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeventaById),
],vent.ventaActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeventaById),],),
],vent.ventaDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeventaById),],),
],vent.ventaDelete);

export default router;

