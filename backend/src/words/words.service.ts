import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Word } from "./word.entity";
import { CreateWordDto } from "./dto/create-word.dto";
import { UpdateWordDto } from "./dto/update-word.dto";

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>
  ) {}

  async findAll(): Promise<Word[]> {
    return this.wordsRepository.find({
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: number): Promise<Word> {
    const word = await this.wordsRepository.findOne({ where: { id } });
    if (!word) {
      throw new NotFoundException(`Word with ID ${id} not found`);
    }
    return word;
  }

  async create(createWordDto: CreateWordDto): Promise<Word> {
    const word = this.wordsRepository.create(createWordDto);
    return this.wordsRepository.save(word);
  }

  async update(id: number, updateWordDto: UpdateWordDto): Promise<Word> {
    const word = await this.findOne(id);
    Object.assign(word, updateWordDto);
    return this.wordsRepository.save(word);
  }

  async remove(id: number): Promise<void> {
    const word = await this.findOne(id);
    await this.wordsRepository.remove(word);
  }

  async count(): Promise<number> {
    return this.wordsRepository.count();
  }
}
