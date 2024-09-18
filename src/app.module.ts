import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ProdutoModule, CarrinhoModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
