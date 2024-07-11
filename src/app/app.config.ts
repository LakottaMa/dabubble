import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Environment } from '../../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        "projectId": "dabubble-451da",
        "appId": "1:61293765000:web:01d70ab735f898a1801a3d",
        "storageBucket": "dabubble-451da.appspot.com",
        "apiKey": Environment.API_KEY,
        "authDomain": "dabubble-451da.firebaseapp.com",
        "messagingSenderId": "61293765000"
      })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ]
};
