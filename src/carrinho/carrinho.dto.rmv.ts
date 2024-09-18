import { IsNumber } from 'class-validator';

export class RemoveItemDto {
  @IsNumber()
  id: number;
}
