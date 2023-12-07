import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ClientAuthMethod, NbOAuth2ResponseType, NbAuthOAuth2JWTToken, NbOAuth2GrantType } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { NgxLoginComponent } from '../pages/login/login.component';


@NgModule({
  declarations: [
    NgxLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    // NbAuthModule,

    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'email',
          redirect: {
            success: '/pages',
          },
          baseEndpoint: 'http://localhost:8080/realms/Vehicle-Chain-Realm',
          clientId: 'store-api-app',
          clientSecret: '6sAZyYhn6EyTz1P300ebQWxLa2CUtnDE',
          clientAuthMethod: NbOAuth2ClientAuthMethod.BASIC,
          
          authorize: {
            endpoint: '/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
          },
          token: {
            endpoint: '/protocol/openid-connect/token',
            grantType: NbOAuth2GrantType.PASSWORD,
            class: NbAuthOAuth2JWTToken,
          },
          refresh: {
            endpoint: '/protocol/openid-connect/token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
          },
        }),
      ],
      forms: {},
    }),
  ]
})
export class NgxAuthModule { }
