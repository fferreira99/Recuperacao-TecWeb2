import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService, PrismaService],
  exports: [CarrinhoService],
})
export class CarrinhoModule {}
