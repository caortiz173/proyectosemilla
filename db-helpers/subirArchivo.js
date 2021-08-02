import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import url from 'url'
const subirArchivo = (files, extensionesValidadas = ['png', 'jpg', 'gif', 'jpeg']) => {
    return new Promise((resolve, reject) => {
        const { archivo } = files;

        const nombreCortado = archivo.name.split('.')
        const extension = nombreCortado[nombreCortado.length - 1]
        // Extension para subir imagenes de personas
        if (!extensionesValidadas.includes(extension)) {
            return reject(`La extensión ${extension} no es permitida, solo[${extensionesValidadas}]`)
        }
        // uuid para el identificador del archivo
        const nombreTemp = uuidv4() + '_' + extension;
        const_dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const uploadPath = path.join(__dirname, '../uploads/', nombreTemp)
        archivo.mv(uploadPath, (err) => {
            if (err) {
                return reject(err)
            }
            return resolve(nombreTemp)
        })
    })
}
export {subirArchivo};