import { computed, Injectable, signal } from '@angular/core';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signOut, User, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { AuthResponse, AuthStatus } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = signal<AuthStatus>('checking');
  private _userId = signal<string | null>(null);
  private _displayName = signal<string | null>(null);
  private _photoName = signal<string | null>(null);
  private _userEmail = signal<string | null>(null);
  //private _token = signal<string | null>(localStorage.getItem('token'));

  userId = computed<string | null>(() => this._userId());
  displayName = computed<string | null>(() => this._displayName());
  photoName = computed<string | null>(() => this._photoName());
  userEmail = computed<string | null>(() => this._userEmail());
  //token = computed<string | null>(() => this._token());

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';

    if (this._userId()) { return 'authenticated' };

    return 'not-authenticated'
  });


  checkStatusResource = rxResource({    //* Este Resource, al inicializar el servicio mandará a ejecutar el metodo que revisa el status del token.
    stream: () => this.checkAuthStatus()
  })


  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      this.handleAuth(user);
    })
      .catch((error) => {
        const {code, message} = error;
        //console.log('Catcho error:', { code, message });
        this.handleAuthError(error);
      });
  }

  async updateUserName(newName: string) {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, { displayName: newName });
        console.log('Nombre actualizado a:', newName);
      } catch (error) {
        console.error('Error al actualizar nombre:', error);
      }
    }
  }


checkAuthStatus(): Observable<boolean> {
  const auth = getAuth();
  return new Observable<User | null>((subscriber) => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => subscriber.next(user));

    // limpiar el listener
    return { unsubscribe };
  }).pipe(
    //tap((response)=> console.log('loggeo TAP',response)),

      map((response)=> this.handleAuth(response)),
      catchError((error: any) => this.handleAuthError(error) )
    );
}

  private handleAuth(data: User|null) {    //* dentro de los argumentos de la funcion tambien podemos desestructurar los valores del objeto, en este caso del tipo AuthResponse
    this._userId.set(data?.uid  ?? '');
    this._displayName.set(data?.displayName ?? '');
    this._photoName.set(data?.photoURL ?? '');
    this._userEmail.set(data?.email ?? '');
    this._authStatus.set('authenticated');

    return !data ? false:  true;
  }


  private handleAuthError(error: any) {    //* Se maneja el tipado del argumento como any porque son varios tipos de errores que se puede recibir del catchError
    //console.log('Auth Error');
    this.logout();
    return of(false);
  }


  logout() {
    this._userId.set(null);
    this._displayName.set(null);
    this._photoName.set(null);
    this._userEmail.set(null);
    this._authStatus.set('not-authenticated');
    return signOut(auth);
  }

}
