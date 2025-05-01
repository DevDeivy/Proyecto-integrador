import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./home/home.component";
import { LetterProductComponent } from "./letter-product/letter-product.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { FgpasswordComponent } from "./auth/fgpassword/fgpassword.component";
import { FgcodepasswordComponent } from "./auth/fgcodepassword/fgcodepassword.component";
import { NewpasswordComponent } from "./auth/newpassword/newpassword.component";


export const rout: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "list-products",
        component: ListProductsComponent
    },
    {
        path: "letter-product",
        component: LetterProductComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "fgtpass",
        component: FgpasswordComponent
    },
    {
        path: "fgtcode",
        component: FgcodepasswordComponent
    },
    {
        path: "newpass",
        component: NewpasswordComponent
    }
];