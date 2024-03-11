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
import { LocaleService, LocaleCreationParams } from '../services/locale-service';
import { Locale } from '../models/locale-model'

@Route("locale")
export class localeController extends Controller {
  @Get()
  async getAllLocales(): Promise<Locale[]> {
    try {
      const localesList = await new LocaleService().getAllLocales();
      return localesList;
    } catch (error) {
      this.setStatus(500);
      return [];
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  @Response<500, { reason: string }>("500", "Internal Server Error")
  async createNewLocale(
    @Body() requestBody: LocaleCreationParams
  ): Promise<string> {
    try {
      const { name } = requestBody;
      await new LocaleService().createNewLocale(name);
      this.setStatus(201);
      return "Data on Locale entity created successfully"
    } catch (error) {
      this.setStatus(500);
      return "Unknown error occurred, please check your database connection or API build";
    }
  }
}