import { Router } from 'express';
import productController from '../controllers/product.controller';
import validationProducts from '../middlewares/validationProducts';

const productRouter = Router();
productRouter.post('/', validationProducts, productController.createProduct);
productRouter.get('/', productController.findAll);

export default productRouter;