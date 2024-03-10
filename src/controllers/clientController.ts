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
import { ClientService, ClientCreationParams } from '../services/clientService';
import { Client } from '../models/clientModel'

@Route("client")
export class clientController extends Controller {
  @Get()
  async getAllClients(): Promise<Client[]> {
    try {
      const clientsList = await new ClientService().getAllClients();
      return clientsList;
    } catch (error) {
      this.setStatus(500);
      return [];
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  @Response<500, { reason: string }>("500", "Internal Server Error")
  async createNewClient(
    @Body() requestBody: ClientCreationParams
  ): Promise<string> {
    try {
      const { name, email, phone_number } = requestBody;
      await new ClientService().createNewClient(name, email, phone_number);
      this.setStatus(201);
      return "Data on Client entity created successfully"
    } catch (error) {
      this.setStatus(500);
      return "Unknown error occurred, please check your database connection or API build";
    }
  }
}

