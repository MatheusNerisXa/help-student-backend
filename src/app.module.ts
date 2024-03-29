import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { DisciplineStatusModule } from './discipline-status/discipline-status.module';
import { AbsencesModule } from './absences/absences.module';
import { DisciplineModule } from './discipline/discipline.module';
import { ExamsModule } from './exams/exams.module';
import { NewsModule } from './news/news.module';
import { BannersModule } from './banners/banners.module';
import { ActivitiesModule } from './activities/activities.module';
import { FilesAndPhotosModule } from './files-and-photos/files-and-photos.module';
import { CoursesModule } from './courses/courses.module';
import { VideoLessonsModule } from './video-lessons/video-lessons.module';
import { IaModule } from './ias/ias.module';
import { JobsModule } from './jobs/jobs.module';
import { ContentModule } from './content/content.module';
import { ResultModule } from './result/result.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
    DisciplineStatusModule,
    AbsencesModule,
    DisciplineModule,
    ExamsModule,
    NewsModule,
    BannersModule,
    ActivitiesModule,
    FilesAndPhotosModule,
    CoursesModule,
    VideoLessonsModule,
    IaModule,
    JobsModule,
    ContentModule,
    ResultModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}
