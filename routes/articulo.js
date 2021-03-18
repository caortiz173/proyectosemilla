import {Router} from 'express';
import {artic} from '../controllers/articulo.js';
import{check} from 'express-validator';
import {existearticuloById} from '../db-helpers/articulo.js';
import {existearticuloByNombre} from '../db-helpers/articulo.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],artic.articuloGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existearticuloById),
    validarcampos
],artic.articuloById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existearticuloByNombre),
    validarcampos
],artic.articuloPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existearticuloById),
    check('nombre').custom(existearticuloByNombre)
],artic.articuloPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existearticuloById),
],artic.articuloActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existearticuloById),],),
],artic.articuloDesactivar);

router.delete('/eliminar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existearticuloById),],),
],artic.articuloDelete);

export default router;