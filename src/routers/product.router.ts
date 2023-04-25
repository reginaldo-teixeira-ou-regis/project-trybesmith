import { Router } from 'express';
import productController from '../controllers/product.controller';
import validationProducts from '../middlewares/product.middleware';

const productRouter = Router();
productRouter.post('/', validationProducts, productController.createProduct);
productRouter.get('/', productController.findAllProduct);

export default productRouter;