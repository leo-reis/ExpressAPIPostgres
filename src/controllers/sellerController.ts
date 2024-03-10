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
import { SellerService, SellerCreationParams } from '../services/sellerService';
import { Seller } from '../models/sellerModel'

@Route("seller")
export class sellerController extends Controller {
  @Get()
  async getAllSellers(): Promise<Seller[]> {
    try {
      const sellersList = await new SellerService().getAllSellers();
      return sellersList;
    } catch (error) {
      this.setStatus(500);
      return [];
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  @Response<500, { reason: string }>("500", "Internal Server Error")
  async createNewSeller(
    @Body() requestBody: SellerCreationParams
  ): Promise<string> {
    try {
      const { name, email, phone_number } = requestBody;
      await new SellerService().createNewSeller(name, email, phone_number);
      this.setStatus(201);
      return "Data on Seller entity created successfully"
    } catch (error) {
      this.setStatus(500);
      return "Unknown error occurred, please check your database connection or API build";
    }
  }
}