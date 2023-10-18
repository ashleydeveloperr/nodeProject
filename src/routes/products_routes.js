//Para crear los endpoints de productos, eliminar el crud de los productos

import {Router} from 'express'
const router= Router()

import * as productsCtrl from "../controllers/products.controller";

//Endpoints que se encuentran en products.controller
router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.post('/', productsCtrl.createProduct)

router.put('/:productId', productsCtrl.updateProductById)

router.delete('/:productId', productsCtrl.deleteProductById)









export default router;