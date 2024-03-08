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
  async createNewSeller(
    @Body() requestBody: SellerCreationParams
  ): Promise<void> {
    try {
      const { seller_id, name, email, phone_number } =requestBody;
      const newSeller = new SellerService().createNewSeller(seller_id, name, email, phone_number);
      this.setStatus(201);
    } catch (error) {
      this.setStatus(500);
    }
  }
}