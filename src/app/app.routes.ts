import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChooseDocumentComponentComponent } from './pages/choose-document-component/choose-document-component.component';
import { ChooseEmployeeComponentComponent } from './pages/choose-employee-component/choose-employee-component.component';
import { GenerateDocumentComponent } from './pages/generate-document/generate-document.component';


export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'choose-employee', component: ChooseEmployeeComponentComponent },
    { path: 'choose-document', component: ChooseDocumentComponentComponent },
    { path: 'generate-document', component: GenerateDocumentComponent },
  ];
