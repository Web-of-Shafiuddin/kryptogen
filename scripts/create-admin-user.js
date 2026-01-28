// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdminUser() {
  const email = 'admin@kryptogen.com';
  const password = 'admin123'; // Change this!
  const name = 'Admin User';

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('❌ User already exists:', email);
      console.log('If you want to reset the password, delete the user first from the database.');
    } else {
      // Create the admin user
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role: 'admin',
        },
      });

      console.log('✅ Admin user created successfully!');
      console.log('📧 Email:', email);
      console.log('🔐 Password:', password);
      console.log('👤 Name:', name);
      console.log('\nYou can now login at: /admin/login');
      console.log('\n⚠️  IMPORTANT: Change the password after first login!');
    }
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
