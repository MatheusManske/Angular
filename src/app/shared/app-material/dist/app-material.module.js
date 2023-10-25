"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppMaterialModule = void 0;
var core_1 = require("@angular/core");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var toolbar_1 = require("@angular/material/toolbar");
var table_1 = require("@angular/material/table");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var select_1 = require("@angular/material/select");
var snack_bar_1 = require("@angular/material/snack-bar");
var dialog_1 = require("@angular/material/dialog");
var button_1 = require("@angular/material/button");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                list_1.MatListModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                table_1.MatTableModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                menu_1.MatMenuModule,
                progress_spinner_1.MatProgressSpinnerModule,
                select_1.MatSelectModule,
                snack_bar_1.MatSnackBarModule,
                dialog_1.MatDialogModule,
                card_1.MatCardModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;
