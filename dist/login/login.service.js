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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LoginService = (() => {
    var _a;
    let LoginService = class LoginService {
        constructor(loginModel) {
            this.loginModel = loginModel;
        }
        async insertUser(data) {
            const newUser = new this.loginModel(data);
            const result = await newUser.save();
            return result.id;
        }
        async validateUser(data) {
            const users = await this.loginModel.find().exec();
            if (users) {
                let result;
                users.forEach(user => {
                    result = user.userName === data.userName && user.passward === data.passward ? true : false;
                });
                return result;
            }
            return users;
        }
    };
    LoginService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('loginDB')),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
    ], LoginService);
    return LoginService;
})();
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map