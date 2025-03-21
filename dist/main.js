"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_exception_1 = require("./application/exception/validation.exception");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 5000;
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: [
            '*',
            'http://localhost:3000',
            'http://localhost:3001',
            'https://hr-portal-teal.vercel.app',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            return new validation_exception_1.ValidationException(errors);
        },
    }));
    await app.listen(port, () => {
        common_1.Logger.log(`Server running on port ${port}`, 'Bootstrap');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map