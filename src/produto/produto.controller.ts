import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async findAll() {
    return this.produtoService.findAll();
  }

  @Post()
  async create(@Body() body: { nome: string; preco: number }) {
    return this.produtoService.create(body);
  }
}
