import { SetMetadata } from '@nestjs/common';

export const IS_MANAGER_KEY = 'isManager';
export const Manager = () => SetMetadata(IS_MANAGER_KEY, true);
