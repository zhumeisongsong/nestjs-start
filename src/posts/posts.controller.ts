import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get() // create a handler for a specific endpoint for HTTP requests.
  findAll(): string {
    return 'all posts';
  }
