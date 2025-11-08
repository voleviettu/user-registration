import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<{ message: string; user: Partial<User> }> {
    const { email, password, fullName } = registerUserDto;

    // Check if user already exists
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
      fullName,
    });

    try {
      const savedUser = await this.userRepository.save(newUser);

      // Return user without password
      const { password: _, ...userWithoutPassword } = savedUser;
      
      return {
        message: 'User registered successfully',
        user: userWithoutPassword,
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to register user');
    }
  }
}
