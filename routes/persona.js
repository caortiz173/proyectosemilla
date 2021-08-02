import {Router} from 'express';
import {pers} from '../controllers/persona.js';
import{check} from 'express-validator';
import {existepersonaById} from '../db-helpers/persona.js';

import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js';
import {validarArchivoSubir} from '../middlewares/validarArchivoSubir';

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
    check('nombre', 'El nombre es obligatorio para Persona').not().isEmpty(),

    check('tipopersona', 'El tipo de persona es obligatorio para Persona').not().isEmpty(),
   
    check('tipodocumento', 'El tipo de documento es obligatorio para Persona').not().isEmpty(),
    
    check('numdocumento', 'El tipo de persona es obligatorio para Persona').not().isEmpty(),
    
    check('direccion', 'La direccion es obligatorio para Persona').not().isEmpty(),
    
    check('telefono', 'El telefono es obligatorio para Persona').not().isEmpty(),
    
    check('email', 'El email es obligatorio para Persona').not().isEmpty(),
    
    validarcampos
],pers.personaPost);

router.post('/upload/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos,
    validarArchivoSubir
],personas.personaCargarArchivo);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existepersonaById),

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