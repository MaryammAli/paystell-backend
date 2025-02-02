import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class TwoFactorAuth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    secret: string;

    @Column({ default: false })
    isEnabled: boolean;

    @Column({ nullable: true, type: "timestamp" })
    lastUsedAt: Date;

    @OneToOne(() => User, (user) => user.twoFactorAuth, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}