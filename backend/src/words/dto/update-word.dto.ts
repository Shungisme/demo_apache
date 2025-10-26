import { IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateWordDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  english?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  vietnamese?: string;
}
