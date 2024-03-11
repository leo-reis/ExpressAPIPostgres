import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Response,
  SuccessResponse,
} from "tsoa";
import { ProductService, ProductCreationParams } from '../services/product-service';
import { Product } from '../models/product-model'

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
  @Response<500, { reason: string }>("500", "Internal Server Error")
  async createNewProduct(
    @Body() requestBody: ProductCreationParams
  ): Promise<string> {
    try {
      const { name, description, seller_id, price, locale_id } = requestBody;
      await new ProductService().createNewProduct(name, description, seller_id, price, locale_id);
      this.setStatus(201);
      return "Data on Product entity created successfully"
    } catch (error) {
      this.setStatus(500);
      return "Unknown error occurred, please check your database connection or API build";
    }
  }
}