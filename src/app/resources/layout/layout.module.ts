import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {RouterModule, Routes} from '@angular/router';
import {NgbDropdownModule, NgbProgressbarModule, NgbTooltipModule,} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {TranslationModule} from '../../modules/i18n';
import {LayoutComponent} from './layout.component';
import {Routing} from '../../routing';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/footer/footer.component';
import {ScriptsInitComponent} from './components/scripts-init/scripts-init.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {PageTitleComponent} from './components/header/page-title/page-title.component';
import {DropdownMenusModule, ExtrasModule, ModalsModule,} from '../partials';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarLogoComponent} from './components/sidebar/sidebar-logo/sidebar-logo.component';
import {SidebarMenuComponent} from './components/sidebar/sidebar-menu/sidebar-menu.component';
import {NavbarComponent} from './components/header/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    TopbarComponent,
    PageTitleComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarMenuComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ModalsModule,
    DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
    ExtrasModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
