import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CarrinhoService {
  constructor(private readonly prisma: PrismaService) {}

  async addItem(produtoId: number, quantidade: number) {
    return this.prisma.carrinho.create({
      data: { produtoId, quantidade },
    });
  }

  async removeItem(id: number) {
    return this.prisma.carrinho.delete({
      where: { id },
    });
  }
}
