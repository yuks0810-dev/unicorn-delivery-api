import { PartialType } from '@nestjs/mapped-types';
import { CreateUnicornDto } from './create-unicorn.dto';

export class UpdateUnicornDto extends PartialType(CreateUnicornDto) {}
