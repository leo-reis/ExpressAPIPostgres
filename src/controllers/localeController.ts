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
import { LocaleService, LocaleCreationParams } from '../services/localeService';
import { Locale } from '../models/localeModel'

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
  async createNewLocale(
    @Body() requestBody: LocaleCreationParams
  ): Promise<void> {
    try {
      const { locale_id, name } =requestBody;
      const newLocale = new LocaleService().createNewLocale(locale_id, name);
      this.setStatus(201);
    } catch (error) {
      this.setStatus(500);
    }
  }
}