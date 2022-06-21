import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://allandev:12345seis@cluster0.aquzq.mongodb.net/test'
    ),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
