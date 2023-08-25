import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  date_time: Date;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  @IsNotEmpty()
  location: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  @IsNotEmpty()
  speaker_name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  @IsNotEmpty()
  speaker_specialty: string;

  @IsOptional()
  congress_id?: string;
}
