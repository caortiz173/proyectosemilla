import {Router} from 'express'
import {categ} from '../controllers/categoria.js';
import {check} from 'express-validator';
import {existecategoriaById} from '../db-helpers/categoria.js';
import {existecategoriaByNombre} from '../db-helpers/categoria.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],categ.categoriaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecategoriaById),
    validarcampos
],categ.categoriaById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Categoriaz').not().isEmpty(),
    check('nombre').custom(existecategoriaByNombre),
    validarcampos
],categ.categoriaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecategoriaById),
    check('nombre').custom(existecategoriaByNombre)
],categ.categoriaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecategoriaById),
],categ.categoriaActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecategoriaById),],),
],categ.categoriaDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existecategoriaById),],),
],categ.categoriaDelete);

export default router;