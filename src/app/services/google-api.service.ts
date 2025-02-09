import { Injectable } from '@angular/core';
// import { loadGapiInsideDOM } from 'gapi-script';

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  private gapiLoaded = false;
  private CLIENT_ID = '446709677055-ciko2bcjngo7p1sqa8vjjbi495g7muj1.apps.googleusercontent.com';
  private API_KEY = 'AIzaSyD-zmtxnu9R46omG9ZbymOKJYMcv_e05DA';
  private SCOPES = 'https://www.googleapis.com/auth/photoslibrary.readonly';

  constructor() {}

  // /**
  //  * Dynamically load the GAPI script into the DOM.
  //  */
  // private loadGapiScript(): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     if (document.getElementById('gapi-script')) {
  //       resolve(); // Script is already loaded
  //       return;
  //     }
  //     const script = document.createElement('script');
  //     script.id = 'gapi-script';
  //     script.src = 'https://apis.google.com/js/api.js';
  //     script.onload = () => resolve();
  //     script.onerror = () => reject('Failed to load GAPI script');
  //     document.body.appendChild(script);
  //   });
  // }

  // /**
  //  * Initialize the GAPI client.
  //  */
  // async initializeGapi(): Promise<void> {
  //   if (this.gapiLoaded) return; // Avoid re-initializing

  //   await this.loadGapiScript();

  //   await new Promise((resolve) => {
  //     gapi.load('client:auth2', resolve); // Load required modules
  //   });

  //   await gapi.client.init({
  //     apiKey: this.API_KEY,
  //     clientId: this.CLIENT_ID,
  //     discoveryDocs: [
  //       'https://photoslibrary.googleapis.com/$discovery/rest?version=v1',
  //     ],
  //     scope: this.SCOPES,
  //   });

  //   this.gapiLoaded = true;
  //   console.log('GAPI initialized successfully');
  // }

  // /**
  //  * Sign in the user using Google's OAuth2 authentication.
  //  */
  // async signIn(): Promise<void> {
  //   await this.initializeGapi();

  //   const authInstance = gapi.auth2.getAuthInstance();
  //   if (!authInstance) {
  //     throw new Error('Google Auth instance is not initialized');
  //   }

  //   const user = await authInstance.signIn();
  //   const authResponse = user.getAuthResponse(true);

  //   if (authResponse && authResponse.access_token) {
  //     gapi.client.setToken({ access_token: authResponse.access_token });
  //     console.log('User signed in successfully');
  //   } else {
  //     throw new Error('Failed to retrieve access token');
  //   }
  // }

  // /**
  //  * Check if the user is signed in by verifying the access token.
  //  */
  // isSignedIn(): boolean {
  //   // Ensure gapi is loaded before checking
  //   if (typeof gapi === 'undefined' || !gapi.auth2) {
  //     console.error('GAPI is not initialized');
  //     return false;
  //   }

  //   const authInstance = gapi.auth2.getAuthInstance();
  //   return authInstance && authInstance.isSignedIn.get();
  // }

  // /**
  //  * Fetch photos from the Google Photos Library API.
  //  */
  // async fetchPhotos(): Promise<any> {
  //   await this.ensureGapiInitialized();

  //   if (!this.isSignedIn()) {
  //     await this.signIn();
  //   }

  //   try {
  //     const response = await gapi.client.photoslibrary.mediaItems.list({
  //       pageSize: 50, // Fetch up to 50 photos
  //     });

  //     return response.result.mediaItems;
  //   } catch (error) {
  //     console.error('Error fetching photos:', error);
  //     throw new Error('Failed to fetch photos');
  //   }
  // }

  // /**
  //  * Ensure GAPI is initialized before making any API calls.
  //  */
  // private async ensureGapiInitialized(): Promise<void> {
  //   if (!this.gapiLoaded) {
  //     await this.initializeGapi();
  //   }
  // }
}
