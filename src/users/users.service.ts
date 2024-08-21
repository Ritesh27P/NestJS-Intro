import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    sayBye(): string {
        return 'Bye Bye!';
    }
}
