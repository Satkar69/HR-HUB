// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
//   UnauthorizedException,
//   Logger,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { IS_PUBLIC_KEY } from 'src/application/decorators/public.decorator';
// import { JwtTokenService } from 'src/libs/token/jwt/jwt-token.service';
// import { Request } from 'express';
// import { convertToObjectId } from 'src/common/helpers/convert-to-object-id';
// import { MongoRepository } from 'typeorm';
// import { AdminEntity } from 'src/data-services/mgdb/entities/admin.entity';
// import { UserEntity } from 'src/data-services/mgdb/entities/user.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import AppNotFoundException from '../exception/app-not-found.exception';
// import { FileEntity } from 'src/data-services/mgdb/entities/file.entity';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private jwtTokenService: JwtTokenService,
//     private reflector: Reflector,

//     @InjectRepository(AdminEntity)
//     private adminRepository: MongoRepository<AdminEntity>,

//     @InjectRepository(UserEntity)
//     private userRepository: MongoRepository<UserEntity>,

//     @InjectRepository(FileEntity)
//     private fileRepository: MongoRepository<FileEntity>,
//   ) {}

//   private extractToken(request: Request): string | undefined {
//     return request.headers.authorization?.split(' ')[1];
//   }

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const { url: requestUrl } = request;
//     const token = this.extractToken(request);

//     const isPublic =
//       requestUrl.startsWith('/api/xploverse/auth') ||
//       requestUrl.startsWith('/api/xploverse/admin/create') ||
//       requestUrl.startsWith('/api/xploverse/user/create')
//         ? true
//         : false ||
//           this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//             context.getHandler(), // Check route handler (method-level metadata)
//             context.getClass(), // Check controller (class-level metadata)
//           ]);

//     if (isPublic) return true;

//     if (!token) {
//       throw new UnauthorizedException('Invalid token');
//     }

//     const isAdmin = requestUrl.startsWith('/api/xploverse/admin')
//       ? true
//       : false;

//     const isUser = requestUrl.startsWith('/api/xploverse/user') ? true : false;

//     try {
//       const decoded = await this.jwtTokenService.checkToken(token);
//       if (isAdmin) {
//         const admin = await this.adminRepository.findOneBy({
//           _id: convertToObjectId(decoded._id),
//         });

//         if (!admin) throw new AppNotFoundException('admin does not exist');

//         request.admin = admin;
//       } else if (isUser) {
//         const user = await this.userRepository.findOne({
//           where: { _id: convertToObjectId(decoded._id) },
//           select: [
//             'username',
//             'email',
//             'is_operator',
//             'phone_number',
//             'profile_picture',
//           ],
//         });

//         if (!user) throw new AppNotFoundException('user does not exist');

//         const profilePicture = await this.fileRepository.findOneBy({
//           _id: user.profile_picture,
//         });

//         request.user = { ...user, profile_picture: profilePicture };
//       }
//     } catch (error) {
//       Logger.error(error.message);
//       throw new UnauthorizedException('Invalid Token');
//     }
//     return true;
//   }
// }
