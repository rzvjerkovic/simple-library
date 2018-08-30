import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './shared/services/book-data';

// PrimeNG modules imports
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksListViewComponent } from './books-list-view/books-list-view.component';
import { ReservedBooksComponent } from './reserved-books/reserved-books.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'books',
        component: BooksListViewComponent
    },
    {
        path: 'my-books',
        component: ReservedBooksComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        BooksListViewComponent,
        DashboardComponent,
        ReservedBooksComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(BookData, { delay: 200 }),
        RouterModule.forRoot(routes),
        // PrimeNG modules
        InputTextModule,
        PaginatorModule,
        TableModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
