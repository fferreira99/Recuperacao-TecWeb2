import { Controller, Post, Delete, Body, Param } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('add')
  async addItem(@Body() body: { produtoId: number; quantidade: number }) {
    return this.carrinhoService.addItem(body.produtoId, body.quantidade);
  }

  @Delete(':id')
  async removeItem(@Param('id') id: number) {
    return this.carrinhoService.removeItem(id);
  }
}
