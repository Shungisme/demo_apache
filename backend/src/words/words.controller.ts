import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { WordsService } from "./words.service";
import { CreateWordDto } from "./dto/create-word.dto";
import { UpdateWordDto } from "./dto/update-word.dto";

@Controller("words")
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll() {
    return this.wordsService.findAll();
  }

  @Get("count")
  count() {
    return this.wordsService.count();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.wordsService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createWordDto: CreateWordDto) {
    return this.wordsService.create(createWordDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateWordDto: UpdateWordDto) {
    return this.wordsService.update(+id, updateWordDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: string) {
    return this.wordsService.remove(+id);
  }
}
