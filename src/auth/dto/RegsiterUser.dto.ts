/**
 * Created by adebayooluwadamilola on 2/15/19.
 */

import { IsNotEmpty } from 'class-validator';

export class RegisterUser {

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}
