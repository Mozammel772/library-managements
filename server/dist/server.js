"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://idevsumon:dLCbotD4MczqIuuT@cluster2025.dbuw7xd.mongodb.net/LibraryDB?retryWrites=true&w=majority&appName=Cluster2025';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(MONGODB_URI);
            console.log('✅ Database connected');
            app_1.default.listen(port, () => {
                console.log(`🚀 Server is running at http://localhost:${port}`);
            });
        }
        catch (err) {
            console.error('❌ Failed to connect to DB', err);
        }
    });
}
main();
