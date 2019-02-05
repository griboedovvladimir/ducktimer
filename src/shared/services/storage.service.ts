let singletonInstance: AuthService | null = null;

export class AuthService {
    constructor() {
        if ( !singletonInstance ) {
            singletonInstance = this;
        }
        return singletonInstance;
    }

}