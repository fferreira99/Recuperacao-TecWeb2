import { IsNumber } from 'class-validator';

export class AddItemDto {
  @IsNumber()
  produtoId: number;

  @IsNumber()
  quantidade: number;
}
