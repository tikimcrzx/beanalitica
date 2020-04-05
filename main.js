"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
const helmet = require("helmet");
const server = require("./configs/server.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.setGlobalPrefix('/api/v1');
    app.enableCors();
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    await app.listen(server.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map