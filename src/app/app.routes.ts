import { Routes } from "@angular/router";
import { View } from './post/view/view';
import { Edit } from './post/edit/edit';
import { Create } from './post/create/create';
import { Index } from "./post/index";


const appRoutes: Routes = [
  {
    path: '',
    component: Index,
    title: 'Posts'
  },
  {
    path: 'post/create',
    component: Create,
    title: 'Create Post'
  },
  {
    path: 'post/:id/edit',
    component: Edit,
    title: 'Edit Post'
  },
  {
    path: 'post/:id/view',
    component: View,
    title: 'View Post'
  }
];