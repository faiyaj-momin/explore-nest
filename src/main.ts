import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() =>
    console.log(`server is running on PORT: ${process.env.POST ?? 3000}`)
  )
  .catch((err) => console.log(err));
