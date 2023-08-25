import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateCongressDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  min_events_for_certificate: number;
}
