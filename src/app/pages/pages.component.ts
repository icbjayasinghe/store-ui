import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { NbMenuItem, NbIconConfig } from '@nebular/theme';
import { NbAuthService, NbAuthOAuth2JWTToken } from '@nebular/auth';
import { LoginService } from '../services/login.service';
import { StoreService } from '../services/store.service';
import { StoreConfigService } from '../services/store-config.service';
import { Store } from '../models/store.model';
import { StoreConf } from '../models/store-conf.model';
import { UserConf } from '../models/user-conf.model';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

  items: NbMenuItem[] = [
    {
      title: 'Inventory Management',
      expanded: true,
      children: [
        {
          title: 'Check Inventory',
          url: 'pages/inventory/check-inventory'
        },
        {
          title: 'Inbound Products',
          url: 'pages/inventory/inbound-product'
        },
        {
          title: 'Logout',
        },
      ],
    },
    // {
    //   title: 'Profile',
    //   expanded: true,
    //   children: [
    //     {
    //       title: 'Change Password',
    //     },
    //     {
    //       title: 'Privacy Policy',
    //     },
    //     {
    //       title: 'Logout',
    //     },
    //   ],
    // },
    // {
    //   title: 'Shopping Bag',
    //   children: [
    //     {
    //       title: 'First Product',
    //     },
    //     {
    //       title: 'Second Product',
    //     },
    //     {
    //       title: 'Third Product',
    //     },
    //   ],
    // },
    // {
    //   title: 'Orders',
    //   children: [
    //     {
    //       title: 'First Order',
    //     },
    //     {
    //       title: 'Second Order',
    //     },
    //     {
    //       title: 'Third Order',
    //     },
    //   ],
    // },
  ];

  user = {};
  public storeConfig!: StoreConf;
  public store!: Store;
  public userConf!: UserConf;

  constructor(private authService: NbAuthService, 
              private storeService: StoreService,
              private storeConfigService: StoreConfigService) {

    this.authService.onTokenChange()
    .subscribe((token: any) => {
      if(token.isValid()) {
        this.user = token.getPayload();
        console.log('user: ', this.user); 
        console.log('token: ', token);  
        // console.log('name: ', this.user();  

        // return this.user;

      }
    });
  }

  ngOnInit(): void {
    this.getStoreConfig();
  }

  getStoreConfig() {
    this.storeConfig = this.storeConfigService.getStoreConfigFromLs();
    this.store = this.storeConfig.store;
    this.userConf = this.storeConfig.user;
  }

  toggleSidebar(){}

  navigateHome(){}

}
