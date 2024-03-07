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
  async createNewClient(
    @Body() requestBody: ClientCreationParams
  ): Promise<void> {
    try {
    const { client_id, name, email, phone_number } = requestBody;
    const newClient = new ClientService().createNewClient(client_id, name, email, phone_number);
    this.setStatus(201);
    } catch (error) {
      this.setStatus(500);
    }
  }
}