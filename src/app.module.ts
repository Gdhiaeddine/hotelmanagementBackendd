import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { ConfigModule } from '@nestjs/config';
import { DepotModule } from './depot/depot.module';
import { UniteModule } from './unite/unite.module';
import { CategorieModule } from './categorie/categorie.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { ProductModule } from './product/product.module';
import { EntriesModule } from './entries/entries.module';
import { GuestModule } from './guest/guest.module';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    RoomModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    DepotModule,
    UniteModule,
    CategorieModule,
    FournisseurModule,
    ProductModule,
    EntriesModule,
    GuestModule,
    ReservationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
