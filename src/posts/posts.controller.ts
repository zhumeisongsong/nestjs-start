import { Controller, Get, Post, Put, Body, Query, Param, Delete } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto, ListAllEntities } from './dto';

@Controller('posts')
export class PostsController {
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return 'Add a post';
  }

  @Get() // create a handler for a specific endpoint for HTTP requests.
  findAll(@Query() query: ListAllEntities): string {
    return 'Get all posts';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get #${id} post`
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() UpdatePostDto: UpdatePostDto) {
    return `Update #${id} post`

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Delete #${id} post`
  }
}
