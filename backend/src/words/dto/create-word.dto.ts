import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateWordDto {
  @IsNotEmpty({ message: "English word cannot be empty" })
  @IsString()
  @MaxLength(255)
  english: string;

  @IsNotEmpty({ message: "Vietnamese meaning cannot be empty" })
  @IsString()
  @MaxLength(255)
  vietnamese: string;
}
