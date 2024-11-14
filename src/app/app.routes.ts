import { Route, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ExperienceViewComponent } from './views/experience-view/experience-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { ChallengesViewComponent } from './views/challenges-view/challenges-view.component';


type CustomRoute = Route & {
    name: string;
}

type RoutesCustom = CustomRoute[];

export const routes: RoutesCustom = [
    {path: 'home', name: 'Home', component: HomeViewComponent},
    {path: 'experience', name: 'Professional Experience', component: ExperienceViewComponent},
    {path: 'about', name: 'About', component: AboutViewComponent},
    {path: 'challenges', name: 'Coding Challenges', component: ChallengesViewComponent}
];
