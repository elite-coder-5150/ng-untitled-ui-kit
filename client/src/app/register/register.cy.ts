import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from 'services/auth.service';

describe('AuthService', () => {
    let authService: AuthService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });

        authService = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
    });

   

    describe('login()', () => {
        it ('shoiuld send a POST request to the auth api with the provided username and password', () => {
            const username = 'username';
            const password = 'password';

            authService.login(username, password).subscribe();

            const req = httpMock.expectOne('http://localhost:8080/auth/signin')

            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual({username, password});
        })
    });

    describe('register()', () => {
        it ('should send a post request to the auth api with the privided username and password', () => {
            const username  = 'username';
            const password = 'password';
            const email = 'testuser@example.com';

            authService.register(username, password, email).subscribe();

            const req = httpMock.expectOne('http://localhost:8080/auth/signup');

            expect(req.request.method).toBe('POST');
            expect(req.request.body).toEqual({ username, password, email
        })
    })
})