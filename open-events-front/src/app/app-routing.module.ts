import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService } from "./core/auth-guard.service";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { AddEditEventComponent } from "./events/add-edit-event/add-edit-event.component";
import { SignupComponent } from "./login/signup/signup.component";

const routes: Routes = [
    { path: "home", component: LandingPageComponent },
    { path: "events", component: EventListComponent },
    { path: "profile", component: ProfileComponent, canActivate: [AuthGuardService] },
    { path: "login", component: LoginComponent },
    { path: "eventDetails/:id", component: EventDetailsComponent },
    { path: "addEditEvent/:id", component: AddEditEventComponent, canActivate: [AuthGuardService] },
    { path: "signup", component: SignupComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService],
})
export class AppRoutingModule { }