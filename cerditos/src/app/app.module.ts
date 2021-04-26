import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { UsersComponent } from './components/users/users.component';
import { PigsComponent } from './components/pigs/pigs.component';
import { FormRegisterComponent } from './components/forms-user/form-register/form-register.component';
import { FormTableUserComponent } from './components/forms-user/form-table-user/form-table-user.component';
import { FormDeleteUserComponent } from './components/forms-user/form-delete-user/form-delete-user.component';
import { FormUpdateUserComponent } from './components/forms-user/form-update-user/form-update-user.component';
import { FormRegisterPigsComponent } from './components/forms-pigs/form-register-pigs/form-register-pigs.component';
import { FormTablePigsComponent } from './components/forms-pigs/form-table-pigs/form-table-pigs.component';
import { FormDeletePigsComponent } from './components/forms-pigs/form-delete-pigs/form-delete-pigs.component';
import { FormUpdatePigsComponent } from './components/forms-pigs/form-update-pigs/form-update-pigs.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { BillsComponent } from './components/bills/bills.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DataServiceService} from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    InicioComponent,
    TiendaComponent,
    AdminComponent,
    MenuAdminComponent,
    UsersComponent,
    PigsComponent,
    FormRegisterComponent,
    FormTableUserComponent,
    FormDeleteUserComponent,
    FormUpdateUserComponent,
    FormRegisterPigsComponent,
    FormTablePigsComponent,
    FormDeletePigsComponent,
    FormUpdatePigsComponent,
    RegisterComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
