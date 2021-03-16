import {Router} from 'express';
import {pers} from '../controllers/persona.js';
import{check} from '../express-validator';
import {existePersonaById} from '../db-helpers/persona.js';
import {existePersonaByNombre} from '../db-helpers/persona.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],pers.personaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePersonaById),
    validarcampos
],pers.personaById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existePersonaByNombre),
    validarcampos
],pers.personaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePersonaById),
    check('nombre').custom(existePersonaByNombre)
],pers.personaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePersonaById),
],pers.personaActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePersonaById),],),
],pers.personaDesactivar);

router.delete('/eliminar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePersonaById),],),
],pers.personaDelete);

export default router;