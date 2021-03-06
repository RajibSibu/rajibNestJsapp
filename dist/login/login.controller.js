"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
let LoginController = (() => {
    let LoginController = class LoginController {
        constructor(loginService) {
            this.loginService = loginService;
        }
        async addUser(data) {
            const generatedId = await this.loginService.insertUser(data);
            return { id: generatedId };
        }
        async getAllUser(data) {
            const valid = await this.loginService.validateUser(data);
            return valid ? {
                status: valid,
                message: 'Sucesss fully loged in '
            } : this.newMethod(valid);
        }
        newMethod(valid) {
            throw new common_1.HttpException({
                status: valid,
                message: 'Login Failed '
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    };
    __decorate([
        common_1.Post('add'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LoginController.prototype, "addUser", null);
    __decorate([
        common_1.Post('validate'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], LoginController.prototype, "getAllUser", null);
    LoginController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginController);
    return LoginController;
})();
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map