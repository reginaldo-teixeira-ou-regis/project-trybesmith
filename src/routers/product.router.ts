import { Router } from 'express';
import productController from '../controllers/product.controller';
import validationProduct from '../middlewares/product.middleware';

const productRouter = Router();
productRouter.post('/', validationProduct, productController.createProduct);
productRouter.get('/', productController.findAllProduct);

export default productRouter;