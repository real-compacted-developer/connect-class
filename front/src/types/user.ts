export interface IUser {
  readonly id: string;
  readonly nickname: string;
  readonly email: string;
  readonly profileImage: string;
  readonly isPremium: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
