"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.9.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Cw20BaseQueryClient = /** @class */ (function () {
    function Cw20BaseQueryClient(client, contractAddress) {
        var _this = this;
        this.balance = function (_a) {
            var address = _a.address;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            balance: {
                                address: address
                            }
                        })];
                });
            });
        };
        this.tokenInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        token_info: {}
                    })];
            });
        }); };
        this.minter = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        minter: {}
                    })];
            });
        }); };
        this.allowance = function (_a) {
            var owner = _a.owner, spender = _a.spender;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            allowance: {
                                owner: owner,
                                spender: spender
                            }
                        })];
                });
            });
        };
        this.allAllowances = function (_a) {
            var limit = _a.limit, owner = _a.owner, startAfter = _a.startAfter;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            all_allowances: {
                                limit: limit,
                                owner: owner,
                                start_after: startAfter
                            }
                        })];
                });
            });
        };
        this.allSpenderAllowances = function (_a) {
            var limit = _a.limit, spender = _a.spender, startAfter = _a.startAfter;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            all_spender_allowances: {
                                limit: limit,
                                spender: spender,
                                start_after: startAfter
                            }
                        })];
                });
            });
        };
        this.allAccounts = function (_a) {
            var limit = _a.limit, startAfter = _a.startAfter;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                            all_accounts: {
                                limit: limit,
                                start_after: startAfter
                            }
                        })];
                });
            });
        };
        this.marketingInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        marketing_info: {}
                    })];
            });
        }); };
        this.downloadLogo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.queryContractSmart(this.contractAddress, {
                        download_logo: {}
                    })];
            });
        }); };
        this.client = client;
        this.contractAddress = contractAddress;
        this.balance = this.balance.bind(this);
        this.tokenInfo = this.tokenInfo.bind(this);
        this.minter = this.minter.bind(this);
        this.allowance = this.allowance.bind(this);
        this.allAllowances = this.allAllowances.bind(this);
        this.allSpenderAllowances = this.allSpenderAllowances.bind(this);
        this.allAccounts = this.allAccounts.bind(this);
        this.marketingInfo = this.marketingInfo.bind(this);
        this.downloadLogo = this.downloadLogo.bind(this);
    }
    return Cw20BaseQueryClient;
}());
exports.Cw20BaseQueryClient = Cw20BaseQueryClient;
var Cw20BaseClient = /** @class */ (function (_super) {
    __extends(Cw20BaseClient, _super);
    function Cw20BaseClient(client, sender, contractAddress) {
        var _this = _super.call(this, client, contractAddress) || this;
        _this.transfer = function (_a, fee, memo, _funds) {
            var amount = _a.amount, recipient = _a.recipient;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                transfer: {
                                    amount: amount,
                                    recipient: recipient
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.burn = function (_a, fee, memo, _funds) {
            var amount = _a.amount;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                burn: {
                                    amount: amount
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.send = function (_a, fee, memo, _funds) {
            var amount = _a.amount, contract = _a.contract, msg = _a.msg;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                send: {
                                    amount: amount,
                                    contract: contract,
                                    msg: msg
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.increaseAllowance = function (_a, fee, memo, _funds) {
            var amount = _a.amount, expires = _a.expires, spender = _a.spender;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                increase_allowance: {
                                    amount: amount,
                                    expires: expires,
                                    spender: spender
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.decreaseAllowance = function (_a, fee, memo, _funds) {
            var amount = _a.amount, expires = _a.expires, spender = _a.spender;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                decrease_allowance: {
                                    amount: amount,
                                    expires: expires,
                                    spender: spender
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.transferFrom = function (_a, fee, memo, _funds) {
            var amount = _a.amount, owner = _a.owner, recipient = _a.recipient;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                transfer_from: {
                                    amount: amount,
                                    owner: owner,
                                    recipient: recipient
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.sendFrom = function (_a, fee, memo, _funds) {
            var amount = _a.amount, contract = _a.contract, msg = _a.msg, owner = _a.owner;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                send_from: {
                                    amount: amount,
                                    contract: contract,
                                    msg: msg,
                                    owner: owner
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.burnFrom = function (_a, fee, memo, _funds) {
            var amount = _a.amount, owner = _a.owner;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                burn_from: {
                                    amount: amount,
                                    owner: owner
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.mint = function (_a, fee, memo, _funds) {
            var amount = _a.amount, recipient = _a.recipient;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                mint: {
                                    amount: amount,
                                    recipient: recipient
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.updateMinter = function (_a, fee, memo, _funds) {
            var newMinter = _a.newMinter;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                update_minter: {
                                    new_minter: newMinter
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.updateMarketing = function (_a, fee, memo, _funds) {
            var description = _a.description, marketing = _a.marketing, project = _a.project;
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                update_marketing: {
                                    description: description,
                                    marketing: marketing,
                                    project: project
                                }
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        _this.uploadLogo = function (logo, fee, memo, _funds) {
            if (fee === void 0) { fee = "auto"; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.execute(this.sender, this.contractAddress, {
                                upload_logo: logo
                            }, fee, memo, _funds)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        _this.client = client;
        _this.sender = sender;
        _this.contractAddress = contractAddress;
        _this.transfer = _this.transfer.bind(_this);
        _this.burn = _this.burn.bind(_this);
        _this.send = _this.send.bind(_this);
        _this.increaseAllowance = _this.increaseAllowance.bind(_this);
        _this.decreaseAllowance = _this.decreaseAllowance.bind(_this);
        _this.transferFrom = _this.transferFrom.bind(_this);
        _this.sendFrom = _this.sendFrom.bind(_this);
        _this.burnFrom = _this.burnFrom.bind(_this);
        _this.mint = _this.mint.bind(_this);
        _this.updateMinter = _this.updateMinter.bind(_this);
        _this.updateMarketing = _this.updateMarketing.bind(_this);
        _this.uploadLogo = _this.uploadLogo.bind(_this);
        return _this;
    }
    return Cw20BaseClient;
}(Cw20BaseQueryClient));
exports.Cw20BaseClient = Cw20BaseClient;
