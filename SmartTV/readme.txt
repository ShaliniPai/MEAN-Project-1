//https://www.positronx.io/create-login-ui-template-with-angular-8-material-design/

ng g component components/login --module app
ng g component components/register --module app

The --module app tag makes the app.module.ts is the main app module file.

Implementing Angular Material 8
Run the following command to install Angular Material 8 UI library in Angular project:

ng add @angular/material

Create Custom Angular Material Module
It is always a best practice to create a separate module file to import Angular Material components. It makes your code to look more readable, 
Go to src > app folder and create angular-material.module.ts file and add the following code:

npm i -s @angular/flex-layout @angular/cdk