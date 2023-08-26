import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
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
  @IsUUID()
  congress_id?: string;

  @IsNumber()
  @IsOptional()
  career_id?: number;

  @IsNumber()
  @IsOptional()
  coordinator_id?: number;
}
