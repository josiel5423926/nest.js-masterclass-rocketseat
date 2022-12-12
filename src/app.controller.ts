import { PrismaService } from './database/prisma.services';
import { Body, Controller, Get } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    const member = await this.prisma.memberTeam.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
    return {
      member,
    };
  }
}
