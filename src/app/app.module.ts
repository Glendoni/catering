import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PageService } from './_services/index';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
 

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/static/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        // BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    providers: [BaseRequestOptions,
              AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
