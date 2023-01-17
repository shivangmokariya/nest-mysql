import { UsersService } from '../../services/users/users.service';
import { CreateUserDto, UpdateUserDto } from './../../dto/createUser.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUser() {
    return this.usersService.findUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    this.usersService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUser(id);
  }
}
