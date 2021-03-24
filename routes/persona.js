import {Router} from 'express';
import {pers} from '../controllers/persona.js';
import{check} from 'express-validator';
import {existepersonaById} from '../db-helpers/persona.js';
import {existepersonaByNombre} from '../db-helpers/persona.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],pers.personaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),
    validarcampos
],pers.personaById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Persona').not().isEmpty(),
    validarcampos
],pers.personaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),
    check('nombre').custom(existepersonaByNombre)
],pers.personaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),
],pers.personaActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),],),
],pers.personaDesactivar);

router.delete('/eliminar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),],),
],pers.personaDelete);

export default router;