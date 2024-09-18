import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async create(data: { nome: string; preco: number }) {
    return this.prisma.produto.create({ data });
  }
}