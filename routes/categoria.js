import {Router} from 'express'
import {categ} from '../controllers/categoria.js';
import{check} from '../express-validator';
import {existeCategoriaById} from '../db-helpers/categoria.js';
import {existeCategoriaByNombre} from '../db-helpers/categoria.js';
import {validarcampos} from '../middlewares/validarcampos.js';
import {validarJWT} from '../middlewares/validar-JWT'

const router=Router();

router.get('/',[
    validarJWT,
    validarcampos
],categ.categoriaGet);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarcampos
],categ.categoriaById);

router.post('/',[
    check('nombre', 'El nombre es obligatorio para su Articulo').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarcampos
],categ.categoriaPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre)
],categ.categoriaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
],categ.categoriaActivar);

router.put('desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),],),
],categ.categoriaDesactivar);

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom([
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),],),
],categ.categoriaDelete);

export default router;