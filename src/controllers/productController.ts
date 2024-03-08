import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { ProductService, ProductCreationParams } from '../services/productService';
import { Product } from '../models/productModel'

@Route("product")
export class productController extends Controller {
  @Get()
  async getAllProducts(): Promise<Product[]> {
    try {
      const productsList = await new ProductService().getAllProducts();
      return productsList;
    } catch (error) {
      this.setStatus(500);
      return [];
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  async createNewProduct(
    @Body() requestBody: ProductCreationParams
  ): Promise<void> {
    try {
      const { product_id, name, description, seller_id, price, locale_id } =requestBody;
      const newProduct = new ProductService().createNewProduct(product_id, name, description, seller_id, price, locale_id);
      this.setStatus(201);
    } catch (error) {
      this.setStatus(500);
    }
  }
}